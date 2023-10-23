<template>
  <v-navigation-drawer permanent expand-on-hover rail rail-width="65">
    <v-list density="compact" nav>
      <v-list-item
        title="Dashboard"
        prepend-icon="mdi-home"
        base-color="primary"
        value="/"
        rounded="lg"
        density="comfortable"
        variant="flat"
        class="pl-3 dashboardItem"
      >
        <!-- <template v-slot:prepend>
          <v-btn
            variant="flat"
            prepend-icon="mdi-home"
            color="primary"
            rounded="lg"
            density="comfortable"
          >
            Dashboard
          </v-btn>
        </template> -->
      </v-list-item>
    </v-list>
    <!-- <v-divider></v-divider> -->
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in sidebarOptions"
        :key="i"
        :value="item"
        color="primary"
        elevation="3"
        :prepend-icon="item.icon"
        :title="item.name"
        class="pl-3 mb-3"
      >
        <!-- <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.name"></v-list-item-title> -->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!-- <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card> -->
</template>
<script lang="ts">
import configService from "../../services/configService";

export default {
  data() {
    return {
      drawer: true,
      rail: true,
      sidebarOptions: [{}],
    };
  },
  created() {
    this.sidebarOptions = configService.getSidebarOptions();
  },
};
</script>
<style scoped>
.dashboardItem > i {
  opacity: 1 !important;
}
</style>
