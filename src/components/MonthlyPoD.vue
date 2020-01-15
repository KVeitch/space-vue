<template>
  <div class="hello">
    <header>
      <h1>Space Vue</h1>
      <button @click="selectDay">Today's PoD</button>
    </header>
    <main>
      <Thumbnail
        v-for="(item, index) in this.monthly"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="index"
        @selectCurrent="selectCurrent"
      ></Thumbnail>
    </main>
  </div>
</template>

<script>
import Thumbnail from "./Thumbnail";
export default {
  name: "MonthlyPoD",
  props: {
    msg: String,
    monthly: Array
  },
  components: {
    Thumbnail
  },
  methods: {
    selectDay() {
      this.$emit("selectToday");
    },
    selectCurrent(index) {
      this.$emit("selectCurrent", index);
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  overflow-y: scroll;
  height: 100%;
}
</style>
