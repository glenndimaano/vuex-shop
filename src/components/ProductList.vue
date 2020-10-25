<template>
   <div>
      <h1>Product List</h1>
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="is loading" />
      <ul v-else>
         <li v-for="product in products" :key="product.id">{{ product.title }} -- {{ product.price }} -- {{ product.inventory }}
             <button 
             :disabled="!productIsInStock(product)" 
             @click.prevent="addProductToCart(product)">Add</button>
         </li>
      </ul>
   </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
   data() {
     return {
        loading: false
     } 
   },
   created() {
      this.loading = true
      this.$store.dispatch('fetchProducts').then(() => this.loading = false)
   },
   computed: {
      ...mapState({
         products: (state) => state.products.items,
         productIsInStock: 'productInIsStock'
      }),
     ...mapGetters({
        productIsInStock: 'productIsInStock'
     })
   }, 
   methods: {
      ...mapActions({
         addProductToCart: 'addProductToCart'
      })
   }
}
</script>