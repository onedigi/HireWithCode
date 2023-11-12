import { createRouter, createMemoryHistory } from "vue-router"
import WelcomePage from '../components/WelcomePage.vue'
import InterviewGuide from '../components/InterviewGuide.vue'
import AcceptChallenge from '../components/AcceptChallenge.vue'
import CompleteChallenge from '../components/CompleteChallenge.vue'

const routes = [
    {
        path: '/',
        name: WelcomePage,
        component: WelcomePage
    },
    {
        path: '/interview-guide',
        name: InterviewGuide,
        component: InterviewGuide
    },
    {
        path: '/accept-challenge',
        name: 'AcceptChallenge',
        component: AcceptChallenge, // 设置接受挑战页面的路由
    },
    {
        path: '/complete-challenge',
        name: CompleteChallenge,
        component: CompleteChallenge
    }
]

const router = createRouter({
    history: createMemoryHistory(import.meta.env.BASE_URL),
    routes
})

export default router