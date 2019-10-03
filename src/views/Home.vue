<template>
  <div>
    <banner></banner>
    <products></products>
    <my-footer></my-footer>
  </div>
</template>

<script>
import banner from "../components/Banner";
import footer from "../components/Footer";
import products from "../sections/Products";

export default {
  name: "App",
  components: {
    banner,
    products,
    "my-footer": footer
  },
  data: () => {
    return {};
  }
};
</script>
