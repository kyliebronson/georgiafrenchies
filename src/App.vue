<template>
  <div>
    <Header />
    <Hero />
    <Section1 />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
import Section1 from "./components/Section1.vue";

export default {
  name: "App",
  components: {
    Hero,
    Header,
    Section1,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>
