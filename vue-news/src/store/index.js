//vuex 라이브러리 로딩
import Vue from 'vue'
import Vuex from 'vuex'
// import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'
// import { fetchJobsList } from '../api/index.js'

//모듈화 
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)


// vuex : 상태관리 라이브러리
        // 여러 컴포넌트에서 공유하는 데이터 관리
        // 서비스가 복잡해졌을 때 유용하게 데이터 조작 가능

// vuex.store 또한 인스턴스 ==> 사용하려면 export해야함 
// 라우터처럼 main.js에서 import
export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],

        // for 하이오더 컴포넌트
        list:[],
    }, 


    //computed와 동일한 속성 다만 store에 있는 것
    getters: {
        fetchedAsk(state) {
            return state.ask
        },
        fetchedItem(state) {
            return state.item
        }
    },
    //mutations: {
        //축약 (향상된 객체 리터럴 )
        // mutation의 첫 인자 : state
        // SET_NEWS(state, news){
        //     state.news = news
        // },
        // SET_JOBS(state, jobs) {
        //     state.jobs = jobs
        // },
        // SET_ASK(state, ask) {
        //     state.ask = ask
        // }
    //},
    mutations,
    //api 호출 : actions에서 진행
    // 모든 비동기처리는 acitons에서 
    // actions: {
    //     // data는 state에 담음
    //     // vuex 구조상 actions에서 state로 데이터 바로 넣을 수 없음
    //     // state.data 인식 불가 
    //     // context commit 으로 mutation 호출하여 flow 진행
    //      FECTH_NEWS(context) {
    //         fetchNewsList()
    //         .then(response => {
    //             console.log(response);
    //             context.commit('SET_NEWS', response.data)
    //         })
    //         .catch(error => console.log(error))
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //         .then(({ data }) => commit('SET_JOBS', data))
    //         .catch(error => console.log(error))
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList()
    //         .then(({ data }) => commit('SET_ASK', data))
    //         .catch(error => console.log(error))
    //     }
    // }
    actions
})

