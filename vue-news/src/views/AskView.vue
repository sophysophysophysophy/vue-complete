<template>
  <div>
    <!-- item : ask 배열 순회할 때 하나의 row를 의미함 -->
    <!-- <div v-for="(item, i ) in fetchedAsk" :key="i">{{ item }}</div> -->

<list-item></list-item>



<!-- <ul class="news-list">
    <li v-for="item in fetchedAsk" :key="item.id" class="post">
      <div class="points">
        {{ item.points }}
      </div>
      <div>
        <p class="news-title">
          <a v-bind:href="item.url">{{ item.title }}</a>
          <router-link :to="`item/${item.id}`">{{ item.title}}</router-link>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
          <router-link :to="`/user/${item.user}`" class="link-text"> {{ item.user }}</router-link>/</small>    
      </div>
    </li>
  </ul> -->
  <!-- <p v-for="(item, id) in fetchedAsk" :key="id">
     <a :href="item.url">{{ item.title }}</a> 
    <router-link :to="`item/${item.id}`">{{ item.title}}</router-link>
    <small>{{ item.time_ago }} by {{ item.user }}</small>
  </p> 
  -->
  </div>
</template>
<script>
import ListItem  from '../components/ListItem' 
// import bus from '../utils/bus'
import ListMixin from '../mixins/ListMixin'

// import { fetchAskList } from '../../api/index'

// vuex에서 제공하는 map helper 사용 
// import { mapGetters } from 'vuex'

export default {
    components: {
    ListItem
  },
  mixins: [ListMixin],
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  // computed: {
  //   // #3
  //   // ...mapGetters({
  //   //   // getters의 객체 표기법 
  //   //   fetchedAsk : 'fetchedAsk'
  //   //   
  //   // })

  //   // getters의 배열 표기법
  //   // ...mapGetters([
  //   //   'fetchedAsk'
  //   // ])
  //   //  #1
  //   // ask() {
  //   //   return this.$store.state.ask
  //   // }

  //   // #2
  //   // ...mapState({
  //   //   ask : state => state.ask
  //   // })
  // },
//복습 
// es5는 이렇게 썼지만 , es6에 속성 메소드는 축약하여 쓸 수 있게 됨
// created: function (){

// }

// spinner를 mounted 라이프사이클 훅에서 종료시키면
// 마운티드 되자마자 꺼트리면 
// 더 자연스러워짐
  // mounted() {
  //   bus.$emit('end:spinner')
  // }

// 라이프사이클 훅
// 데이터 요청 : created 나 BeforeMount에서 진행함 
// 왜냐면 mounted 훅에서 데이터를 받아오면, data 다시 그리게 되면 
// view의 reactivity로 인해 화면 다시 그리게 됨 
// 관련 url : https://vuejs.org/v2/guide/reactivity.html#ad


  // created() {
  //   // fetchAskList()
  //   // .then(response => this.ask=response.data)
  //   // .catch(error => console.log(error))
  //   console.log('this!!!' , this);
    
  //   bus.$emit('start:spinner')
  //   this.$store.dispatch('FETCH_ASK')
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