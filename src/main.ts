import { createApp } from "vue";

import App from "./app.vue";
import "./style.css";

const app = createApp(App);

app.directive("reveal", {
  mounted(el: HTMLElement) {
    el.classList.add("reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("is-visible");
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    observer.observe(el);
  },
});

app.mount("#app");
