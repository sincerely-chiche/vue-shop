<template>
  <div class="overview">
    <v-sheet class color="white" height="100%">
      <v-container fluid>
        <v-row>
          <v-col class="pt-10" cols="12" lg="6" sm="6">
            <v-img height="350" src="../../assets/Technology.png" aspect-ratio="1"></v-img>
          </v-col>
          <v-col class="pt-10" cols="12" lg="6" sm="6">
            <h6
              class="py-10 display-1 grey--text lighten-2"
            >Vue shop for developers Vue shop for developers Vue shop for developers Vue shop for developersVue shop for developers</h6>
            <v-btn class="mr-5" :width="200" color="primary" depressed outlined>Browse Products</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Products",
  data: () => ({})
};
</script>

<style lang="scss" scoped>
</style>