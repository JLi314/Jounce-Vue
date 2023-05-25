<script setup></script>

<template>
  <div class="topnav">
    <a class="active" href="">Home</a>
    <a href="">Store</a>
    <a href="">Login</a>
  </div>
</template>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #000000;
}

.topnav a {
  float: left;
  display: block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  font-family: "Montserrat", sans-serif;
}

.topnav a:hover {
  background-color: whitesmoke;
  color: black;
}

.topnav a.active {
  background-color: rgb(80, 80, 80);
  color: white;
}

@media screen and (max-width: 600px) {
  .topnav a,
  .topnav input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
}
</style>
