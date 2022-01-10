<template>
  <div class="App1">
    <div
      class="modal fade"
      id="SpiceItUp"
      tabindex="-1"
      aria-labelledby="SpiceItUpLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body font">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-white f-24">Spice it up! App</p>
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
                src="../assets/img/spiceitup.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <p class="text-white f-16">
                App developed by me to help people store their recipes and also
                share and favorite other recipes.
              </p>
              <p class="text-white f-16">
                This was one of my first projects using C# and MySQL so it took
                me a little bit of time to figure out some of the features
                added.
              </p>
              <p class="text-white f-16">
                Tecnologies used: Vue 3, CSS, C# and MySQL.
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