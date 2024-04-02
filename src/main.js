import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import AppLoader from "./components/AppLoader.vue";
import router from "./router"; // Importa il router correttamente

const app = createApp(App); // Crea un'applicazione Vue

// Registra il componente AppLoader globalmente
app.component("AppLoader", AppLoader);

// Usa il router nell'applicazione
app.use(router);

// Monta l'applicazione al nodo con id "app" nel DOM
app.mount("#app");
