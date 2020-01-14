<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SinglePoD msg="App" v-if="this.show==='today'" @selectMonth="selectMonth" />
    <MonthlyPoD v-if="this.show==='month'" @selectToday="selectToday" />
    <SinglePoD v-if="this.show==='selected'" @selectMonth="selectMonth" />
  </div>
</template>

<script>
import SinglePoD from './components/SinglePoD';
import MonthlyPoD from './components/MonthlyPoD';
export default {
  name: 'app',
  components: {
    SinglePoD,
    MonthlyPoD,
  },
  data() {
    return {
      selected: {},
      todatPoD:{},
      monthlyPoD:[],
      show:'selected'
    }
  },
  methods:{
    selectMonth(){
      this.show = 'month'
    },
    selectToday(){
      this.show='today'
    },
    selectCurrent(){
      this.show='selected'
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
  padding: 10px
}

header{
  width:100%;
  height: 80px;
  background-color: #ECECEC;
  border-radius: 25px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:15px;
  margin-bottom:10px;
}

button{
  width:200px;
  height:50px;
  border-radius: 25px;
  background-color:#ECECEC;
  font-size: 20px;
  -webkit-box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.75),
              -6px -6px 6px 0px rgba(255,255,255,0.75);
  -moz-box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.75),
              -6px -6px 6px 0px rgba(255,255,255,0.75);
  box-shadow: 6px 6px 6px 0px rgba(0,0,0,0.75),
              -6px -6px 6px 0px rgba(255,255,255,0.75);
  border: none;
  margin-left:50px;
}
</style>
