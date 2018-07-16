<template>
<div>
    <basket-item v-for="item in basketItems" :key="item.name" :item="item" />
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BasketItem from './BasketItem.vue';


export default {
  name: 'basket',

  components: {
      BasketItem
  },

  computed: {
    ...mapGetters(["basketItems"])
  }
};
</script>
