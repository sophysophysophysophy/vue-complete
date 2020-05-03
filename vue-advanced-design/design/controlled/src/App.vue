<template>
  <check-box v-model="checked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  // props를 이용하여 하위 컴포넌트로 상태를 내려주면 error
  // 왜냐면 아래 컴포넌트에서 직접 바인드한 데이터 변경 불가
  // 하위에서 v-model을 가지고 props로 내린 변수에 접근이 불가능한 것 
  // avoid mutating 어쩌구..

  // 해결 => props로 내렸던 것을 v-model 연결로 변경 
  // 위쪽에서 데이터 상태값을 관리하지만
  // 아래에서의 props와 input emit의 조합으로 변경 가능하게 함
  // 하지만 상위에서 데이터 관리하는 의존성은 변화 없어짐
    data() {
      return {
        checked: false,
      }
}
}
</script>