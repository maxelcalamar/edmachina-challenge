<template>
  <v-card class="mb-4" max-width="360" elevation="4">
    <v-card-text class="">
      <v-row>
        <v-col cols="3">
          <v-avatar image="@/assets/avatar_AYSI32392.png" size="65"></v-avatar>
        </v-col>
        <v-col cols="7">
          <a href="/" class="v-btn">
            {{ student.fullName }}
          </a>
          <!-- <v-list-item link variant="flat">
              {{ student.fullName }}
            </v-list-item> -->
          <!-- <v-btn variant="text"> -->
          <!-- </v-btn> -->
          {{ student.status }}
        </v-col>
        <v-col cols="2">
          <v-btn
            size="small"
            color="surface-variant"
            variant="text"
            icon="mdi-heart"
          ></v-btn>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- <v-row>
      <v-col>
        <v-avatar image="@/assets/avatar_AYSI32392.png" size="65"></v-avatar>
      </v-col>
      <v-col>
        <v-list-item
          :title="student.fullName"
          :subtitle="student.status"
        ></v-list-item>
      </v-col>
    </v-row> -->

    <!-- <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-heart"
      ></v-btn>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-bookmark"
      ></v-btn>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-share-variant"
      ></v-btn>
    </v-card-actions> -->
    <!-- <template>
      <v-toolbar>
        <template v-slot:prepend>
          <v-btn icon="mdi-arrow-left"></v-btn>
        </template>

        <v-btn icon="mdi-archive-plus-outline" class="ms-5"></v-btn>

        <v-btn icon="mdi-alert-circle-outline"></v-btn>

        <v-btn icon="mdi-delete-outline"></v-btn>

        <template v-if="$vuetify.display.smAndUp">
          <v-divider
            class="mx-3 align-self-center"
            length="24"
            thickness="2"
            vertical
          ></v-divider>

          <v-btn icon="mdi-folder-outline"></v-btn>

          <v-btn icon="mdi-tag-outline"></v-btn>

          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-toolbar>
    </template> -->
  </v-card>
</template>
<script lang="ts">
export default {
  props: ["student"],
  data: () => ({}),
};
</script>
<style scoped>
.v-btn {
  word-wrap: break-word;
  display: block;
}
</style>
