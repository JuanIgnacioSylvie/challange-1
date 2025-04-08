import { createRouter, createWebHistory } from 'vue-router'
import CreateForm from '@/views/CreateForm.vue'
import RespondForm from '@/views/RespondForm.vue'
import ResultsForm from '@/views/ResultsForm.vue'
import CreatePoll from '@/views/CreatePoll.vue'
import RespondPoll from '@/views/RespondPoll.vue'
import ResultsPoll from '@/views/ResultsPoll.vue'

const routes = [
  { path: '/', name: 'Home', component: CreateForm },
  { path: '/poll/create', name: 'CreatePoll', component: CreatePoll },
  { path: '/poll/respond/:id', name: 'RespondPoll', component: RespondPoll },
  { path: '/poll/results/:id', name: 'ResultsPoll', component: ResultsPoll },
  { path: '/form/respond/:id', name: 'RespondForm', component: RespondForm },
  { path: '/form/results/:id', name: 'ResultsForm', component: ResultsForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
