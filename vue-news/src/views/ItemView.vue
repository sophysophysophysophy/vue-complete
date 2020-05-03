<template>
<div>
  <section>

    <!-- 사용자 상세 정보  (slot -->
    <user-profile :info="fetchedItem">
      <!-- <div slot="username">{{ fetchedItem.user }}</div> -->

      <!-- router-link에도 slot 적용 가능  -->
      <router-link slot="username"  :to="`/user/${ fetchedItem.user}`"> {{ fetchedItem.user }} </router-link>
      <template slot="time">
        {{ 'Posted ' + fetchedItem.time_ago}}
      </template>
    </user-profile>


    <!-- 질문 상세 정보  -->
    <!-- <div class="user-container">
      <div>
        <i class="far fa-user"></i>
      </div>
      <div class="user-description">
        user 앞의 슬래쉬를 통해 url의 item 사라지게 만듬!!!
        따라서 localhost/item/243234 ==> localhost/user/jhoin
        <router-link :to="`/user/${fetchedItem.user}`"> {{ fetchedItem.user }} </router-link>
        <div class="time">{{ fetchedItem.time_ago }}</div>
    </div>
      </div> -->
  </section>
  <section>
      <h2>{{ fetchedItem.title}}</h2>
  </section>
  <section>
    <!-- 질문 댓글 -->
    <!-- content :  태그로 html로 구성되어 있음 -->
    <!-- v-html 사용해야 함 -->
    <!-- html 형태 (태그언어)로 작성된 내용이기에 ==> 변환작업 거쳐줌 -->
    <div v-html="fetchedItem.content"></div>
  </section>

<!-- 전체 뿌려주기 가능  -->
  <!-- <div> {{ this.$store.state.item }}</div> -->
  <!-- <p>{{ fetchedItem.title }}</p>
  <div>{{ fetchedItem.content }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id

    this.$store.dispatch('FETCH_ITEM', itemId)

  }

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}
</style>