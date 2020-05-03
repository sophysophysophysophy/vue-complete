<template>
  <div>


    <list-item></list-item>


    <!-- <div v-for="(job , id) in this.$store.state.jobs" :key="id"> {{ job.title }}</div> -->
<!-- 
<ul class="news-list">
    <li v-for="item in this.$store.state.jobs" :key="item.id" class="post">
      포인트 영역
      <div class="points">
        {{ item.points || 0 }}
      </div>
      기타정보 영역
      <div>
        <p class="news-title">
          <a :href="item.url">{{ item.title }}</a>
        </p>
        <small class="link-text">
          {{ item.time_ago }}
          by
          <a :href="item.url">{{ item.domain }}</a>
          </small>
      </div>
    </li>
  </ul> -->
  
  <!-- <p v-for="(item, id) in this.$store.state.jobs" :key="id"> -->
    <!-- v-bind:href를 축약문법 -->
    <!-- v-bind하면 링크가 아닌 변수가 됨 -->
    <!-- <a :href="item.url">{{ item.title }}</a>
    <small>{{ item.time_ago }} {{ item.domain }}</small>
  </p> -->
  </div>
</template>

<script>
import ListItem  from '../components/ListItem' 
// import bus from '../utils/bus'
// mixin 사용 
import ListMixin from '../mixins/ListMixin'

// import { fetchJobsList } from '../../api/index'

export default {

  components: {
    ListItem
  },
  mixins: [ListMixin],
  data() {
    return {
      jobs: []
    }
  },
  // spinner를 mounted 라이프사이클 훅에서 종료시키면
  // 마운티드 되자마자 꺼트리면 
  // 더 자연스러워짐
  // mounted() {
  //   bus.$emit('end:spinner')
  // },
   

  //  created() {
  //   //  fetchJobsList()
  //   //  .then(response => this.jobs = response.data)
  //   //  .catch(error => console.log(error))

  //   bus.$emit('start:spinner')

  //   setTimeout(()=>{
  //     this.$store.dispatch('FETCH_JOBS')
  //     .then(() => {
  //     // spinner는 데이터 다 불러오고 나서 종료하면 됨
  //     console.log('fetched');
      
  //     bus.$emit('end:spinner')  
  //   }) 
  //   }, 3000)
  //  }
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