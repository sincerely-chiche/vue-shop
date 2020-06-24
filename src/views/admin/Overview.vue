<template>
  <div class="overview">
    <h3>Overview</h3>
  </div>
</template>

<script>
export default {
  name: "Overview",
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

@mixin headerSytle {
  font-weight: bold;
  color: $orangeRedColor;
}

.overview {
  h3 {
    @include headerSytle;
  }
}
</style>
