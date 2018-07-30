<template>
<section class="g c-listing-item">
    <div class="g-col g-span9">
        <p class="c-listing-item-text" v-html="item.name"></p>
        <p class="c-listing-item-text">{{ $n(item.price, 'currency') }}</p>
    </div>
    <div class="g-col g-span3 text-right">
        <button class="o-btn o-btn--primary o-btn--small" @click="addItem(item)">+
            <span class="is-visuallyHidden" v-html="$t('menu.addItem', { item: item.name })"></span>
        </button>
    </div>
</section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'menu-item',

  props: [
      "item"
  ],

  methods: {
    ...mapActions(["addItem"])
  }
};
</script>
