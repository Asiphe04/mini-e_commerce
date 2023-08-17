import { createStore } from "vuex";
const miniURL = "http://localhost:3000/";
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
      fetch(`${miniURL}Products`)
        .then((res) => res.json())
        .then((Products) => context.commit("setProducts", Products));
    },
    getProduct: async (context, id) => {
      fetch(`${miniURL}Products/` + id)
        .then((res) => res.json())
        .then((Product) => context.commit("setProduct", Product));
    },
  },
  modules: {},
});
