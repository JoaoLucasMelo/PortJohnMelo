<template>
  <div class="App1">
    <div
      class="modal fade"
      id="Villainism"
      tabindex="-1"
      aria-labelledby="VillainismLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body font">
            <div class="d-flex justify-content-between">
              <div>
                <p class="text-white f-24">Villainism App</p>
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
                src="../assets/img/villainism.jpg"
                alt=""
              />
            </div>
            <div class="mt-3">
              <p class="text-white f-16 mb-0">
                Kanban like app with a fun and original UI. A simple idea of
                helping the organization of teams/groups or even personal
                projects, sprints, tasks and notes.
              </p>
              <p class="text-white f-16">
                FullStack app built with a partner developer. This app helped me
                at the time with data relashionships since there's so many
                conections in between projects, sprints, tasks and notes, all of
                it conected to the user and colaborators.
              </p>
              <p class="text-white f-16">
                Tecnologies used: Vue 3, CSS, Express, Node.js, Auth0 and
                MongoDB.
              </p>
              <a
                target="_blank"
                href="https://villainism.herokuapp.com/#/"
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