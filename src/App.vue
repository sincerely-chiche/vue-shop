<template>
  <v-app>
    <v-content class="pb-10">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { fb } from "./firebase";

export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
  computed: {
    getIsAdminState() {
      return this.$store.state.isAdmin;
    },
    user() {
      this.$store.getters.getUser;
    },
  },

  mounted() {
    let me = this;
  },
};
</script>
