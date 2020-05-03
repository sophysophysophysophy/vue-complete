<template>
  <div>
    <ul>
      <!-- 각 로우의 구조 각각 정의 가능 (돔 구조 확장) -->
      <item>아이템 1</item>

      <item>아이템 2 <button>click</button></item>

      <item>
        아이템 3
        <img src="http://www.naver.com/ddd" />
      </item>
      <item>
        <div style="color:red; ">아이템 4</div>
      </item>
      <item>아이템 5</item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    Item,
  },
}
</script>