<template>
  <div class="hello">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectToday">Today's PoD</button>
    </header>
    <p>Month Month</p>
  </div>
</template>

<script>
export default {
  name: 'MonthlyPoD',
  props: {
    msg: String
  },
    methods:{
    selectToday(){
      this.$emit('selectToday')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
