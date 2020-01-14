<template>
  <div class="pod">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectMonth">This Month's PoD</button>
    </header>
    <h2 class="title">Title for the PoD</h2>
    <main>
    <aside>
      Description will go here
    </aside>
    <div class="main__div">
      <img src='' alt='NASA picture of the day'>
    </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SinglePoD',
  props: {
    msg: String,
  },
  methods:{
    selectMonth(){
      this.$emit('selectMonth')
    }
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
    padding:15px;
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
    height:90%;
    max-width: 90%;
    max-height: 90%;
  }
</style>
