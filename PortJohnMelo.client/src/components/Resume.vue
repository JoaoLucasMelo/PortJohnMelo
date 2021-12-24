<template>
  <div class="resume">
    <div class="col-12">
      <div class="row my-3 justify-content-center">
        <div class="col-md-11">
          <p class="font resumetitle">RESUME</p>
        </div>
      </div>
      <div class="row">
        <div class="text-center">
          <p class="text-white font f-20">EXPERIENCE</p>
        </div>
        <div class="col-md-6 d-flex align-items-center flex-column">
          <div class="col-md-8 card resumecard p-3">
            <p class="font m-0 f-20 text-white">Boise CodeWorks</p>
            <i class="font f-18 texts"> 2021 - 2022</i>
            <i class="font f-14 m-0 texts">
              Full Stack Software Development Student
            </i>
            <div class="texts f-16 mt-3">
              <p class="font m-0">
                ● Over 500 hours of an immersive full stack course.
              </p>
              <p class="font m-0">
                ● Working with front-end and back-end technologies.
              </p>
              <p class="font m-0">
                ● Creating fully-functional real-world applications with a team
                of developers.
              </p>
              <p class="font m-0">
                ● Utilizing SCRUM methodology to better organize and maximize
                efficiency.
              </p>
            </div>
          </div>
          <div class="col-md-8 card resumecard p-3">
            <p class="font m-0 f-20 text-white">Asia Nine Restaurant</p>
            <i class="font f-18 texts"> 2021 - 2022</i>
            <i class="font f-14 m-0 texts"> Head Food Runner </i>
            <div class="texts f-16 mt-3">
              <p class="font m-0">
                ● Handling orders and delivering to respective customers.
              </p>
              <p class="font m-0">● Providing customer service.</p>
              <p class="font m-0">
                ● Training new food runners for the restaurant chain.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center flex-column">
          <div class="col-md-8 card resumecard p-3">
            <p class="font m-0 f-20 text-white">Delicate Touch Moving</p>
            <i class="font f-18 texts"> 2018 - 2022</i>
            <i class="font f-14 m-0 texts"> Team Lead </i>
            <div class="texts f-16 mt-3">
              <p class="font m-0">
                ● Providing great customer service at one of the top 5 stars
                moving companies in the valley.
              </p>
              <p class="font m-0">
                ● Coordinated teams that provided maximum work quality and work
                ethics.
              </p>
            </div>
          </div>
          <div class="col-md-8 card resumecard p-3">
            <p class="font m-0 f-20 text-white">Max Gym - Sao Paulo, Brazil</p>
            <i class="font f-18 texts"> 2015 - 2016</i>
            <i class="font f-14 m-0 texts"> Team Lead </i>
            <div class="texts f-16 mt-3">
              <p class="font m-0">
                ● Started as trainee for a month and got transferred to full
                time after a month while going to college for Physical
                Education.
              </p>
              <p class="font m-0">
                ● Learned how to work with customer service to better understand
                and help people reach their fitness goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-4 mt-2 justify-content-center">
        <div class="text-center">
          <p class="text-white font f-20">EDUCATION</p>
        </div>
        <div class="col-11 col-md-4 card resumecard py-2">
          <p class="font m-0 f-20 text-white">
            Boise CodeWorks, <i class="ms-2"> 2021 - 2022</i>
          </p>
          <i class="font f-16 m-0 texts"> Full Stack Software Developer </i>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.resume {
  width: 100%;
  background-color: #272a38;
}
.resumetitle {
  font-size: 5vh;
  margin-top: 3vh;
  color: white;
}
.resumecard {
  background-color: #323647;
  border-color: #ffc159;
  border-top: 0;
  border-right: 0;
  border-width: 6px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  margin-bottom: 2vh;
  padding-bottom: 1vh;
  margin-top: 2vh;
}
.texts {
  color: #d6d6d6;
}
@media only screen and (max-width: 500px) {
}
</style>