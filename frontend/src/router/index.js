import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Products",
    name: "Product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/admin/edit/:id",
    name: "admin edit",
    component: () => import("../views/AdminEdit.vue"),
    props: true,
  },
  {
    path: '/admin/add',
    name: 'admin add',
    component: () => import('../views/AdminAdd.vue')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
