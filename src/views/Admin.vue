<template>
  <div>
    <v-app-bar color="green darken-1" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary absolute>
      <h1 class="subtitle pl-5 py-4 grey--text">Shop</h1>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-avatar>
          <v-img
            height="60"
            min-width="60"
            src="https://randomuser.me/api/portraits/men/78.jpg"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
          <v-list-item-subtitle>Administrator</v-list-item-subtitle>

          <v-list-item-subtitle>
            <v-badge color="green" dot inline left>online</v-badge>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-text-field
        active-class="txtSearch"
        class="txtSearch my-5 mx-2"
        placeholder="Search"
        append-icon="search"
        outlined
      ></v-text-field>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="$router.push('/admin/overview')">
            <v-list-item-avatar>
              <v-icon>show_chart</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Overview</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/admin/products')">
            <v-list-item-avatar>
              <v-icon>storefront</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Products</v-list-item-title>
          </v-list-item>

          <v-list-item @click="$router.push('/admin/orders')">
            <v-list-item-avatar>
              <v-icon>shopping_cart</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Orders</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logOut()">
            <v-list-item-avatar>
              <v-icon>power_settings_new</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-container fluid class="pa-0">
      <router-view></router-view>
    </v-container>
  </div>
</template>
<script>
import { db, fb } from "../firebase";

export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    logOut() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.v-text-field--outlined .v-label {
  top: 0px !important;
}

.v-btn {
  text-transform: none !important;
}

.v-btn--outlined {
  border: 2px solid currentColor !important;
}

.txtSearch.v-text-field--outlined fieldset {
  /* border-color: rgba(51, 199, 103, 0.24) !important; */
  border: 2px dashed rgba(51, 199, 103, 0.24) !important;
  /* max-height: 30px !important; */
}

.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  min-height: 20px !important;
}

/* .v-text-field.v-text-field--solo .v-input__control {
    min-height: 40px !important;
} */

.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 20px !important;
}

.v-input .txtSearch .v-input__append-inner {
  margin-top: 5px !important;
}
</style>
