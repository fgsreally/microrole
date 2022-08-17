import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import vRole from "microrole";

// function loadCss(url){
//     let css = document.createElement('link');
//     css.href = url;
//     css.rel = 'stylesheet';
//     css.type = 'text/css';
//     document.head.appendChild(css);
//   };

createApp(App).use(router).use(vRole()).mount("#app");
