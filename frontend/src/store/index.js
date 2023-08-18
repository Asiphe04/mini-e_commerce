import { createStore } from "vuex";
const miniURL = "https://mini-e-commerce.onrender.com/";

export default createStore({
  state: {
    Products: null,
    Product: null,
  },
  getters: {},
  mutations: {
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setProduct: (state, Product) => {
      state.Product = Product;
    },
  },
  actions: {
    getProducts: async (context) => {
      try {
        const res = await fetch(`${miniURL}Products`);
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        const Products = await res.json();
        context.commit("setProducts", Products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    getProduct: async (context, id) => {
      try {
        const res = await fetch(`${miniURL}Products/` + id);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const Product = await res.json();
        context.commit("setProduct", Product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    },
  },
  modules: {},
});
