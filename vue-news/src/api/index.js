//axios => pakage.json에 설치되어있는 라이브러리 들고 오는것
// node_modules에 접근해서 axios 가져오는 것이 아니라 
// 바로 이름으로 호출 가능 
// 이해 잘... ;; 
import axios from 'axios'


// config 파일로 동일한 부분 관리
// 1. 기본 HTTP Request & response와 관련한 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}


// 2. API 함수들을 정리
function fetchNewsList() {
    // es6 템플릿 스트링 (백틱 연산자 )
    // return은 new promise를 하나 떨어트리게 됨 ==> then , catch 사용 가능한 것
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}


// api단에서 에러 처리
async function fetchAskList() {
    try {
        const res = axios.get(`${config.baseUrl}ask/1.json`)
        return res

        // 변수 선언없이 바로 return도 가능 
        // return axios.get(`${config.baseUrl}ask/1.json`)    
        
    } catch (error) {
        console.log(error);
        
    }
    
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`)
}


function fetchItemInfo(item){
    return axios.get(`${config.baseUrl}item/${item}.json`)
}

// for 하이오더 컴포넌트
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

// 3. 함수들 꺼내기
// es6의 모듈 문법 : 꼭 export해야 다른 곳에서 사용 가능
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList

}