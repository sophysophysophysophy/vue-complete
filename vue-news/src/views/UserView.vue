<template>
  <div>
    <!-- <p>name :  {{ this.$store.state.user.id }}</p>
    <p>karma :  {{ this.$store.state.user.karma }}</p>
    <p>created :  {{ this.$store.state.user.created }}</p> -->

    <!-- <p>name :  {{ userInfo.id }}</p>
    <p>karma :  {{ userInfo.karma }}</p>
    <p>created :  {{ userInfo.created }}</p> -->

    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>

      <!-- template 태그 : 텍스트만 들어올 때 사용  -->
      <span slot="time"> {{ 'Joined ' + userInfo.created}} , </span>

      <span slot="karma">{{ userInfo.karma}}</span>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile'

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  created() {
    // console.log(this.$route);
    const userName = this.$route.params.id

    // created에서 데이터 불러오면, 값이 늦게 바뀌게 됨 
    this.$store.dispatch('FETCH_USER', userName)

    
  }
}
</script>

<style>

</style>