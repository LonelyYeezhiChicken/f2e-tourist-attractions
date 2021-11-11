import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomePage.vue")
    },
    {
      path: "/tour",
      name: "Tour",
      component: () => import("../views/TourPage.vue"),
    },
    {
      path: "/restaurant",
      name: "Restaurant",
      component: () => import("../views/RestaurantPage.vue"),
    },
    {
      path: "/bed",
      name: "Bed",
      component: () => import("../views/BedPage.vue"),
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
})

  export default router