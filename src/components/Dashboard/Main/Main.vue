<template>
  <v-breadcrumbs
    :items="['Record Details', 'AYSI32392']"
    color="#7367F0"
  ></v-breadcrumbs>
  <!-- TABS -->
  <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
    <v-tab :value="1">Overview</v-tab>
    <v-tab :value="2">Enrollment</v-tab>
    <v-tab :value="3">Academic</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item v-for="n in 3" :key="n" :value="n">
      <v-container fluid>
        <v-row> </v-row>
      </v-container>
    </v-window-item>
  </v-window>
  <!-- INFO CARDS -->
  <v-row align="center" justify="center">
    <v-card class="mx-auto" max-width="207" variant="flat">
      <template v-slot:prepend>
        <v-btn
          class="ma-2"
          color="#91CC75"
          icon="mdi-calendar"
          :disabled="true"
        ></v-btn>
      </template>
      <template v-slot:title>
        <CustomLabel text="Record Age"></CustomLabel>
      </template>
      <template v-slot:subtitle>
        <CustomLabel text="12 days"></CustomLabel>
      </template>
      <v-divider></v-divider>
      <v-card-item>
        <CustomLabel text="Created on  Jan 2, 2023"></CustomLabel>
      </v-card-item>
    </v-card>
    <v-card class="mx-auto" max-width="207" variant="flat">
      <template v-slot:prepend>
        <v-btn
          class="ma-2"
          color="#91CC75"
          icon="mdi-calendar"
          :disabled="true"
        ></v-btn>
      </template>
      <template v-slot:title>
        <CustomLabel text="Record Age"></CustomLabel>
      </template>
      <template v-slot:subtitle>
        <CustomLabel text="12 days"></CustomLabel>
      </template>
      <v-divider></v-divider>
      <v-card-item>
        <CustomLabel text="Created on  Jan 2, 2023"></CustomLabel>
      </v-card-item>
    </v-card>

    <v-card class="mx-auto" max-width="207" variant="flat">
      <template v-slot:prepend>
        <v-btn
          class="ma-2"
          color="#91CC75"
          icon="mdi-calendar"
          :disabled="true"
        ></v-btn>
      </template>
      <template v-slot:title>
        <CustomLabel text="Record Age"></CustomLabel>
      </template>
      <template v-slot:subtitle>
        <CustomLabel text="12 days"></CustomLabel>
      </template>
      <v-divider></v-divider>
      <v-card-item>
        <CustomLabel text="Created on  Jan 2, 2023"></CustomLabel>
      </v-card-item>
    </v-card>

    <v-card class="mx-auto" max-width="207" variant="flat">
      <template v-slot:prepend>
        <v-btn
          class="ma-2"
          color="#91CC75"
          icon="mdi-calendar"
          :disabled="true"
        ></v-btn>
      </template>
      <template v-slot:title>
        <CustomLabel text="Record Age"></CustomLabel>
      </template>
      <template v-slot:subtitle>
        <CustomLabel text="12 days"></CustomLabel>
      </template>
      <v-divider></v-divider>
      <v-card-item>
        <CustomLabel text="Created on  Jan 2, 2023"></CustomLabel>
      </v-card-item>
    </v-card>
  </v-row>
  <!-- TABS -->

  <!-- ACTIVITY (timeline) -->
  <Activity />
</template>
<script lang="ts" setup>
import CustomLabel from "@/components/common/CustomLabel.vue";
import Activity from "./Activity.vue";
let tab: null;
</script>
