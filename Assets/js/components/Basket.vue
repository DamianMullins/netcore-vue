<template>
<div>
    <basket-item v-for="item in basketItems" :key="item.name" :item="item" />

    <hr class="c-basket-separator" />

    <basket-totals />

    <hr class="c-basket-separator" />

    <p class="c-basket-restaurantAddress">
      {{ basket.address }}
    </p>

    <hr class="c-basket-separator" />

    <p class="c-basket-deliveryOrCollectionDetails">
        <DeliveryIcon class="icon-deliveryOrCollection" />
        {{ basket.deliveryTime }}
    </p>
</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import BasketItem from "./BasketItem.vue";
import BasketTotals from "./BasketTotals.vue";
import DeliveryIcon from "../../img/icon--delivery.svg";

export default {
  name: "basket",

  components: {
    BasketItem,
    BasketTotals,
    DeliveryIcon
  },

  computed: {
    ...mapState(["basket"]),
    ...mapGetters(["basketItems"])
  }
};
</script>
