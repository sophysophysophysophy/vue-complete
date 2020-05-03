<template>
    <div class="header">
        <!-- router-link : 뷰 내부적으로 화면에 a태그로 변환해줌. to="이동할 url" -->
        <router-link to="/news">News</router-link> 
        | 
        <router-link to="/ask">Ask</router-link> 
        |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
export default {

}
</script>



<style scoped>
/* vue loader에서 scoped 속성 지원 */

.header {
    color : white;
    background-color : #42b883; 
    display: flex;
    padding : 8px;
}

/* 버튼 눌려졌을 때 */
.header .router-link-exact-active{
    color: #35495a;   
}

/* 활성화된 링크 제외한 버튼 */
.header a{
    color: white;
}
</style>