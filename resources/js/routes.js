import ExampleComponent from "./components/ExampleComponent.vue";
import ExampleComponent2 from "./components/Component2.vue";
import VueRouter from "vue-router";

const routes = [
    {
        path:"/",
        component: ExampleComponent,
        name:  "home"
    },
    {
        path:"/second",
        component: ExampleComponent2,
        name:  "second"
    }
]

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;