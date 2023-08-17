<template>
  <div class="background rounde-8">
    <div class="container">
      <div class="text-center">
        <h1>products</h1>
      </div>
      <div class="container">
        <div class="row" v-for="Product in Products" :key="Product.productID">
          <div class="products-container">
            <img :src="Product.image" :alt="Product.productName" class="product-img" />

            <div class="product-card">
              <!-- <h2>{{ Product.category }}</h2> -->
              <p class="desc">{{ Product.description }}</p>
              <h4>{{ Product.price }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Products() {
      return this.$store.state.Products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
.product-img {
  width: 150px;
  height: 150px;
}
</style>
