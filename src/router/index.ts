import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UsersGridPage from "@/views/users-grid-page.vue";
import RouteName from "@/core/enums/route-name.enum";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RouteName.UsersGridPage,
    component: UsersGridPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
