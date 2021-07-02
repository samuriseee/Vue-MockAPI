import Vue from "vue";
import VueRouter from "vue-router";
import userDetails from "../views/UserDetails.vue";
import Home from "../views/Home.vue";
import Default from "../../layout/default.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: Default,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user/:id",
    name: "userDetails",
    component: userDetails,
  },
  {
    path: "/regester",
    name: "Regester",
    component: () => import("@/views/Regester.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
