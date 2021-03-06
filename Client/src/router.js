import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueDraggable from 'vue-draggable'
import VueSweetalert2 from 'vue-sweetalert2';
import shortKey from 'vue-shortkey';
import VueAnalytics from 'vue-analytics'
import VueNumber from "vue-number-animation";


Vue.use(Router)
Vue.use(VueNumber)
Vue.use(shortKey)
Vue.use(VueDraggable);
Vue.use(VueSweetalert2)


let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./pages/UserHome.vue'),
    },
    {
      path: '/training/:trainingId',
      component: () => import('./pages/Training.vue'),
    },
    {
      path: '/admin-dash',
      component: () => import('./pages/AdminDash.vue'),
    },
    {
      path: '/admin-train',
      component: () => import('./pages/AdminTrain.vue'),
    },
      {
          path: '/add-training',
          component: () => import('./pages/AddTraining.vue'),
      },
  ]
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    axios.post("/api/verifyAuth", {
      token: localStorage.getItem('token')
    }).then(function (res) {
      next();
    }).catch(function (err) {
      next({
        path: '/'
      });
    })
  } else {
    next();
  }
});


Vue.use(VueAnalytics, {
  id: 'UA-151322872-1',
  router
})


export default router;
