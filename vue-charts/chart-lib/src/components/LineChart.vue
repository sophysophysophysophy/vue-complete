<template>
  <div>
    <canvas id="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js'

export default {
  mounted() {
  var ctx = document.getElementById('lineChart').getContext('2d');
  
  // 플러그인으로 접근
  new this.$_Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });

  }
}
</script>

<style>

</style>