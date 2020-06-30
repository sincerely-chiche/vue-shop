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
        <v-text-field
          class="mt-5"
          :height="40"
          label="Search"
          single-line
          outlined
        ></v-text-field>
      </v-col>

      <v-btn color="success" outlined @click.stop="dialog = true"
        >Get start</v-btn
      >
      <v-dialog v-model="dialog" max-width="290" persistent>
        <v-progress-linear
          v-show="loading"
          indeterminate
          color="green"
        ></v-progress-linear>
        <v-tabs centered grow>
          <v-tab>Login</v-tab>
          <v-tab>Register</v-tab>

          <v-tab-item>
            <v-card>
              <v-card-title class="headline">Login</v-card-title>

              <v-card-text>
                <v-text-field
                  v-model="user.email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="user.password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" text @click="dialog = false"
                  >Close</v-btn
                >
                <v-btn
                  color="green darken-1"
                  text
                  @click="loginUser()"
                  :disabled="loading"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-title class="headline">Create new account</v-card-title>

              <v-card-text>
                <v-text-field
                  v-model="user.name"
                  label="Name"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="user.password"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="red darken-1" text @click="dialog = false"
                  >Close</v-btn
                >
                <v-btn
                  color="green darken-1"
                  text
                  @click="registerUser"
                  :disabled="loading"
                  >Sign up</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-dialog>
    </template>
  </v-app-bar>
</template>

<script>
import { db, fb } from "../firebase.js";

export default {
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
      dialog: false,
      loading: false,
      tab: null,
    };
  },
  methods: {
    loginUser() {
      this.loading = true;
      var me = this;
      fb.auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((cred) => {
          me.dialog = me.loading = false;
          me.$router.replace("/admin/overview");
        })
        .catch((error) => {
          me.loading = false;
          console.log(error);
        });
    },
    registerUser() {
      this.loading = true;
      var me = this;
      fb.auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(function(response) {
          console.log(response);
          me.dialog = me.loading = false;
          me.$router.replace("/admin/overview");
        })
        .catch(function(error) {
          me.loading = false;
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
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
.v-text-field--outlined .v-label {
  top: 10px !important;
}
</style>
