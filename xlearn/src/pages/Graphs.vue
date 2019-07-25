<template>
  <q-page class='flex flex-center'>
    <div class='row justify-between'>
      <div class='col'>
        <v-chart :options='lines'/>
      </div>
      <div class='col'>
        <v-chart :options='pie'/>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'
export default {
  name: 'PageIndex',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      lines: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }
        ]
      },
      pie: {
        title: {
          text: 'Pie Style Graphic',
          subtext: 'Example',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        legend: {
          // orient: 'vertical',
          // top: 'middle',
          bottom: 10,
          left: 'center',
          data: ['Valor 1', 'Valor 2', 'Valor 3', 'Valor 4', 'Valor 5']
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [
              { value: 1548, name: 'Valor 1' },
              { value: 535, name: 'Valor 2' },
              { value: 510, name: 'Valor 3' },
              { value: 634, name: 'Valor 4' },
              { value: 735, name: 'Valor 5' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>
