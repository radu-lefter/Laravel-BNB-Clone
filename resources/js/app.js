import router from "./routes";
import VueRouter from "vue-router";
import Vue from "vue";
import index from "./index";

require('./bootstrap');

window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example-component2', require('./components/Component2.vue').default);
Vue.use(VueRouter);


const app = new Vue({
    el: '#app',
    router: router,
    components: {
        "index": index
    }
});
