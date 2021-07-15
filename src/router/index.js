import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import Category from '../views/CategoriesList.vue'
import Student from '../views/StudentList.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/categories',
    name: 'Category',
    component: Category
  },
  {
    path: '/students',
    name: 'Student',
    component: Student
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
