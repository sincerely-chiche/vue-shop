<template>
  <div>
    <v-system-bar color="green darken-2"></v-system-bar>

    <v-app-bar color="green darken-1" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary bottom absolute>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-text-field class="my-5 mx-2" placeholder="Search" append-icon="search" outlined></v-text-field>

      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>
<style scoped>
.v-text-field--outlined .v-label {
  top: 0px !important;
}

.v-btn {
  text-transform: none !important;
}

.v-btn--outlined {
  border: 2px solid currentColor !important;
}

.theme--light.v-text-field--outlined fieldset {
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

.v-text-field.v-text-field--enclosed {
  /* height: 10px !important; */
}
</style>
