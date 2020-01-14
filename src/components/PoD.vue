<template>
  <div class="pod">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectMonth">This Month's PoD</button>
    </header>

    <p>pod</p>
  </div>
</template>

<script>
export default {
  name: 'PoD',
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
 /* button: {
   height:
 } */
</style>
