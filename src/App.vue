<template>
  <v-app>
    <navigator v-if="!getIsAdminState"></navigator>
    <v-content class="pb-10">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navigator from "./components/Navigation";

export default {
  name: "App",
  components: {
    navigator
  },
  data: () => ({
    //
  }),
  computed: {
    getIsAdminState() {
      return this.$store.state.isAdmin;
    }
  }
};
</script>
