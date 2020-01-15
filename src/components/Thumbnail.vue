<template>
  <div class="div--thumbnail">
    <h3 class="title">{{item.title}}</h3>
    <img 
      v-bind:src="item.url"
      v-bind:alt="item.title"
      @click="selectCurrent(index)"  
    >
    <p>{{this.styleDate(item.date)}}</p>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    item: Object,
    index: Number
  },
  methods: {
    selectMonth() {
      this.$emit("selectMonth");
    },
    selectCurrent() {
      this.$emit("selectCurrent", this.index);
    },
    styleDate(date) {
      let dateArray = date.split("-");
      let year = dateArray.shift();
      dateArray.push(year);
      dateArray = dateArray.join("-");
      return dateArray;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div--thumbnail {
  background-color: #ececec;
  width: 250px;
  height: 320px;
  padding: 12px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
h3 {
}
img {
  max-height: 200px;
  max-width: 200px;
  border-radius: 8px;
  -webkit-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75),
    -6px -6px 6px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75),
    -6px -6px 6px 0px rgba(255, 255, 255, 0.75);
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.75),
    -6px -6px 6px 0px rgba(255, 255, 255, 0.75);
  cursor: pointer;
}
p {
}
</style>
