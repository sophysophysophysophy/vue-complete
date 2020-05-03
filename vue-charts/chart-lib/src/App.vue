<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart :propsdata="chartDataSet"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
// pakage.json에 정의되어있는 라이브러리 이름과 동일해야함
// import Chart from 'chart.js'
import BarChart from './components/BarChart'
import LineChart from './components/LineChart'


export default {

  // 컴포넌트 모듈화를 위하여 BarChart.vue 생성
  components: {
    BarChart,
    LineChart
  },

  data() {
    return {
      chartDataSet: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
      }]
    }
  },
  methods: {
    getChartData() {
      setTimeout(()=>{

      }, 3000)
    }
  },
  created() {

  },


  // 컴포넌트 속성 & 인스턴스 옵션 들어감 ==> export default 안에 넣어줘야함
  // query 접근자를 썻기 때문에 mounted안에 써주면 dom 접근 가능 
  // mounted() {
  //  var ctx = document.getElementById('myChart');
  //  new Chart(ctx, {
  //       type: 'bar',
  //       data: {
  //           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //           datasets: [{
  //               label: '# of Votes',
  //               data: [12, 19, 3, 5, 2, 3],
  //               backgroundColor: [
  //                   'rgba(255, 99, 132, 0.2)',
  //                   'rgba(54, 162, 235, 0.2)',
  //                   'rgba(255, 206, 86, 0.2)',
  //                   'rgba(75, 192, 192, 0.2)',
  //                   'rgba(153, 102, 255, 0.2)',
  //                   'rgba(255, 159, 64, 0.2)'
  //               ],
  //               borderColor: [
  //                   'rgba(255, 99, 132, 1)',
  //                   'rgba(54, 162, 235, 1)',
  //                   'rgba(255, 206, 86, 1)',
  //                   'rgba(75, 192, 192, 1)',
  //                   'rgba(153, 102, 255, 1)',
  //                   'rgba(255, 159, 64, 1)'
  //               ],
  //               borderWidth: 1
  //           }]
  //       },
  //       options: {
  //           scales: {
  //               yAxes: [{
  //                   ticks: {
  //                       beginAtZero: true
  //                   }
  //               }]
  //           }
  //       }
  //   });
  // //  console.log(myChart)

  // }
}
</script>

<style>

</style>