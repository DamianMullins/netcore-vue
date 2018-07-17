<template>
<div class="c-basket-row">
    <button class="o-btn o-btn--small" @click="removeItem(item)">-
        <span class="is-visuallyHidden" v-html="$t('menu.removeItem', { item: item.name })"></span>
    </button>
    <p class="c-basket-item" v-html="`${item.quantity} x ${item.name}`"></p>
    <p class="c-basket-price">{{ $n(itemTotal(item), 'currency') }}</p>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'basket-item',

  props: [
      "item"
  ],

  methods: {
    ...mapActions(["removeItem"]),

    itemTotal(item) {
      return item.price * item.quantity;
    }
  }
};
</script>
