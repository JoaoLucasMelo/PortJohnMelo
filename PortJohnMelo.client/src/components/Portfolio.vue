<template>
  <div class="portfolio mb-3">
    <div class="col-12">
      <div class="row justify-content-center">
        <div class="col-md-11">
          <p class="font portfoliotitle">PORTFOLIO</p>
        </div>
      </div>
      <div class="row">
        <div
          data-bs-toggle="modal"
          data-bs-target="#GoodOlDays"
          class="col-12 col-sm-6 col-md-4 p-4 selectable1"
        >
          <div class="card project grow">
            <div class="d-flex justify-content-center">
              <img
                class="img-fluid p-2 rounded projectpic"
                src="../assets/img/goodoldays.png"
                alt=""
              />
            </div>
            <!-- <div>
              <p class="ms-3 mb-0 mt-2 text-white font f-20">Good Ol' Days</p>
              <p class="ms-3 text-white font f-14">
                App created to incentivate people create memories with your
                friends and family.
              </p>
            </div> -->
          </div>
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#Keepr"
          class="col-12 col-sm-6 col-md-4 p-4 selectable1"
        >
          <div class="card project grow">
            <div class="d-flex justify-content-center">
              <img
                class="img-fluid p-2 rounded projectpic"
                src="../assets/img/keepr.png"
                alt=""
              />
            </div>
            <!-- <div>
              <p class="ms-3 mb-0 mt-2 text-white font f-20">Good Ol' Days</p>
              <p class="ms-3 text-white font f-14">
                App created to incentivate people create memories with your
                friends and family.
              </p>
            </div> -->
          </div>
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#SpiceItUp"
          class="col-12 col-sm-6 col-md-4 p-4 selectable1"
        >
          <div class="card project grow">
            <div class="d-flex justify-content-center">
              <img
                class="img-fluid p-2 rounded projectpic"
                src="../assets/img/spiceitup.png"
                alt=""
              />
            </div>
            <!-- <div>
              <p class="ms-3 mb-0 mt-2 text-white font f-20">Spice it up!</p>
              <p class="ms-3 text-white font f-14">
                App that helps people share recipes with others.
              </p>
            </div> -->
          </div>
        </div>
        <div
          data-bs-toggle="modal"
          data-bs-target="#TowerEvents"
          class="col-12 col-sm-6 col-md-4 p-4 selectable1"
        >
          <div class="card project grow">
            <div class="d-flex justify-content-center">
              <img
                class="img-fluid p-2 rounded projectpic"
                src="../assets/img/towerevents.png"
                alt=""
              />
            </div>
            <!-- <div>
              <p class="ms-3 mb-0 mt-2 text-white font f-20">Tower Events</p>
              <p class="ms-3 text-white font f-14 me-2">
                Events app that people can create events and others can attend
                to it.
              </p>
            </div> -->
          </div>
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
.portfolio {
  width: 100%;
}
.portfoliotitle {
  font-size: 5vh;
  margin-top: 3vh;
  color: white;
}
.project {
  // height: 70vh;
  background-color: #272a38;
  border: 0;
  box-shadow: 1px 1px 3px 3px #ffc159;
}
.projectpic {
  width: 95%;
}
.grow {
  transition: all 0.2s ease-in-out;
}
.grow:hover {
  transform: scale(1.03);
  box-shadow: 1px 1px 5px 5px #ffc159;
}
@media only screen and (max-width: 500px) {
  .portfolio {
    width: 100%;
  }
}
@media only screen and (max-width: 1000px) and (min-width: 501px) {
  .portfolio {
    width: 100%;
  }
}
</style>