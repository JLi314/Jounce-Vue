<template>
   <div class="topnav">
      <a class="active" href="./index.html">Home</a>
      <a href="./space/space.html">Space</a>
      <a href="../nature/nature.html">Nature</a>
    </div>
    
  <div class="hero">
    <img class="hero-image" src="../assets/earth-meets-space.jpg" />
    <div class="hero-content">
      <h1>Welcome to Jounce.</h1>
      <h2 class="intro">
        Find information about your favourite science documentaries in a SNAP.
      </h2>
    </div>
  </div>

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

<script>
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
  /* padding-bottom: 100px; */
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
/* .fade-in.appear {
  opacity: 1;
} */

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
