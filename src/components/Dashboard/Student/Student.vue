<template>
  <Card :student="student" />
  <v-expansion-panels style="max-width: 360px" multiple v-model="panel">
    <AboutStudent />
    <About />
    <CareerDetails />
  </v-expansion-panels>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";
import CareerDetails from "./CareerDetails.vue";
import About from "./About.vue";
import AboutStudent from "./AboutStudent.vue";
import studentsService from "@/services/studentsService";

let student = studentsService.getStudent(1);

let panel = ["about", "careerDetails", "aboutStudent"];
</script>
<style scoped>
.v-expansion-panel--active
  :deep()
  .v-expansion-panel-title--active
  > .v-expansion-panel-title__overlay {
  opacity: 0;
}
.v-expansion-panel--active :deep() .v-expansion-panel-title {
  min-height: auto;
  padding-left: 20px;
}
.v-expansion-panel--active :deep() .v-expansion-panel-title strong {
  font-size: 0.8rem;
}
</style>
