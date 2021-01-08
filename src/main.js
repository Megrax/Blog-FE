import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';
import axios from 'axios';

import login from './components/login.vue';
import blog from './components/blog.vue';
import indexPart from './components/indexPart.vue';
import postPart from './components/postPart.vue';
import postListPart from './components/postListPart.vue';
import tagListPart from './components/tagListPart.vue';

Vue.prototype.axios = axios;
Vue.prototype.globalUrl = "http://localhost:3000";

const routes = [
  { path: '/login', component: login },
  {
    path: '/blog',
    component: blog,
    children: [
      { path: '', component: indexPart },
      { path: 'index', component: indexPart },
      { path: 'posts/:pid', component: postPart },
      { path: 'tag-list', component: tagListPart },
      { path: 'post-list', component: postListPart },
    ]
  }
];

Vue.use(VueCookies);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});