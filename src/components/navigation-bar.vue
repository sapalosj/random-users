<template>
  <nav class="flex align-content-center">
    <a href="#/" class="px-1">
      <img alt="logo" src="../assets/primevue-logo.png" width="30" />
    </a>
    <a class="px-1"> Random User Generator </a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationBar",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--surface-a);
  padding: 0.5rem;
  align-items: center;
}
</style>
