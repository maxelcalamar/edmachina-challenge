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
      </v-list-item>
    </v-list>
    <v-list density="compact" nav>
      <v-list-item
        v-for="(item, i) in sidebarOptions"
        :key="i"
        :value="item"
        color="primary"
        :prepend-icon="item.icon"
        :title="item.name"
        class="pl-3 mb-3 sideBarElevation"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import configService from "../../services/configService";

export default {
  data() {
    return {
      drawer: true,
      rail: true,
      sidebarOptions: [{ icon: String, name: String }],
    };
  },
  created() {
    this.sidebarOptions = configService.getSidebarOptions();
  },
};
</script>
<style scoped>
.dashboardItem >>> .v-list-item__prepend > .v-icon {
  opacity: 1 !important;
}
.sideBarElevation {
  box-shadow: 0px 3px 3px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 3px 4px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 1px 8px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12)) !important;
}
</style>
