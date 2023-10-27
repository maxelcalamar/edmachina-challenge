<template>
  <v-card class="mb-4" max-width="360" elevation="4">
    <v-card-text class="">
      <v-row>
        <v-col cols="3">
          <v-avatar image="@/assets/avatar_AYSI32392.png" size="65"></v-avatar>
        </v-col>
        <v-col cols="7">
          <a href="/" class="v-btn customLink">
            <strong>
              {{ props.student.fullName }}
            </strong>
          </a>
          <CustomLabel class="my-2" :text="'Reg. ID: ' + props.student.regId" />
          <br />
          <CustomLabel :text="'Status: ' + props.student.status" />
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
    </v-card-text>
    <v-card-actions>
      <v-row align="center" justify="space-between" class="px-6">
        <v-btn
          v-for="item in actions"
          :key="item.id"
          density="comfortable"
          max-width="20px"
          :icon="item.icon"
          color="#6E6B7B"
          class="cardActionsBtn"
        ></v-btn>
      </v-row>
    </v-card-actions>
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

let actions = [
  {
    id: 1,
    icon: "mdi-file-edit-outline",
  },
  {
    id: 2,
    icon: "mdi-message-text",
  },
  {
    id: 3,
    icon: "mdi-calendar-today",
  },
  {
    id: 4,
    icon: "mdi-email",
  },
  {
    id: 5,
    icon: "mdi-phone",
  },
  {
    id: 6,
    icon: "mdi-dots-horizontal",
  },
];
</script>
<style scoped>
.customLink {
  word-wrap: break-word;
  display: block;
  text-transform: none;
}
.cardActionsBtn >>> .v-btn__content i {
  font-size: 18px;
}
</style>
