import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import VueTheMask from 'vue-the-mask'
import store from './store'
import App from './App.vue'

import UserCard from "@/components/UserCard";
import UsersList from "@/components/UsersList";
import ChengeCard from "@/components/ChengeCard";
import CreatingNewUser from "@/components/CreatingNewUser";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueTheMask)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersList,
    },
    {
      path: '/change',
      name: 'change',
      component: ChengeCard,
      props: true
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserCard,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: CreatingNewUser,
      props: true
    },
  ]
});


new Vue({
  store,
  axios,
  router,
  render: h => h(App),
}).$mount('#app')



