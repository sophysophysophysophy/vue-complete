<script>
// 데이터 불러만 오는 vue 컴포넌트 === FetchData.vue

import axios from 'axios';

export default {
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
      .then(response => {
        this.response = response.data;
        this.loading = false;
      })
      .catch(error => {
        alert('[ERROR] fetching the data', error);
        console.log(error);
      });
  },

  // render function : main.js, render.html에 해설
  render() {

    // scopedSlots : 하위 컴포넌트의 데이터 ( fetchData.vue에 접근할 수 잇음)
    return this.$scopedSlots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>