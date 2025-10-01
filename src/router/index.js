import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Ensayos from "../views/Ensayos.vue";
import NuestroEquipo from "../views/NuestroEquipo.vue";
import LeerEnsayo from "../views/LeerEnsayo.vue";
import AuthCallback from "../views/AuthCallback.vue";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/Ensayos",
    name: "Ensayos",
    component: Ensayos,
  },
  {
    path: "/Ensayos/:id",
    name: "LeerEnsayo",
    component: LeerEnsayo,
  },
  {
    path: "/NuestroEquipo",
    name: "Nuestro Equipo",
    component: NuestroEquipo,
  },
  {
    path: "/auth/callback",
    name: "auth_callback",
    component: AuthCallback,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
       savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
