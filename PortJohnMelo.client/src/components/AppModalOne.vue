<template>
  <div class="App1">
    <div
      class="modal fade"
      id="GoodOlDays"
      tabindex="-1"
      aria-labelledby="GoodOlDaysLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body font">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-white f-24">Good Ol' Days App</p>
              </div>
              <div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div>
              <img
                class="project img-fluid rounded"
                src="../assets/img/goodoldays.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <p class="text-white f-16">
                App developed by me and 4 other developers with the idea of
                helping people to create memories and share with family and
                friends.
              </p>
              <p class="text-white f-16">
                As a team we've had some some difficulties on making decisions
                regard the desing or the logistics but we overcome those
                difficulties talking it out and also asking outsiders their
                opinion.
              </p>
              <p class="text-white f-16">
                Tecnologies used: Vue 3, CSS, Node.js, Firebase and MongoDB.
              </p>
              <a
                target="_blank"
                href="https://good-ol-days.herokuapp.com/"
                class="check f-16"
              >
                Check it out!
              </a>
            </div>
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
.modal-content {
  background-color: #272a38;
}
.project {
  height: auto;
  width: 100%;
  border-style: solid;
  border-color: #ffc159;
  border-radius: 10%;
}
.check {
  color: #ffc159;
}
</style>