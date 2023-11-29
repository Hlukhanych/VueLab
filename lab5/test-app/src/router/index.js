import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignView from "@/views/SignView.vue";
import ClientView from "@/views/ClientView.vue";
import LessonsView from "@/views/LessonsView.vue";
import TeachersView from "@/views/TeachersView.vue";
import SummaryView from "@/views/SummaryView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView
  },
  {
    path: '/client',
    name: 'client',
    component: ClientView
  },
  {
    path: '/lessons',
    name: 'lessons',
    component: LessonsView,
    children:[
      {
        path: "/lessons/select",
        name: "select",
        component: LessonsView,
      },
    ]
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: TeachersView,
    props: (route) => ({ lessonIds: route.query.lessonIds }),
  },
  {
    path: '/summary/:lessonTeacherPairs',
    name: 'summary',
    component: SummaryView
  },
  {
    path: '/page-not-found',
    name: 'page-not-found',
    component: PageNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
