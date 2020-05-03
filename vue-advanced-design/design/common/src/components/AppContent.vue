<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>

    <!-- click하자마자 emit으로 이벤트 올려보낼 수 있음 (따로 함수 생성할 필요없음) -->
    <button @click="$emit('renew')">renew items</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {

      // validation을 활용하여 typer과 required 선언
      type: Array,
      required: true,
    },
  },
}
</script>