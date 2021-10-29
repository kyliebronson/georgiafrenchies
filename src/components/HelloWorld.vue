<template>
  <div class="header">
    <div class="logo"><img src="../assets/frenchielogo.png" alt="" /></div>
    <div class="menu">
      <ul>
        <li>Our Puppies</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.header {
  display: flex;
  background-color: #5de1e6;
}
.logo img {
  width: 200px;
}
.menu {
  width: 65%;
}
.menu ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
}
.menu ul li {
  padding-top: 25px;
  text-transform: uppercase;
  color: white;
}
</style>
