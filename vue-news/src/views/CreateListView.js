import ListView from './ListView'
import bus from '../utils/bus'
// js파일에서는 this로 접근 불가... (vue객체가 아니라서 this가 undefined로 나옴 ㅠ)
// 따로 import해서 사용해야함 
// 강의에서는 나오지 않은 내용,,,, 뭐지??

import {store} from '../store/index';

// 하이오더 컴포넌트
export default function createListView(name) {
    
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // 하이오더컴포넌트
        name: name,
        // 데이터 요청 담당 ==> created 훅
        created() {
            console.log('debug' , name);
            
            bus.$emit('start:spinner')
            
            store.dispatch('FECTH_NEWS')
            .then(() => {
              // spinner는 데이터 다 불러오고 나서 종료하면 됨
              console.log('fetched');
              
              bus.$emit('end:spinner')  
            })
        },
        // 내부적으로 탬플릿을 변환하기 위해 render 함수를 씀
        // render 함수를 통해 컴포넌트 로딩
        render(h){
            console.log('render');
            
            return h(ListView)
        }
    }
}