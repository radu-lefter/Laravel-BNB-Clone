import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable";
import VueRouter from "vue-router";

const routes = [
    {
        path:"/",
        component: Bookables,
        name:  "home"
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable",
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;