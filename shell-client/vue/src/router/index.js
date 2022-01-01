import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import { isUserLoggedIn } from '@/auth/utils'
import apps from './routes/apps'
import authentication from './routes/authentication'
import common from './routes/common'
import dashboard from './routes/dashboard'
import pages from './routes/pages'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'dashboard-analytics' } },
    ...apps,
    ...dashboard,
    ...authentication,
    ...common,
    ...pages,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn()
  const authRoutes = ['auth-register', 'auth-login']

  if (!isLoggedIn && !authRoutes.includes(to.name)) {
    // Redirect to login if not logged in
    return next({ name: 'auth-login' })
  }

  return next()
})

export default router
