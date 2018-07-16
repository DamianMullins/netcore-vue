<template>
<div>
    <div v-for="item in basketItems" :key="item.name">
        <div class="c-basket-row">
            <button class="o-btn o-btn--small" @click="removeItem(item)">
                -
                <span class="is-visuallyHidden" v-html="$t('menu.removeItem', { item: item.name })"></span>
            </button>
            <p class="c-basket-item">
                {{ item.quantity }} x
                <span v-html="item.name">{{ item.name }}</span>
            </p>
            <p class="c-basket-price">{{ $n(itemTotal(item), 'currency') }}</p>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'basket-items',

  computed: {
    ...mapGetters(["basketItems"])
  },

  methods: {
    ...mapActions(["removeItem"]),

    itemTotal(item) {
      return item.price * item.quantity;
    }
  }
};
</script>
