<template>
  <div class="hello">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectMonth">This Month's PoD</button>
    </header>
    <p>SelectedPoD</p>
  </div>
</template>

<script>
export default {
  name: 'SelectedPoD',
  props: {
    msg: String
  },
  methods:{
    selectMonth(){
      this.$emit('selectMonth')
    },
    selectToday(){
      this.$emit('selectToday')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
