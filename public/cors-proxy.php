<?php
// CORS proxy for the kitchen photo frame calendar.
//
// Apple iCloud's CalDAV server does not send the Access-Control-Allow-Origin
// header the browser needs for a cross-origin fetch, and public CORS proxies
// (corsproxy.io, allorigins.win, etc.) are unreliable. This script is a tiny
// server-side proxy hosted on your own domain, so the proxy is always under
// your control and always serves CORS headers.
//
// Usage:
//   https://YOURDOMAIN/cors-proxy.php?url=<encoded url>
//
// Behavior:
//   * Returns Access-Control-Allow-Origin: * so any page can fetch it.
//   * Forwards the upstream Content-Type and HTTP status code.
//   * Follows up to 5 redirects.
//   * 30 s timeout, 5 MiB response cap.
//   * If the upstream is unreachable or returns an error, the body shows
//     "upstream HTTP <code>" or "proxy error" with the matching status code,
//     so the WebView's fetch().catch() will surface a useful message.

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: *');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if (!isset($_GET['url']) || $_GET['url'] === '') {
    http_response_code(400);
    header('Content-Type: text/plain; charset=utf-8');
    echo "usage: ?url=<encoded url>\n";
    exit;
}

$url = $_GET['url'];

// Only allow http(s) URLs. Block file://, gopher://, etc.
if (!preg_match('#^https?://#i', $url)) {
    http_response_code(400);
    header('Content-Type: text/plain; charset=utf-8');
    echo "only http(s) URLs are allowed\n";
    exit;
}

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_MAXREDIRS, 5);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (kitchen-frame-cors-proxy)');
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: text/calendar, text/plain;q=0.9, */*;q=0.5']);
// 5 MiB cap so a runaway upstream can't fill the disk.
$maxBytes = 5 * 1024 * 1024;
curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($ch, $chunk) use (&$got, $maxBytes) {
    $got += strlen($chunk);
    if ($got > $maxBytes) {
        return 0; // causes curl to abort with CURLE_WRITE_ERROR
    }
    return strlen($chunk);
});

$body = curl_exec($ch);
$err = curl_error($ch);
$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
$ctype = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
curl_close($ch);

if ($body === false) {
    http_response_code(502);
    header('Content-Type: text/plain; charset=utf-8');
    echo "proxy error: " . htmlspecialchars($err) . "\n";
    exit;
}

if ($ctype) {
    // Strip a charset the upstream might claim if the body is empty, etc.
    header('Content-Type: ' . $ctype);
}
http_response_code($code ?: 200);
echo $body;
