<template>
  <v-app-bar class="px-12" color="white" flat app>
    <v-toolbar-title>Vue shop</v-toolbar-title>

    <v-toolbar-items class="ml-10 grey--text lighten-3">
      <v-btn text class="grey--text lighten-3">Home</v-btn>
      <v-btn text class="grey--text lighten-3">Products</v-btn>
      <v-btn text class="grey--text lighten-3">About</v-btn>
    </v-toolbar-items>

    <div class="flex-grow-1"></div>

    <template v-if="$vuetify.breakpoint.smAndUp">
      <v-col class="mt-2" cols="12" lg="3" sm="3">
        <v-text-field class="mt-5" :height="40" label="Search" single-line outlined></v-text-field>
      </v-col>

      <v-btn color="success" outlined>Get start</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.v-text-field--outlined .v-label {
  top: 10px !important;
}

.v-btn {
  text-transform: none !important;
}

.v-btn--outlined {
  border: 2px solid currentColor !important;
}

.theme--light.v-text-field--outlined fieldset {
  /* border-color: rgba(51, 199, 103, 0.24) !important; */
  border: 2px solid rgba(51, 199, 103, 0.24) !important;
  /* max-height: 30px !important; */
}

.v-text-field--box .v-input__slot,
.v-text-field--outline .v-input__slot {
  min-height: 20px !important;
}

/* .v-text-field.v-text-field--solo .v-input__control {
    min-height: 40px !important;
} */

.v-text-field.v-text-field--enclosed .v-input__prepend-outer,
.v-text-field.v-text-field--enclosed .v-input__prepend-inner,
.v-text-field.v-text-field--enclosed .v-input__append-inner,
.v-text-field.v-text-field--enclosed .v-input__append-outer {
  margin-top: 4px;
}

.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 20px !important;
}

.v-text-field.v-text-field--enclosed {
  /* height: 10px !important; */
}
</style>
