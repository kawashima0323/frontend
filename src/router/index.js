import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/LoginView.vue')
    },
    {
        path: '/sandbox/:hoge2',
        name: 'sandbox',
        component: () =>
            import ('../views/SandBoxView.vue')
    },
    {
        path: '/sandbox/:hogeId',
        name: 'sandbox2',
        component: () =>
            import ('../views/SandBox2View.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router