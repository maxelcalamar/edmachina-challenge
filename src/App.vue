<template>
  <v-theme-provider :theme="store.state.theme">
    <router-view />
  </v-theme-provider>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";

const store = useStore();
</script>
