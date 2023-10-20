<template>
  <v-app-bar flat dark color="primary" height="63">
    <v-app-bar-title>
      <v-img width="146" src="@/assets/edmachinaLogo.svg" />
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-web</v-icon>
    </v-btn>

    <v-btn icon="mdi-moon-waning-crescent"> </v-btn>

    <v-btn icon="mdi-bell">
      <v-badge :content="user.notifications" color="error">
        <v-icon>mdi-bell</v-icon>
      </v-badge>
    </v-btn>
    <template v-slot:append>
      <v-list-item
        class="text-white"
        :title="user.name"
        :subtitle="user.role"
      ></v-list-item>
      <v-avatar size="36px">
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        ></v-img>
      </v-avatar>
    </template>
  </v-app-bar>
</template>
<script lang="ts">
export default {
  data() {
    return {
      user: {
        name: "Hellen Smith",
        role: "Admin",
        notifications: 4,
        imgPath: "",
      },
    };
  },
};
</script>
