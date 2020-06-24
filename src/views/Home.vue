<template>
  <div>
    <navigator></navigator>
    <banner></banner>
    <products></products>
    <my-footer></my-footer>
  </div>
</template>

<script>
import banner from "../components/Banner";
import footer from "../components/Footer";
import products from "../sections/Products";
import navigator from "../components/Navigation";

export default {
  name: "App",
  components: {
    banner,
    navigator,
    products,
    "my-footer": footer,
  },
  data: () => {
    return {};
  },
};
</script>
