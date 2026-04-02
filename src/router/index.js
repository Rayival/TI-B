import { createRouter, createWebHistory } from "vue-router"

import Home from "../pages/Home.vue"
import Spin from "../pages/Spin.vue"
import menfess from "../pages/menfess.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",      // ini halaman utama
      component: Home
    },
    {
      path: "/menfess",
      component: menfess
    },
    {
      path: "/spin",
      component: Spin
    }
  ]
})

export default router