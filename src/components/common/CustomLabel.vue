<template>
  <v-label>
    <slot></slot>
    <strong>{{ props.text }} </strong>
  </v-label>
</template>
<script lang="ts" setup>
const props = defineProps({
  text: String,
});
</script>
