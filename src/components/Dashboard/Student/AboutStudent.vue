<template>
  <v-expansion-panel elevation="4" draggable="true" value="aboutStudent">
    <v-expansion-panel-title>
      <CustomLabel :text="'Sobre el Estudiante'">
        <span class="mdi mdi-dots-vertical" style="width: 5px"></span>
        <span class="mdi mdi-dots-vertical"></span>
      </CustomLabel>

      <CustomLabel></CustomLabel>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <CustomLabel :text="'Período:' + student.period"></CustomLabel>
      <CustomLabel :text="'Status: ' + student.status"></CustomLabel>
      <CustomLabel :text="'Colegio: ' + student.school"></CustomLabel>
      <CustomLabel :text="'Mod. Admision: ' + student.admision"></CustomLabel>
      <CustomLabel :text="'Segmento: ' + student.segment"></CustomLabel>
      <CustomLabel
        :text="'Segmento Detalle: ' + student.segmentDetail"
      ></CustomLabel>
      <v-divider />
      <CustomLabel :text="'Detalle Riesgo de Ingreso:'"></CustomLabel>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<script lang="ts" setup>
import CustomLabel from "../../common/CustomLabel.vue";

const student = {
  period: "2023 - 1",
  status: "Alumno Regular",
  school: "Aldebaran",
  admision: "Centro Pre",
  segment: "Sin información",
  segmentDetail: "Sin información",
};
</script>
