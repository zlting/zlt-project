<template>
  <div style="width: 600px; margin: 30px auto">
    <h1>{{ title }}</h1>
    <LineChart :title="title" :x-data="xData" :y-data="yData"></LineChart>
  </div>
</template>

<script>
  import LineChart from '@/components/Echarts/LineChart'
export default {
  name: 'UseEchart',
  components: {
    LineChart
  },

  data() {
    return {
      title: '',
      xData: [],
      yData: [],
    };
  },

  mounted() {
    this.getLineChart();
  },

  methods: {
    getLineChart() {
      this.title = 'line-折线图';
      this.xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      this.yData = [820, 932, 901, 934, 1290, 1330, 1320];
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
