// Importo la funzione Vue Router
import { createRouter, createWebHistory } from "vue-router";

// Importo le pagine
import HomePage from "../pages/HomePage.vue";
import ContactUsPage from "../pages/ContactUsPage.vue";
import NotFoundPage from "../pages/NotFoundPages.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

// Definisco le rotte
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    { path: "/", component: HomePage, name: "home" },
    {
      path: "/projects/:id",
      component: ProjectDetailPage,
      name: "project-detail",
    },

    { path: "/Contact-Us", component: ContactUsPage, name: "contact-us-page" },
    {
      path: "/page-not-found",
      component: NotFoundPage,
      name: "page-not-found",
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
      redirect: "page-not-found",
    },
  ],
});

export default router;
