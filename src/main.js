import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';

import login from './components/login';
import blog from './components/blog';
import indexPart from './components/indexPart';
import postPart from './components/postPart';
import postListPart from './components/postListPart';
import tagListPart from './components/tagListPart';

const routes = [
  { path: '/login', component: login },
  {
    path: '/blog',
    component: blog,
    children: [
      { path: '', component: indexPart },
      { path: 'index', component: indexPart },
      { path: 'post', component: postPart },
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