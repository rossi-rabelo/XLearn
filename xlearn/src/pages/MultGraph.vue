<template>
  <q-page class="flex flex-center">
    <div style="width: 1000px; height: 700px;">
      <v-chart id="chart" :options="mult"/>
    </div>
  </q-page>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'
export default {
  name: 'PageMultGraph',
  components: {
    'v-chart': ECharts
  },
  data () {
    return {
      mult: {
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false, title: 'Dados' },
            magicType: { show: true, type: ['line', 'bar'], title: { line: 'Linha', bar: 'Barra' } },
            restore: { show: true, title: 'Teste' },
            saveAsImage: { show: true, title: 'Imagem' }
          }
        },
        legend: {
          data: ['Dado 1', 'Dado 2', 'Dado 3']
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12'
            ],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Volume',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          },
          {
            type: 'value',
            name: 'Temperatura',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: 'Dado 1',
            type: 'bar',
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: 'Dado 2',
            type: 'bar',
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: 'Dado 3',
            type: 'line',
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      }
    }
  }
}
</script>

<style>
#chart {
  width: 100%;
  height: 100%;
}
</style>
