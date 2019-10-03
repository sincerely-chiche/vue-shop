<template>
  <v-carousel class="px-12 white" hide-delimiters :show-arrows="false">
    <v-carousel-item>
      <v-sheet class color="white" height="100%">
        <v-container fluid>
          <v-row>
            <v-col class="pt-10" cols="12" lg="6" sm="6">
              <h3 class="pt-10 display-2 grey--text darken-4">Vue shop for developers</h3>
              <h6
                class="py-10 display-1 grey--text lighten-2"
              >Vue shop for developers Vue shop for developers Vue shop for developers Vue shop for developersVue shop for developers</h6>
              <v-btn class="mr-5" :width="100" color="primary" depressed>Explore</v-btn>
              <v-btn color="grey " outlined>Products</v-btn>
            </v-col>
            <v-col class="pt-10" cols="12" lg="6" sm="6">
              <v-img src="../assets/banner.jpg" aspect-ratio="1" height="100%"></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
