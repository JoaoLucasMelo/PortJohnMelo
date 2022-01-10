<template>
  <div class="App1">
    <div
      class="modal fade"
      id="Keepr"
      tabindex="-1"
      aria-labelledby="KeeprLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body font">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-white f-24">Keepr App</p>
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
                src="../assets/img/keepr.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <p class="text-white f-16 mb-0">
                Pinterest like app that allow users create public or private
                vaults and post pictures. Each vault can have pictures from
                anybody within the app and you can keep track of how many people
                added your pictures to their vaults.
              </p>
              <p class="text-white f-16">
                FullStack app built solo, one of the biggest challenges was to
                make sure all the relashionships worked perfectly so that the
                front-end had all the support necessary for the complexity of
                the data used in this app.
              </p>
              <p class="text-white f-16">
                Tecnologies used: Vue 3, CSS, C#, DotNET and MySQL.
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