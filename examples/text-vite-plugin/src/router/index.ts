import { createRouter, createWebHashHistory, Router } from 'vue-router';
const routes: any = [
  { path: '/a', component: () => import('../components/A.vue'), name: 'A' },
  { path: '/b', component: () => import('../components/B.vue'), name: 'B' },
];

const router: Router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});

export default router;
