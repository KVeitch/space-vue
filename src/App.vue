<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <PoD msg="App" v-if="this.show==='today' @selectMonth="selectMonth" />
    <MonthlyPoD v-if="this.show==='month'" @selectToday="selectToday" />
    <CurrentPoD v-if="this.show==='current' />
  </div>
</template>

<script>
import PoD from './components/PoD.vue'
import CurrentPoD from './components/CurrentPoD.vue'
import MonthlyPoD from './components/MonthlyPoD'
export default {
  name: 'app',
  components: {
    PoD,
    MonthlyPoD,
    CurrentPod
  },
  data() {
    return {
      currentPoD: {},
      todatPoD:{},
      monthlyPoD:[],
      show:'today'
    }
  },
  methods:{
    selectMonth(){
      this.show = 'month'
    },
    selectToday(){
      this.show='today'
    }
  },

}
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
#app {
  background-color: #AFAFAF;
  height:100vh;
  padding: 1%
}
</style>
