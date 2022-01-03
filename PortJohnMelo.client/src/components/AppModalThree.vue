<template>
  <div class="App1">
    <div
      class="modal fade"
      id="TowerEvents"
      tabindex="-1"
      aria-labelledby="TowerEventsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body font">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-white f-24">Tower Events App</p>
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
                src="../assets/img/Screenshot 2021-12-27 142053.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <p class="text-white f-16">
                App developed by me to help people create and share their
                events, and allowing other people to attend to an event if not
                yet at capacity or canceled.
              </p>
              <p class="text-white f-16">
                The biggest road block I overcame on this app was how many
                interactive buttons that changes the page automaticali as you
                click.
              </p>
              <p class="text-white f-16">
                Tecnologies used: Vue 3, JavaScript and CSS.
              </p>
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
</style>