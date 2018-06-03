<template>
  <div>
   <h4 style="text-align: center">Dice Results in Chart</h4>
    <div class="chart">
      <chartjs-bar :bind="true" :datalabel="label" :labels="labels" :data="myData"></chartjs-bar>
    </div>
  </div>

</template>

<script>
    export default {
      name: "ShowChart",
      computed: {
        counter1() {
          return this.$store.state.counter1;
        },
        counter2() {
          return this.$store.state.counter2;
        },
        counter3() {
          return this.$store.state.counter3;
        },
        counter4() {
          return this.$store.state.counter4;
        },
        counter5() {
          return this.$store.state.counter5;
        },
        counter6() {
          return this.$store.state.counter6;
        },
        totalCounter() {
            return this.$store.state.totalCounter;
        },
        myData() {
          return [this.counter1, this.counter2, this.counter3, this.counter4, this.counter5, this.counter6];
        }
      },

      data() {
        return {
          label: '%',
          labels: ['1', '2', '3', '4', '5', '6'],
        /*
         options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: true
                }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                  display: false
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true,
              mode: 'single',
              callbacks: {
                label: function(tooltipItems, data) {
                  var percentage = Math.round(tooltipItems.yLabel);
                  return  percentage + "%";
                }
              }
            }
          }
          */
        }
      }
    }
</script>

<style scoped>

</style>
