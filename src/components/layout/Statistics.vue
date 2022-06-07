<template>
  <div style="width:100%;overflow:hidden; display: flex;flex-direction:column;">
    <vue3-chart-js
        :id="barChart.id"
        ref="chartRef"
        :type="barChart.type"
        :data="barChart.data"
        :options="barChart.options"
    ></vue3-chart-js>
    <!-- answersRight {{ answersRight }; addWrong{{ answersWrong }} -->
    <!--button @click="updateChart">Update Chart</button-->
  </div>
</template>

<script>
import Vue3ChartJs from '@j-t-mcc/vue3-chartjs'

export default {
  name: 'Statistics',
  components: {
    Vue3ChartJs,
  },
  props: {
    limit: { type:Number, default: 10},
    displayLimit: { type:Boolean, default: false},
    titleLimit: { type:String, default: 'Fortschritt'},
    titleRight: { type:String, default: 'Richtig'},
    titleWrong: { type:String, default: 'Falsch'},
    colorLimit: { type:String, default: '#1266f1'},
    colorRight: { type:String, default: 'rgba(0, 183, 74)'},
    colorWrong: { type:String, default: 'rgba(249, 49, 84)'}
    // colorWrong: { type:String, default: '#D32F2F'}
  },
  data: (props) => {
    return {
      answersTotal: 0,
      answersRight: 0,
      answersWrong: 0,
      barChart: {
        id: 'bar',
        type: 'bar',
        data: {
          labels: props.displayLimit ? [props.titleLimit, props.titleRight, props.titleWrong] : [props.titleRight, props.titleWrong,],
          datasets: [{
            backgroundColor: props.displayLimit ? [props.colorLimit, props.colorRight, props.colorWrong] : [props.colorRight, props.colorWrong],
            data: [0, 0, 0]
          }]
        },
        options: { plugins: { legend: false} }
      }
    }
  },
  methods: {
    addRight() {
      this.answersRight++;
      this.updateChart();
    },
    addWrong() {
      this.answersWrong++;
      this.updateChart();
    },
    updateChart() {
      // this.barChart.options.plugins.title = { text: 'Updated Chart', display: true }
      this.answersTotal = this.answersRight + this.answersWrong;
      this.barChart.data.labels = this.displayLimit ? [this.titleLimit, this.titleRight, this.titleWrong] : [this.titleRight, this.titleWrong,]
      this.barChart.data.datasets = [{
          backgroundColor: this.displayLimit ? [this.colorLimit, this.colorRight, this.colorWrong] : [this.colorRight, this.colorWrong],
          data: this.displayLimit ? [this.answersTotal, this.answersRight, this.answersWrong] : [this.answersRight, this.answersWrong]
        }]
      this.$refs.chartRef.update()
    },
    resetChart() {
      this.answersRight = 0;
      this.answersWrong = 0;
      this.updateChart();
    }
  }
}
</script>