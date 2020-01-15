<template>
  <div id="app">
    <div v-if="!this.loaded" class="loading">
      <img class="loading-image" alt="Planets orbiting the Sun" src="./assets/loading2.gif">
    </div>
    <SinglePoD msg="App" v-if="this.show==='today' && this.loaded" @selectMonth="selectMonth" v-bind:pod="this.todayPoD" ></SinglePoD>
    <MonthlyPoD msg="yep" v-if="this.show==='month'" @selectToday="selectToday" @selectCurrent="selectCurrent" v-bind:monthly="this.monthlydata"></MonthlyPoD>
    <SinglePoD v-if="this.show==='selected'" @selectMonth="selectMonth" v-bind:pod="this.selected"></SinglePoD>
  </div>
</template>

<script>

import SinglePoD from './components/SinglePoD';
import MonthlyPoD from './components/MonthlyPoD';
import { getThisMonthPics } from '../utils/APIcalls';

export default {
  name: 'app',
  components: {
    SinglePoD,
    MonthlyPoD,
  },
  data() {
    return {
      selected: {},
      todayPoD:{},
      monthlydata:[],
      show:'today',
      loaded:false
    }
  },
  methods:{
    selectMonth(){
      this.show = 'month'
    },
    selectToday(){
      this.show='today'
    },
    selectCurrent(index){
      console.log('Here==========>',index)
      this.selected = this.monthlydata[index]
      console.log(this.monthlydata[index])
      this.show='selected'
    },
  },
  mounted(){
    getThisMonthPics()
    .then(res => {this.monthlydata = res; return res})
    .then(res => this.todayPoD = res.slice(-1)[0])
    .then(()=>this.loaded=true)
    .catch(err=>console.log(err))
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
body{
  background-color: #AFAFAF;
}
#app {
  background-color: #AFAFAF;
  height:100vh;
  padding: 10px
}
.loading{
  height:100%;
  width:100%;
  background-color: black;
  display:flex;
  justify-content: center;
  align-items: center;
}
.loadingImage {
  height:600px;
  width:600px;
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
