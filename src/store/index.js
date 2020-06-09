import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cart: [],
        products: [
            {
                name: "Base Organic cotton t-shirt",
                id: '001',
                price: 100,
                color: "Hvit",
                size: "Small",
                gender: "Dame",
                quantity: 10,
                dateAdded: "",
                category: "Topper",
                details: {
                    material: "Organic Cotton",
                    fit: "Normal passform",
                    maintancence: "Maskin vask",
                    additional: "",
                },
                images: [
                    'white-01-1.jpg',
                    'white-01-2.jpg',
                    'white-01-3.jpg',
                    'white-01-4.jpg',
                ]
            },
            {
                name: "Arch Light Jeans",
                id: '002',
                price: 599,
                color: "Blue",
                size: "Medium",
                gender: "Dame",
                quantity: 8,
                dateAdded: "",
                category: "Jeans",
                details: {
                    material: "Bomull",
                    fit: "High Waist",
                    maintancence: "Maskin vask",
                    additional: "",
                },
                images: [
                    'jeans-01-1.jpg',
                    'jeans-01-2.jpg',
                    'jeans-01-3.jpg',
                    'jeans-01-4.jpg',
                    ]
            }
        ]
    },
    mutations: {},
    actions: {},
    getters: {
      product: (state) => (id) => {
        return state.products.filter(p => p.id == id)[0]
      }
    },
  });