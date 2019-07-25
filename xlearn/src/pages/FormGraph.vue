<template>
  <q-page padding>
    <div class="row">
      <div class="col-6">
          <div class="row fit justify-center items-center">
          <q-form @submit="onSubmit" class="q-gutter-md" ref="formProduto">
            <div class="row">
              <q-input outlined
               v-model="produto"
                label="Nome do Produto"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Digite o nome do produto']"
                style="max-width: 200px"
                />
            </div>
            <div class="row">
              <q-input
                v-model.number="quantidade"
                type="number"
                label="Quantidade"
                outlined
                style="max-width: 200px"
              />
            </div>
            <div class="row justify-center">
              <q-btn label="Confirmar" type="submit" color="positive"/>
            </div>
          </q-form>
        </div>
      </div>
      <div class="col-6 justify-center">
        <v-chart :options='pie'/>
      </div>
    </div>
    <div class="row justify-center q-mt-md">
      <q-chip
        v-for="(product, index) in pie.series[0].data"
          :key="index"
            removable
              @remove="removeItem(index)"
              :label="product.name"
              color="red-8"
                text-color="white"
        />
    </div>
  </q-page>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'
export default {
  name: 'PageFromGraph',
  components: {
    'v-chart': ECharts
  },
  created () {
    this.getProducts()
  },
  data () {
    return {
      // Dados do formulário:
      produto: '',
      quantidade: 0,
      produtos: [],

      // Informações gerais
      api: 'products',

      // Dados do gráfico:
      pie: {
        title: {
          text: 'Quantidade de Produtos',
          subtext: 'Gráfico de quantidade de cada produto',
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
          data: []
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: [],
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
  },
  methods: {
    onSubmit () {
      this.$axios.post(this.api, { value: this.quantidade, name: this.produto })
        .then(() => {
          this.pie.legend.data.push(this.produto)
          this.pie.series[0].data.push({ value: this.quantidade, name: this.produto })
          this.quantidade = 0
          this.produto = ''
          this.$refs.formProduto.resetValidation()
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            message: 'Produto adicionado!'
          })
        }).catch(() => {
          this.$q.notify({
            color: 'negative',
            textColor: 'white',
            icon: 'not_interested',
            message: 'Não foi possível adicionar o produto!'
          })
        })
    },
    getProducts () {
      this.$q.loading.show({
        delay: 400
      })
      this.$axios.get(this.api).then((response) => {
        response.data.forEach(element => {
          this.pie.legend.data.push(element.name)
          this.pie.series[0].data.push({ value: element.value, name: element.name })
        })
        this.$q.loading.hide()
      }).catch(() => {
        this.$q.loading.hide()
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          icon: 'not_interested',
          message: 'Não foi possível obter a lista de produtos!'
        })
      })
    },
    removeItem (index) {
      this.$q.loading.show({
        delay: 400
      })
      this.$axios.delete(`${this.api}/${index}`).then((response) => {
        this.pie.legend.data.splice(index, 1)
        this.pie.series[0].data.splice(index, 1)
        this.$q.loading.hide()
        this.$q.notify({
          color: 'positive',
          textColor: 'white',
          icon: 'done',
          message: 'Produto removido com sucesso!'
        })
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          textColor: 'white',
          icon: 'not_interested',
          message: 'Não foi possível remover o produto!'
        })
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style>
</style>
