import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  {
    path: "/",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/product/add",
    name: "product add",
    component: () => import("../views/AddView.vue"),
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/product/edit/:id",
    name: "product edit",
    component: () => import("../views/EditView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
