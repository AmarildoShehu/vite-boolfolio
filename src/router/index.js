// Importo la funzione Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from "../pages/HomePage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";

// Definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/Contact-Us", component: ContactUsPage },
  ],
});

export default router;
