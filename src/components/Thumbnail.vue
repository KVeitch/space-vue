<template>
  <div class="div--thumbnail">
    <h3 class="title">{{item.title}}</h3>
    <img src='' alt='title'>
    <p>Date</p>
  </div>
</template>

<script>
export default {
  name: 'Thumbnail',
  props: {
    msg: String,
    item:Object
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
.div__thumbnail{}
h3{}
img{}
p{}
</style>
