<template>
  <navigation-bar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "./components/navigation-bar.vue";

export default defineComponent({
  components: {
    NavigationBar,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  background-color: var(--surface-b);
  font-family: var(--font-family);
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--surface-b);
  color: var(--text-color);
}
</style>
