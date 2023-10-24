<template>
  <v-card class="mb-4" max-width="360" elevation="4">
    <v-card-text class="">
      <v-row>
        <v-col cols="3">
          <v-avatar image="@/assets/avatar_AYSI32392.png" size="65"></v-avatar>
        </v-col>
        <v-col cols="7">
          <a href="/" class="v-btn">
            <strong>
              {{ props.student.fullName }}
            </strong>
          </a>
          <CustomLabel class="my-2" :text="'Reg. ID ' + props.student.regId" />
          <br />
          <CustomLabel :text="'Status ' + props.student.status" />
          <br />
        </v-col>
        <v-col cols="2">
          <v-btn
            size="small"
            color="surface-variant"
            variant="text"
            icon="mdi-content-copy"
            class="mt-8"
          ></v-btn>
        </v-col>
      </v-row>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-archive-plus-outline" class="ms-5"></v-btn>

        <v-btn icon="mdi-alert-circle-outline"></v-btn>

        <v-btn icon="mdi-delete-outline"></v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import CustomLabel from "../../common/CustomLabel.vue";
import IStudent from "@/types/student";

const props = defineProps({
  student: {
    type: Object as () => IStudent,
    required: true,
  },
});
</script>
<style scoped>
.v-btn {
  word-wrap: break-word;
  display: block;
}
</style>
