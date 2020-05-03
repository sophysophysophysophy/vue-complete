<template>
<div>
  <list-item></list-item>
  
  <!-- <ul class="news-list">
    <li v-for="(item, id) in this.$store.state.news" :key="id" class="post">
      포인트 영역
      <div class="points">
        {{ item.points}}
      </div>
      기타정보 영역      
      <div>
        <p class="news-title">
          <a v-bind:href="item.url">{{ item.title }}</a>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
                <router-link :to="`/user/${item.user}`" class="link-text"> {{ item.user }}</router-link>/</small>    
      </div> -->

      <!-- <a v-bind:href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by 
      <router-link :to="`/user/${item.user}`"> {{ item.user }}</router-link>/</small> -->
    <!-- </li> -->
  <!-- </ul> -->
  <!-- <div v-for="(user,id) in this.$store.state.news" :key="id">{{ user.title }}</div> -->
  <!-- <p v-for="(item, id) in this.$store.state.news" :key="id">
    <a v-bind:href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }} by 
    <router-link :to="`/user/${item.user}`"> {{ item.user }}</router-link>/</small>
  </p> -->

  <!-- <bus /> -->
</div>
</template>

<script>
// 공통 컴포넌트로 리팩토링
import ListItem  from '../components/ListItem'
// import bus from '../utils/bus'

import ListMixin from '../mixins/ListMixin'

// npm i axios 
// 통신 api 편하게 해주는 라이브러리
// axios ==> promise 기반 api
//axios => pakage.json에 설치되어있는 라이브러리 들고 오는것
// 이제는 api 폴더를 통해 axios 호출
// api 폴더 통하는 통신으로 리팩토링 


// import axios from 'axios'
// import { fetchNewsList } from '../../api/index.js'

export default {

  components: {
    ListItem,
  },
  mixins: [ListMixin],

  // spinner를 mounted 라이프사이클 훅에서 종료시키면
// 마운티드 되자마자 꺼트리면 
// 더 자연스러워짐
  // mounted() {
  //   bus.$emit('end:spinner')
  // },
  // 직접 axois 불러오는 방법 
  // 추천하지 않음 => 리팩토링할 것
  // data() {
  //   return {
  //     users : []

  //   }
  // },
  
  // created() {

  //   bus.$emit('start:spinner')

  //   // get 메소드 => 프로미스 객체 반환 따라서 then, catch 사용 가능한것
  //   // axios.get('https://api.hnpwa.com/v0/news/1.json')
  //   // .then(response => {console.log(response); this.users = response.data})
  //   // .catch(error => console.log(error))

  //   // fetchNewsList()
  //   // .then(response => {console.log(response); this.users=response.data})
  //   // .catch(error => console.log(error))

  //   // vuex로 리팩토링 => api 호출 actions에서 진행
  //   // despatch를  통해 FECTH_NEWS 실행됨
  //   this.$store.dispatch('FECTH_NEWS')
  //   .then(() => {
  //     // spinner는 데이터 다 불러오고 나서 종료하면 됨
  //     console.log('fetched');
      
  //     bus.$emit('end:spinner')  
  //   }) 

    

  // }
}

</script>

<style scoped>
/* .news-list{
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;

}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;

  세로 중앙정렬
  justify-content: center;
  color: #42bBB3;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>