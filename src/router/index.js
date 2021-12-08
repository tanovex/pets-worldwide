import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 };
    }
  }
})



// router.beforeEach((to, from, next) => {
//   Store.commit('setIsLoading', true);

//   Promise.all([
//       SetPageTitleGuard(to, from, next),
//       RequiresAutomationDefinitionGuard(to, from, next),
//       SetRouteHistory(to, from, next)
//   ]).then(() => {
//       next();
//   }).finally(() => {
//       Store.commit('setIsLoading', false);
//   });
// });

export default router
