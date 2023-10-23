<template>
  <v-container fluid style="height: 100vh" class="container">
    <v-row align="start" full>
      <v-col cols="12" xs="12" sm="6" md="3" xl="2">
        <Student />
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="9">
        <Main />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Student from "@/components/Dashboard/Student/Student.vue";
import Main from "@/components/Dashboard/Main/Main.vue";
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
}
</style>
