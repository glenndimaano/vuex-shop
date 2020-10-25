<template>
   <div>
      <h1>Sohpping Cart</h1>
      <ul>
         <li v-for="product in products" :key="product.id">
            {{ product.title }} -- {{ product.price }} -- {{ product.quantity }}
         </li>
      </ul> 
      <p>total : {{ total }} </p>
         <button @click.prevent="checkout">Checkout</button>
         <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
   </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
   export default {
      computed: {
         ...mapState({
            checkoutStatus: (state) => state.cart.checkoutStatus
         }),
         ...mapGetters({
            products: 'cartProducts',
            total: 'cartTotal'
         })
      },
      methods:{
         ...mapActions({
            checkout: 'checkout'
         })
      }
   }
</script>