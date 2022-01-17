import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserComments from "../views/UserComments.vue";
import UserThreads from "../views/UserThreads.vue";
import UserSaved from "../views/UserSaved.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:userId/comments",
    name: "UserComments",
    component: UserComments,
  },
  {
    path: "/:userId/threads",
    name: "UserThreads",
    component: UserThreads,
  },
  {
    path: "/:userId/saved",
    name: "UserSaved",
    component: UserSaved,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
