<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Keyboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Keyboard from "@/components/Keyboard.vue";

export default {
  name: "home",
  components: {
    Keyboard
  }
};
</script>
