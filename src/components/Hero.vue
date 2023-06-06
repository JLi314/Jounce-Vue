<script setup></script>

<template>
  <div class="hero">
    <img class="hero-image" src="../assets/earth-meets-space.jpg" />
    <div class="hero-content">
      <h1>Welcome to Jounce.</h1>
      <h2 class="intro">
        Find information about your favourite science documentaries in a SNAP.
      </h2>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  height: 100%;
}

.hero-content {
  z-index: 1;
  grid-area: 1/-1;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  color: whitesmoke;
  padding-bottom: 250px;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
}

.intro {
  position: relative;
  display: grid;
  padding-top: 20px;
  font-weight: 400;
}

.hero-image {
  grid-area: 1/-1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-height: 0;
}

@media screen and (min-height: 800px) {
  .hero-image {
    height: 130%;
  }

  .instructions0 {
    padding-top: 395px;
    padding-bottom: 205px;
  }

  .hero-content {
    padding-bottom: 120px;
  }
}
</style>
