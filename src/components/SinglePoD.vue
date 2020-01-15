<template>
  <div class="pod">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectMonth">This Month's PoD</button>
    </header>
    <h2 class="title">{{pod.title}} NASA picture of the day from {{pod.date}}</h2>
    <main>
    <aside>
      {{pod.explanation}}
    </aside>
    <div class="main__div">
      <img v-bind:src="pod.url" v-bind:alt="pod.title">
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SinglePoD',
  props: {
    msg: String,
    pod: Object
  },
  methods:{
    selectMonth(){
      this.$emit('selectMonth')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2{
    background-color: #ECECEC;
    border-radius:25px;
    padding:15px;
    margin-bottom:10px;
    text-align: start;
    
  }
  main {
    display:flex;
  }
  aside {
    height: calc(100vh - 185px) ;
    width:30%;
    background-color: #ECECEC;
    border-radius:25px;
    padding:25px;
  }
  .main__div {
    height: calc(100vh - 185px) ;
    width:70%;
    background-color: #ECECEC;
    margin-left:15px;
    border-radius: 25px;
    display:flex;
    justify-content: center;
    align-items: center
  }
  img {
    max-width: 95%;
    max-height: 95%;
    border-radius: 25px;
  }
  aside{

    text-align: justify;
    font-size:18px;
  }
</style>
