import Vue from 'vue'
import App from './App.vue'

//export할 객체 
import { router } from './routes/index'


//vuex 라이브러리 로딩
// import Vuex from 'vuex'

// import 후 Vue 인스턴스에도 연결 
import { store } from './store/index'

// vue router 추가 및 연결 : main.js가 router 편향적인 파일이 됨.
// main은 플러그인과 라이브러리 등이 구조적으로 확인 가능해야함
// 청사진
// 따라서 router는 따로 빼서 구현하는 것이 좋음 ==> router 폴더 / index.js
// import VueRouter from 'vue-router';

// Vue.use(VueRouter);

// export const router = new VueRouter({
//   base: '/',
//   mode: 'history',
//   routes: [
//     { path: '/path', component: component }
//   ]
// });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  //router라는 인스턴스 옵션에 router를 연결
  // router:router
  //es6의 축약 문법
  router,
  store,

}).$mount('#app')
