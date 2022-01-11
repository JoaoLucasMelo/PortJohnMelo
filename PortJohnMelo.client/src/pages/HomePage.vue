<template>
  <div class="scrollbar">
    <div class="home d-flex mobilerow">
      <div class="col-md-8 animate slide height">
        <div class="animate slide delay-2">
          <img class="jm" src="../assets/img/JM2.png" alt="" />
        </div>
        <div class="">
          <img
            class="johnmelo animate slide delay-1"
            src="../assets/img/johnmelo.png"
            alt=""
          />
          <div class="mobileset">
            <div class="card line animate slide delay-2"></div>
            <div class="marginicons animate slide delay-2">
              <a
                href="https://www.linkedin.com/in/johnmelo94/"
                target="_blank"
                title="John's Linkedin"
                class="mdi mdi-48px me-3 icon color mdi-linkedin"
              ></a>
              <a
                href="https://github.com/JoaoLucasMelo"
                target="_blank"
                title="John's GitHub"
                class="mdi mdi-48px icon color mdi-github"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 animate drop delay-2">
        <div class="row menu align-items-center mobile">
          <div class="col-md-10 d-flex justify-content-between">
            <div class="rounded">
              <a
                class="font icon color px-1 selectable1 menubtn pb-1"
                @click="scrollTo('about')"
              >
                About
              </a>
            </div>
            <div class="rounded">
              <a
                @click="scrollTo('portfolio')"
                class="font icon color px-1 selectable1 menubtn pb-1"
                >Portfolio</a
              >
            </div>
            <div class="rounded">
              <a
                @click="scrollTo('resume')"
                class="font icon color px-1 selectable1 menubtn pb-1"
                >Resume</a
              >
            </div>
            <div class="rounded">
              <a
                @click="scrollTo('contact')"
                class="font icon color px-1 selectable1 menubtn pb-1"
                >Contact</a
              >
            </div>
          </div>
        </div>
        <div class="row mobilemarg tablet">
          <div class="font welcome f-24 mb-2">Welcome to my Portfolio!</div>
          <div>
            <p class="font text-white f-16 about">
              Hi! I am a Full-Stack Software Developer from Brazil and currently
              living in Boise - Idaho. Very passionate about coding and
              challenging myself. When I'm not coding you can find me playing
              Video Games and Board Games, or watching a good Movie or TV Show.
            </p>
          </div>
          <div class="row mt-3">
            <div class="col-md-10 d-flex flex-column align-items-center">
              <div class="card line2 mt-5 mobilemarg"></div>
              <div class="mt-3 font text-white f-16">
                Scroll down and find more about me!
              </div>
              <i
                class="
                  mt-4
                  mdi
                  arrow-move
                  text-white
                  mdi-48px mdi-arrow-down-thick
                "
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <div
        id="about"
        class="row"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
        <About />
      </div>
      <div
        id="portfolio"
        class="row"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="900"
      >
        <Portfolio />
      </div>
      <div
        id="resume"
        class="row"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1200"
      >
        <Resume />
      </div>
      <div
        id="contact"
        class="row"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1200"
      >
        <Contact />
      </div>
    </div>
  </div>
  <AppModalOne />
  <AppModalTwo />
  <AppModalThree />
  <AppModalFour />
</template>

<script>
export default {
  name: 'Home',
  setup() {
    return {
      scrollTo(elmId) {
        let elm = document.getElementById(elmId)
        let position = elm.offsetTop
        window.scrollTo(0, position)
      }
    }
  }

}
</script>

<style scoped lang="scss">
div {
  overflow: hidden !important;
}
.height {
  height: 100vh;
  background-image: url("../assets/img/profilenobg.png");
  background-repeat: no-repeat;
  background-position-x: right;
}
.johnmelo {
  margin-top: 17vh;
  margin-left: 15vh;
  height: 30vh;
}
.jm {
  margin-top: 5vh;
  margin-left: 4vh;
  height: 8vh;
}
.animate {
  animation-duration: 0.75s;
  animation-delay: 0.5s;
  animation-name: animate-fade;
  animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
  animation-fill-mode: backwards;
}
.animate.slide {
  animation-name: animate-slide;
}

@keyframes animate-slide {
  0% {
    opacity: 0;
    transform: translate(0, 30px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.delay-1 {
  animation-delay: 0.6s;
}
.delay-2 {
  animation-delay: 0.9s;
}
.line {
  margin-left: 17vh;
  margin-top: 4vh;
  height: 1vh;
  width: 15vh;
  border-radius: 0%;
  background-color: #ffc159;
}
.line2 {
  height: 1vh;
  width: 44vh;
  border-radius: 0%;
  background-color: #ffc159;
}
.color {
  color: #ffffff;
}
.color:hover {
  color: #323647;
}
.icon {
  position: relative;
  color: white;
  z-index: 1;
}
.icon::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5.5vh;
  transform: scaleY(0);
  transform-origin: center;
  background: #ffc159;
  z-index: -1;
  transition: transform 0.1s;
  border-radius: 10% !important;
}
.icon:hover::after {
  transform: scaleY(1);
}
.marginicons {
  margin-top: 4vh;
  margin-left: 17vh;
}
.menu {
  height: 20vh;
}
.menubtn {
  color: white;
  font-size: 3vh;
}
.about {
  width: 90%;
}
.animate.drop {
  animation-name: animate-drop;
  animation-timing-function: cubic-bezier(0.77, 0.14, 0.91, 1.25);
}
@keyframes animate-drop {
  0% {
    opacity: 0;
    transform: translate(0, -300px) scale(1, 1);
  }
  95% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
  96% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
  97% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
  98% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
  99% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) scale(1, 1);
  }
}

.arrow-move {
  -webkit-animation: mover 0.8s infinite alternate;
  animation: mover 0.8s infinite alternate;
}
.arrow-move {
  -webkit-animation: mover 0.8s infinite alternate;
  animation: mover 0.8s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.welcome {
  color: #ffc159;
}
@media only screen and (max-width: 500px) {
  .mobilerow {
    flex-direction: column;
  }
  .johnmelo {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 10vh;
  }
  .height {
    height: 60vh;
    background-image: url("../assets/img/profilenobg.png");
    background-repeat: no-repeat;
    background-position-x: -70px;
    background-position-y: bottom;
    background-size: 50vh;
  }
  .jm {
    margin-top: 2vh;
    margin-left: 2vh;
    height: 6vh;
  }
  .home {
    padding: 0;
  }
  .mobileset {
    position: absolute;
    right: 10px;
    top: 25vh;
  }
  .marginicons {
    margin-top: 0vh;
    margin-left: 17vh;
  }
  .mobile {
    display: none !important;
  }
  .mobilemarg {
    margin-top: 2vh !important;
    margin-left: 1.7vh;
  }
}
@media only screen and (max-width: 1000px) and (min-width: 501px) {
  .johnmelo {
    position: absolute;
    left: 3vh;
    top: 37vh;
    height: 10vh;
    margin: 0 !important;
  }
  .mobileset {
    position: absolute !important;
    top: 45vh;
    left: 0vh;
  }
  .marginicons {
    margin-top: 0vh;
    margin-left: 4vh;
  }
  .mobile {
    display: none !important;
  }
  .line {
    margin-left: 4vh;
    margin-top: 4vh;
  }
  .tablet {
    margin-top: 10vh;
  }
}
</style>
