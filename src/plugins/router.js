import { createWebHistory, createRouter } from 'vue-router';
import defaultLayout from '../layouts/DefaultLayout.vue'
import dashboard from '../layouts/DashboardLayout.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue'),
        meta:{
            layout: dashboard
        }
    },
    {
        path: '/attendance',
        name: 'attendance',
        component: () => import('../pages/Attendance.vue'),
        meta:{
            layout: dashboard
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router