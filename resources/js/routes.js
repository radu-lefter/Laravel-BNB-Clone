import Bookables from "./bookables/Bookables.vue";
import Bookable from "./bookable/Bookable";
import VueRouter from "vue-router";
import Review from "./review/Review";

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
    },
    {
        path: "/review/:id",
        component: Review,
        name: "review"
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;