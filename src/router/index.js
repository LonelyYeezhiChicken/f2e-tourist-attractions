import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
    history: createWebHashHistory(), routes: [
        {
            path: "/weclome", component: () => import("../components/HelloWorld.vue"),
        }
    ]
});