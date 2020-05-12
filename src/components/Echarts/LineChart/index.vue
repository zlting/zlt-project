<template>
  <div ref="chart" class="lineChart"></div>
</template>

<script>
  import echarts from 'echarts'

export default {
  name: 'LineChart',
  props: {
    title: String,
    xData: Array,
    yData: Array,
  },
  data() {
    return {

    };
  },
  mounted() {
    this.$nextTick(()=>{
      this.drawLineChart()
    })

  },
  methods: {
    drawLineChart() {
      const options = {
        title: {
          text: this.title,
          left: 'center',
        },

        xAxis: {
          type: 'category',
          data: this.xData,
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.yData,
          type: 'line'
        }]
      };
      const chart = echarts.init(this.$refs.chart);
      chart.setOption(options)
    }
  }
}
</script>

<style lang="scss" scoped>
.lineChart{
  width: 100%;
  height: 400px;
}
</style>
