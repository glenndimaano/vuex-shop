import Vuex from "vuex"
import Vue from "vue"
import products from "@/store/modules/products"
import cart from "@/store/modules/cart"

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		products,
		cart,
	},
	state: {
		//data
	},
	getters: {
		//computed properties
	},
	actions: {
		// = methods
		//make the call
	},
	mutations: {
		// update state
	},
})
