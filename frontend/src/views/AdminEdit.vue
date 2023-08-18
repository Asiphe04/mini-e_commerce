<template>
  <div>
    <div class="container flex-container">
      <label for="productName">Name</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="productName"
        name="productName"
        v-model="productName"
        :placeholder="productName"
      />
      <label for="image">Image</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="image"
        name="image"
        v-model="image"
      />
      <label for="description">Description</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="description"
        name="description"
        v-model="description"
      />

      <label for="price">Price</label>
      <input
        type="number"
        autocomplete="off"
        required
        id="price"
        name="price"
        v-model="price"
      />
      <label for="category">Category</label>
      <input
        type="text"
        autocomplete="off"
        required
        id="category"
        name="category"
        v-model="category"
      />

      <button @click="updateProduct" class="btn-submit">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      productName: "",
      image: "",
      description: "",
      price: "",
      category: "",
    };
  },
  methods: {
    async updateProduct() {
      try {
        await axios.put(
          `https://mini-e-commerce.onrender.com/Products/${this.$route.params.id}`,
          {
            productName: this.productName,
            image: this.image,
            description: this.description,
            price: this.price,
            category: this.category,
          }
        );
        this.productName = "";
        this.description = "";
        this.price = "";
        this.image = "";
        this.$router.push("/admin");
      } catch (err) {
        console.log(err);
      }
    },
  },
  props: ["Product"],
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}

label {
  font-size: 1.5rem;
  margin-top: 2.5rem;
}

input {
  font-size: 1.25rem;
  padding: 0.5rem 0 0.5rem 1rem;
}

.btn-submit {
  margin-top: 2rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: #0033ff;
  color: #ffffff;
  text-align: center;
  width: fit-content;
  border-radius: 0.2rem;
  font-size: 1.5rem;
}
</style>
