<template>
    <div>
        <nav class="navbar bg-white border-botom navbar-light">
            <router-link class="navbar-brand mr-auto" v-bind:to="{name: 'home'}">LaravelBNB</router-link>
            <router-link class="btn nav-button" :to="{name: 'second'}">Second</router-link>
        </nav>
        <div class="container mt-4 mb-4 pr-4 pl-4"><router-view></router-view></div>
        
    </div>
</template>