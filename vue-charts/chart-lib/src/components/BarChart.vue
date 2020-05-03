<template>
  <div>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// 플러그인으로 chart 접근 가능 ( 로딩 따로 안해도 되게 됨)
// import Chart from 'chart.js'



// 컴포넌트 모듈화를 위하여 BarChart.vue 생성

export default {

// 상위에서 데이터 받아와서 뿌려주기만 하는 것이 데이터 변경이 쉬워질 수 있음
 props: ['propsdata'],
  mounted() {

    //   ref 이용하여 DOM 객체 접근
//    var ctx = document.getElementById('barChart'); (js에서 id로 접근 )
    var ctx = this.$refs.barChart       //vue에서 ref명으로 접근
   new this.$_Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  //  console.log(myChart)

  }
}
</script>

<style>

</style>