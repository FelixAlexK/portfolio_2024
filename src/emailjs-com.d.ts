declare module "emailjs-com" {
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    userID: string,
  ): Promise<{ status: number; text: string }>;

  export function init(userID: string): void;
}
