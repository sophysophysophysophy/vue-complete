//라우터 설정하는 파일
// main.js에 있었떤 vue 라이브러리 인식 못하기 때문에 똑같이 들고 와야함

import Vue from 'vue'
import VueRouter from 'vue-router'

//코딩 컨벤션 
// 객체로 잡아서 from을 가면 파일 위치 감지 쉬움
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView' 

import bus from '../utils/bus'
import { store } from '../store/index'

// import CreateListView from '../views/CreateListView.js'

Vue.use(VueRouter);


//라우터에 대한 정보들을 관리하는 객체
//export된 변수는 main.js에서 import하여 사용 가능
export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
        // /으로 들어가자마자 news로 redirect됨
        path: '/',
        redirect: '/news',
    },
    { 
        //path : url에 대한 주소 (정보) 
        path: '/news', 

        //이름이 추가 가능 => 라우터로 정보 전달됨
        name:'news',

        //url 주소로 갔을 때 표시될 컴포넌트 (page단위가 오면 좋음 (views 폴더에 있는 page단위 vue 컴포넌트))
        component: NewsView,
        // components: CreateListView('NewsView')


        // 네비게이션 가드ㅇ
        // 특정 url 접근할 때 인증 등 확인하기 위해 가장 많이 쓰임
        beforeEnter: (to, from, next)=> {

                // 이동할 URL 라우팅정보
                console.log('to', to);

                // 현재 위치의 라우팅 정보
                console.log('from', from);

                // function. next 호출해야지만 해당 url로 이동 가능
                console.log('next', next);

                // 인증 check 등 진행
                // if( to.auth) {
                //     next()
                // }else {
                //     router.replace('/login')
                // }

                // 컴포넌트 생성 전 데이터 불러오는 로직 beforeEnter에서 진행
                // 화면 변환 후 데이터 변경되는 현상 막기 위해
                bus.$emit('start:spinner')

                store.dispatch('FECTH_LIST', to.name)
                .then(() => {

                // 이 부분에서 종료시키는 것 보다
                // 해당 컴포넌트에서 mounted됐을 때 종료시키는 것이 더 자연스러워짐
                // bus.$emit('end:spinner')
                  next()
                }) 
                .catch(err => console.log(err))
            },  
    },
    { 
        path: '/jobs', 
        name:'jobs',
        component: JobsView,
        // components: CreateListView('JobsView')

        beforeEnter: (to, from, next)=> {
            bus.$emit('start:spinner')

            store.dispatch('FECTH_LIST', to.name)
            .then(() => {

            // 이 부분에서 종료시키는 것 보다
            // 해당 컴포넌트에서 mounted됐을 때 종료시키는 것이 더 자연스러워짐
            // bus.$emit('end:spinner')
                next()
            }) 
            .catch(err => console.log(err))
        }
    },
    { 
        path: '/ask', 
        name:'ask',
        component: AskView,

        // components: CreateListView('AskView')

        beforeEnter: (to, from, next)=> {
            bus.$emit('start:spinner')

            store.dispatch('FECTH_LIST', to.name)
            .then(() => next()) 
            .catch(err => console.log(err))
        }
    },
    { 
        path: '/item/:id', 
        component: ItemView 
    },
    { 
        path: '/user/:id', 
        component: UserView 
    },
  ]
});