<template>
  <main class="container-fluid background">
    <div class="row">
      <router-view />
    </div>
  </main>
  <footer></footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
.font {
  font-family: "Questrial", sans-serif;
}
.background {
  background-color: #323647;
}
</style>
