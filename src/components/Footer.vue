<script setup>
// const faders = document.querySelectorAll(".fade-in");

// const appearOptions = {
//   threshold: 0.25,
//   rootMargin: "0px 0px -250px 0px",
// };

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });
</script>

<template>
  <div class="fade-in instructions0">
    <h3 class="instructions1">Getting started using Jounce.</h3>
    <p class="instructions1">
      It's quite simple, really. All you need to do is follow the three steps
      listed below:
    </p>
    <div class="instructions2">
      <p class="instructions1">
        1. Choose whether you want to watch a space or nature documentary, and
        then pick from our selection menu above.
      </p>
      <p class="instructions1">
        2. If you are looking for space documentaries all information is listed
        immediately about our current selection.
      </p>
      <p class="instructions1">
        Note: The selection constantly changes to reflect the current most
        popular space documentaries. Additionally, documentary series, such as
        Cosmos, are not included in the selection, only single standalone
        documentary "movies".
      </p>
      <p class="instructions1">
        3. If you are looking for nature documentaries you simply need to pick a
        particular documentary from the selection menu. All documentaries are
        narrated by David Attenborough, the author's favourite narrator!
      </p>
    </div>
  </div>
</template>

<style scoped>
.instructions0 {
  padding-top: 120px;
  padding-bottom: 55px;
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
  width: 65%;
  margin: auto;
}

.fade-in {
  opacity: 1;
  /* transition: opacity 500ms ease-in; */
}
</style>
