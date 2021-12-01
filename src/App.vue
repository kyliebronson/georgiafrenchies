<template>
  <div>
    <Header />
    <Hero />
    <Section1 />
    <Section2 />
    <Section3 />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";

export default {
  name: "App",
  components: {
    Hero,
    Header,
    Section1,
    Section2,
    Section3,
  },
};
</script>

<style>
body {
  margin: 0;
}
@font-face {
  font-family: Montserrat-Regular;
  src: url("./fonts/Montserrat-Regular.woff") format("woff");
}
.brdbtn {
  border: 1px solid white;
  padding: 9px;
  padding-left: 20px;
  padding-right: 20px;
  width: 88px;
}
</style>
