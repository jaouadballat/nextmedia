import VueRouter from 'vue-router';

import Home from '@/components/Home';
import Post from '@/components/Post';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    }

];

const router = new VueRouter({
    routes,
    mode: 'history'
});



export default router;