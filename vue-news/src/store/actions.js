// 스토어 속성 모듈화

import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'

export default {

    // promise ver
    // FECTH_NEWS(context) {
    //     fetchNewsList()
    //     .then(response => {
    //         console.log(response);
    //         context.commit('SET_NEWS', response.data)
    //     })
    //     .catch(error => console.log(error))
    // },


    // async ver
    async FECTH_NEWS(context) {

        // 이 부분에서 try catch 쓸 수도 있지만
        // api 호출할 때 예외처리하는 것이 일반적 ( action OR api은 선택이긴함 )
        const response = await fetchNewsList()
        context.commit('SET_NEWS', response.data)

        // return 해줘서 결과값 반환해야 이 함수를 호출한 부분에서
        // 다음 로직이 가능해짐 ( then 등 )
        return response
    },


    //promise ver
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //     .then(({ data }) => commit('SET_JOBS', data))
    //     .catch(error => console.log(error))
    // },

    // async ver
    async FETCH_JOBS({ commit }) {
        try{
            const response = await fetchJobsList()
            commit('SET_JOBS', response.data)
            return response

        } catch(err) {
            console.log(err);
            
        }
    },


    FETCH_ASK({ commit }) {
        fetchAskList()
        .then(({ data }) => commit('SET_ASK', data))
        .catch(error => console.log(error))
    },
    // 인자는 하나만 보낼 수 있음 (따라서 객체로 넘겨주는게 좋음)
    FETCH_USER({ commit }, userName) {
        fetchUserInfo(userName)
        .then(({ data }) => commit('SET_USER', data))
        .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit }, item) {
        fetchItemInfo(item)
        .then(({ data }) => commit('SET_ITEM', data))
        .catch(error => console.log(error))
    },

    // 실행 순서 ==> promise 객체 반환되어야 보장됨
    // #2
    FECTH_LIST({ commit }, pageName) {


        // #3
        // return을 해주어야 .then이 실행되어서 spinner가 돌 수 있음
        return fetchList(pageName)
        .then(( response) => {

            // #4
            console.log(4);
            
            commit('SET_LIST', response.data) 
            return response
        })
        .catch(error => console.log(error))
    }
}