<template>
  <div class="products">
    <v-sheet class color="white" height="400px" width="100%">
      <v-container>
        <v-row>
          <v-col class="pt-10" cols="12" lg="6" sm="6">
            <h6 class="py-10 display-1 grey--text lighten-2">
              Vue shop for developers Vue shop for developers Vue shop for
              developers Vue shop for developersVue shop for developers
            </h6>
          </v-col>
          <v-col class="pt-10" cols="12" lg="6" sm="6">
            <v-img height="60%" src="../../assets/Technology.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-container>
      <v-row>
        <v-col cols="12">
          <v-divider></v-divider>
          <h1 class="grey--text d-inline">Products List</h1>
          <v-btn
            @click="productDialog = true"
            color="primary"
            class="float-right mt-1"
            >Add product</v-btn
          >
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Price</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Tags</th>
                  <th class="text-right">Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in products" :key="item.id">
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.tags }}</td>
                  <td class="text-right">
                    <v-btn
                      color="primary"
                      class="mr-3"
                      @click="updateProduct(item.id)"
                      >Edit</v-btn
                    >
                    <v-btn color="error" @click="deleteProduct(item.id)"
                      >Delete</v-btn
                    >
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="productDialog" persistent max-width="900">
      <v-card>
        <v-card-title class="headline">Add new product</v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="7">
                <v-text-field
                  label="Product name"
                  outlined
                  v-model="product.name"
                >
                </v-text-field>
                <v-textarea
                  label="Product description"
                  height="200"
                  outlined
                  v-model="product.description"
                ></v-textarea>
              </v-col>
              <v-col cols="5">
                <h3>Product details</h3>
                <v-divider></v-divider>
                <v-text-field
                  class="mt-2"
                  label="Product price"
                  outlined
                  v-model="product.price"
                >
                </v-text-field>
                <v-text-field
                  label="Product tag"
                  outlined
                  v-model="product.tags"
                >
                </v-text-field>
                <v-file-input
                  chips
                  show-size
                  counter
                  outlined
                  clearable
                  multiple
                  @change="uploadImage()"
                  label="Select product image"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click.stop="productDialog = false"
            >Cancel</v-btn
          >
          <v-btn color="green darken-1" text @click.stop="addNewProduct()"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db, fb } from "../../firebase";

export default {
  name: "Products",
  data: () => ({
    productDialog: false,
    action: "add",
    id: "",
    products: [],
    product: {
      name: "",
      price: 0.0,
      description: "",
      image: "",
      tags: "",
    },
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
  }),
  firestore: () => ({
    products: db.collection("products"),
  }),
  methods: {
    addNewProduct() {
      if (this.action == "add")
        this.$firestore.products.add(this.product).then(() => {
          this.productDialog = false;
        });
      else {
        this.$firestore.products
          .doc(this.id)
          .update(this.product)
          .then(() => {
            console.log("update successful...");
            this.productDialog = false;
          });
      }
    },
    deleteProduct(id) {
      console.log(id);

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.$firestore.products
            .doc(id)
            .delete()
            .then(() => {
              console.log("delete successful...");
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            });
        }
      });
    },
    updateProduct(id) {
      this.action = "update";
      this.productDialog = true;
      this.id = id;
      this.products.forEach((p) => {
        if (p.id == id) this.product = p;
      });
    },
    uploadImage(e) {
      console.log(e);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.products {
  background-color: white;
}
</style>
