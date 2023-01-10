import {createRouter, createWebHistory} from 'vue-router';
import Calendar from '../views/Calendar.vue';
import Home from '../views/Home.vue';
import Random from '../views/Random.vue';
import top100 from '../views/top100.vue';
import Manga from '../views/Manga.vue';
import Search from '../views/Search.vue'
import DetalAnime from '../views/DetalAnime.vue'
import DetalCaharcter from '../views/DetalCharcter.vue'


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: '/home',
            component: Home,
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: Calendar,
        },
        {
            path: '/random',
            name: 'random',
            component: Random,
        },
        {
            path: '/top100',
            name: 'top100',
            component: top100,
        },
        {
            path: '/manga',
            name: 'manga',
            component: Manga,
        },
        {
            path: '/search',
            name: 'search',
            component: Search,
        },
        {
            path: '/detalAnime/:Aid',
            name:'detalAnime',
            component:DetalAnime,
            props: true,
        },
        {
            path: '/detalCaharcter/:Cid',
            name:'detalCaharcter',
            component:DetalCaharcter,
            props: true,
        },
       
    ]
})
export default router;