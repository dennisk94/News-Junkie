import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import CategoryView from '../views/CategoryView.vue'
import ArticleView from '../views/ArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchView
  },
  {
    path: '/category/:slug',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: ArticleView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
