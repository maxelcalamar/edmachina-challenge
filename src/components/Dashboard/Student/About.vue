<template>
  <v-expansion-panel elevation="4" value="about">
    <v-expansion-panel-title>
      <CustomLabel text="About">
        <span class="mdi mdi-dots-vertical" style="width: 5px"></span>
        <span class="mdi mdi-dots-vertical"></span>
      </CustomLabel>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <CustomLabel :text="'Período: 2023 - 1'"></CustomLabel>
      <CustomLabel :text="'Status: Alumno Regular'"></CustomLabel>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script lang="ts" setup>
import CustomLabel from "../../common/CustomLabel.vue";
</script>
