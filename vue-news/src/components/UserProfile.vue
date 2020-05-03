<template>
  <div>
    <div class="user-container">
        <div>
            <i class="far fa-user"></i>
        </div>
        <div class="user-description">

            <!-- slot이용하여 분기 처리  -->
            
            <slot name="username">
                <!-- 상위 커포넌트에서 정의할 영역 -->
            </slot>

            <!-- <router-link :to="`/user/${info.id}`"> {{ info.id }} </router-link> -->
            <!-- <div class="time">{{ info.created }}</div> -->

            <div class="time">
                <!-- time : {{ info.created }} -->
                <slot name="time"></slot>
            </div>
            <slot name="karma"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
// 데이터 넘기는 방법 많음
// store 사용하고 있기 때문
// 1. UserView에서 불러오고, profile에서 바로 꺼내서 사용 
// 2. props로 내림 
// 두가지 데이터 처리 흐름 비교 
// ==> vuex 구조에 적합하게 하려면, state는 표현하는 부분에서 땡겨서 화면에 나타내면 됨
// props로 준다면 컴포넌트 태그 명시적인 이득이 있긴 함
// 따라서 각 상황에 맞춰 코딩하면 됨


props: {
    info: Object
}

//   computed: {
//     userInfo() {
//       return this.$store.state.user
//     }
//   },
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