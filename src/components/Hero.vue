<template>
  <div class="hero">
    <div class="left">
      <p>Check us out</p>
      <p>on YouTube!</p>
    </div>
    <div class="right">
      <iframe
        width="700"
        height="350"
        src="https://www.youtube.com/embed/5yqWu4pls7Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
  padding-bottom: 60px;
  background-color: #5de1e6;
}
.left p {
  font-size: 70px;
  font-family: sans-serif;
  line-height: 5px;
  color: white;
}
</style>
