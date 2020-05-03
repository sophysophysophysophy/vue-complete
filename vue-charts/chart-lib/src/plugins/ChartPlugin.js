// 플러그인 새로 생성
// main.js에서 플러그인 로딩
// 공통적으로 사용할 코드 넣으면 됨
// 컴포넌트마다 라이브러리 로딩하지 않아도 됨

import Chart from 'chart.js'

export default {
    // 첫인자 : Vue => function 제공됨
    install(Vue) {
        // console.log('chart plugin loaded', Vue)

        // 모든 컴포넌트에서 this.$_Chart로 접근하는 것과 같은 효과
        // 플러그인에서 한번만 로딩해오고, 다른 컴포넌트에서는 불러온 데이터만 사용하기 위하여
        // 어디서든 사용 가능하게 됨..
        Vue.prototype.$_Chart = Chart 
    }
}