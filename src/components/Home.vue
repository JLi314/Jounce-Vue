<script setup>
import { ref } from "vue";

// defineProps({
//   msg: String,
// });

// const test = () => {
//   console.log("reached here");
// };
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -250px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

</script>

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
  <div>
    <h1>Test</h1>
  </div>

  <!-- <div class="fade-in instructions0">
    <h3 class="instructions1">Getting started using Jounce.</h3>
    <p class="instructions1">
      It's quite simple, really. All you need to do is follow the three steps
      listed below:
    </p>
    <div class="instructions2">
      <p class="instructions1">
        1. Visit the library to view our selection of the latest space
        documentaries.
      </p>
      <p class="instructions1">
        2. Pick one you would like more information on, and note the number
        assigned to it.
      </p>
      <p class="instructions1">
        3. Hover over "Get Movies" and pick the corresponding number.
      </p>
    </div>
    <h4 class="instructions1">
      Voila! Now you can do it all over again with another movie if you fancy
      so.
    </h4>
  </div> -->
  <!-- <select @change="test">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select> -->
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
}

.hero-image {
  grid-area: 1/-1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.intro {
  position: relative;
  display: grid;
  padding-top: 20px;
  font-weight: 400;
}

.instructions0 {
  padding-top: 150px;
  padding-bottom: 125px;
}

.instructions1 {
  color: rgb(230, 230, 230);
  font-family: "Montserrat", sans-serif;
  padding: 20px;
  width: 80%;
  margin: auto;
  text-align: center;
}

.instructions2 {
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 20px;
  width: 60%;
  margin: auto;
}

.fade-in {
  opacity: 0;
  transition: opacity 500ms ease-in;
}
.fade-in.appear {
  opacity: 1;
}
</style>
