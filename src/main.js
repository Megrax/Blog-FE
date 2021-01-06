import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import headNav from './components/headNav.vue';

// const routes = [
//   { path: '/login', component: login },
//   {
//       path: '/library',
//       component: library,
//       children: [
//           { path: 'borrow-book', component: borrowBook },
//           { path: 'return-book', component: returnBook },
//           { path: 'my-info', component: myInfo },
//           { path: 'borrow-record', component: borrwoRecord },
//           { path: 'manage-info', component: manageInfo },
//           { path: 'ranking', component: ranking },
//       ]
//   },
//   {
//       path: '/admin',
//       component: admin,
//       children: [
//           { path: 'operate-book', component: operateBook },
//           { path: 'add-book', component: addBook },
//           { path: 'ranking', component: ranking },
//       ]
//   },
// ]

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
});