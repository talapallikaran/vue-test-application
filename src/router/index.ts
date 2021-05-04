import { routePaths } from "@/constants";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import UserListing from "../views/UserListing/UserListing.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: routePaths.ROOT,
    name: "User Listing",
    component: UserListing,
  },
  {
    path: routePaths.USER_LISTINGS,
    name: "User Listing",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/UserListing/UserListing.vue"
      ),
  },
  {
    path: routePaths.USER_DETAILS,
    name: "User Details",
    // component: UserDetails,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/UserDetails/UserDetails.vue"
      ),
  },
  {
    path: routePaths.POST_LISTINGS,
    name: "Post Listing",
    // component: UserDetails,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/PostListing/PostListing.vue"
      ),
  },
  {
    path: routePaths.POST_DETAILS,
    name: "Post Details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/PostDetails/PostDetails.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
