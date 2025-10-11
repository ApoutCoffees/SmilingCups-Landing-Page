import { createRouter, createWebHashHistory } from "vue-router";

import Layout from '../components/layout.vue';
import Home from '../views/home.vue';
import About from '../views/about.vue';
import Goals from '../views/goals.vue';
import Contact from '../views/contact.vue';


const routes = [
    {

        path: '/',
        component: Layout,

        children: [
            {
                path: '',
                name: 'home',
                component: Home
            },
            {
                path: 'about',
                name: 'about',
                component: About
            },
            {
                path: 'goals',
                name: 'goals',
                component: Goals
            },
            {
                path: 'contact',
                name: 'contact',
                component: Contact
            }
        ]
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});


export default router;