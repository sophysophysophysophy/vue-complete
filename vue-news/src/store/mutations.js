export default {
    //축약 (향상된 객체 리터럴 )
    // mutation의 첫 인자 : state
    SET_NEWS(state, news){
        state.news = news
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs
    },
    SET_ASK(state, ask) {
        state.ask = ask
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_ITEM(state, item) {
        state.item = item
    },
    SET_LIST(state, list) {
        state.list = list
    }
}