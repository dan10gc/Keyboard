<template>
  <li>
    <button class="note">{{name}}</button>
  </li>
</template>
<script>
export default {
  name: "Key",
  props: ["name"]
};
</script>