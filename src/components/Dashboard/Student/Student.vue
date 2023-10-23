<template>
  <Card :student="student" />
  <CareerDetails />
  <v-divider></v-divider>
</template>
<script lang="ts" setup>
import Card from "./Card.vue";
import CareerDetails from "./CareerDetails.vue";
import studentsService from "@/services/studentsService";

let student = studentsService.getStudent(1);
</script>
