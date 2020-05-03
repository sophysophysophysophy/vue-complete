import bus from '../utils/bus'

// mixin
export default{
    // 재사용할 컴포넌트 옵션 & 로직
    created() {
        // bus.$emit('start:spinner')

        // // store에서 api 호출 돼어 불러오기까지의 순서 
        // // promise 객체가 return 되어야 순서 보장됨
        // // #1
        // this.$store.dispatch('FECTH_LIST', this.$route.name)
        // .then(() => {

        //   // #5
        //   console.log(5);
          
        //   // spinner는 데이터 다 불러오고 나서 종료하면 됨
        //   console.log('fetched');
          
        //   bus.$emit('end:spinner')  
        // }) 
        // .catch(err => console.log(err))
    },
    // spinner를 mounted 라이프사이클 훅에서 종료시키면
    // 마운티드 되자마자 꺼트리면 
    // 더 자연스러워짐
  mounted() {
    bus.$emit('end:spinner')
  }

}