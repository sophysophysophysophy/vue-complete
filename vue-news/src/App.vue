<template>
  <div id="app">
    <!-- url이 만약 news -->
    <!-- <newsview></newsview> -->
    <tool-bar></tool-bar>
    <!-- 자연스러운 화면 이동 효과를 위해 : transition -->
    <!-- name 뒤의 fade가 뷰 내부적으로 pre-fix가 됨  -->
    <!-- fade 줌으로써 단계적인 스타일 줌  -->
    <transition name="page">
       <router-view></router-view>
    </transition>

    <!-- spinner 시작 & 종료 시점 고민 -->
    <!-- spinner 경우 props를 위해 이벤트 버스를 활용하는 편 -->
    <spinner :loading="loadingStatus"></spinner>


    <bus />

  </div>
</template>

<script>
// ToolBar === tool-bar (파스칼케이스 ===> 케밥 케이스)
// 케밥 케이스 (tool-bar) 는 링크 연결이 됨(ctrl). 파스칼케이스는 연결 안됨
// essential : 케밥 케이스
// strongly recommended : 파스칼 케이스


import ToolBar from './components/ToolBar'
import Spinner from './components/Spinner'
import bus from './utils/bus'

export default {
  name: 'App',
  components : {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: true
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    // bus.$on('start:spinner',() => this.loadingStatus = true)

    bus.$on('start:spinner', this.startSpinner)
    bus.$on('end:spinner', this.endSpinner)

    // env 파일 접근
    console.log(process.env.VUE_APP_TITLE);
    
  },

  // bus on을 한 경우, off를 꼭 해주어야 함
  // 이벤트 객체가 쌓이지 않도록
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner)
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* 링크걸려서 밑줄쳐저있는거 제거 */
/* 최상단 앵커 태그에 스타일 주면 됨 */
a {
  color: #34495e;
  text-decoration: none;
}

/* 특정 태그에 상태 변화가 일어날 때 스타일링 줄 수 있음 */
a:hover{
  color: #42bBB3;
  text-decoration: underline;
  
}

/* 하지만 클릭된 객체는 밑줄 주고 싶음 */

a.router-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
