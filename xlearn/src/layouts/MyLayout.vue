<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-red-8">
        <q-btn
          flat
          dense
          round
          @click="modifTab"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          XLearn Quasar Example
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      @hide="saveState"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/graphs" exact>
          <q-item-section avatar>
            <q-icon name="trending_up" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Exemplos de Gráficos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/multgraph" exact>
          <q-item-section avatar>
            <q-icon name="timeline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gráfico Multiplo</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/formGraph" exact>
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Exemplo de Formulário</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  created () {
    if (this.$q.localStorage.getItem('lefTab') !== null) {
      this.leftDrawerOpen = this.$q.localStorage.getItem('lefTab')
      console.log(this.leftDrawerOpen)
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    modifTab () {
      this.leftDrawerOpen = !this.leftDrawerOpen
      this.saveState()
    },
    saveState () {
      this.$q.localStorage.set('lefTab', this.leftDrawerOpen)
    }
  }
}
</script>

<style>
</style>
