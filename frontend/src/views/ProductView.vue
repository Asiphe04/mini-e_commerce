<template>
    <div class="background rounde-8">
        <div class="container">
            <div class="text-center">
                <h1>
                    products
                </h1>
            </div>
            <div class="container">
                <div class="row" v-for="product in Products" :key="product.id">
                    <div class="products-container">
                        <img src="product.image" alt="product.name" class="product-img">
                        
                        <div class="">
                            <h2>{{ product.category }}</h2>
                            <p class="disc">{{ product.description }}</p>
                            <h4>{{ product.price }}</h4>

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
    this.$store.dispatch("fetchProducts");
  },
} 

</script>

