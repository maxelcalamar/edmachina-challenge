<template>
  <v-app>
    <Header></Header>
    <!-- <default-bar /> -->
    <sidebar></sidebar>
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
import DefaultView from "./View.vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";
</script>
