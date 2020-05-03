<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">

      <!-- 데이터 불러오는 건 하위 컴포넌트에서 진행 -->
      <!-- 아래 컴포넌트에 있는 데이터를 slot-scope을 이용하여 노출 -->
      <!-- 새로운 디자인 패턴..! -->
      <div slot-scope="{ response, loading }">
        <div v-if="!loading">
          {{ response}}
        </div>
        
        <div v-if="loading">
          Loading...
        </div>       
      </div>

    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
}
</script>