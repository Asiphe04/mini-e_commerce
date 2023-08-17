<template>
  <div class="background">
    <div class="row" v-for="Product in Products" :key="Product.productID">
      <div class="card">
        <div class="products-img">
          <img
            :src="Product.image"
            :alt="Product.productName"
            class="product-img"
          />
        </div>
        <div class="product">
          <h2>{{ Product.productName }}</h2>
          <!-- <p class="desc">{{ Product.description }}</p> -->
          <h4>{{ Product.price }}</h4>
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
/* .row {
    margin-inline: auto;
} */
.card {
  border: 1px solid white;
}
.background {
  background-color: skyblue;
  display: flex;
  /* padding-inline: auto; */
  flex-wrap: wrap;
}
.product-container {
  background-color: white;
}

/* .product-container { */
/* background-color: black; */
/* display: grid; */
/* grid-template-columns: auto auto auto; */
/* background-color: rgba(135, 206, 235, 1); */
/* row-gap: 15px; */
/* max-width: 100%; */
/* border: 2px solid white; */
/* width: 200px; */
/* height: 200px; */
/* } */

/* .container {
    background-color: rgba(135, 206, 235, 1);
    width: 100vw
} */

/* .row { */
/* background-color: red; */
/* border: 2px solid white; */

/* } */
.products-img {
  width: 400px;
}

.product-img {
  width: 150px;
  height: 150px;
}
</style>
