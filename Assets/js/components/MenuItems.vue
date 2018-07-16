<template>
<div class="c-listing">
    <section class="g c-listing-item" v-for="item in menu.items" :key="item.id">
        <div class="g-col g-span9">
            <p class="c-listing-item-text" v-html="item.name">{{ item.name }}</p>
            <p class="c-listing-item-text">{{ $n(item.price, 'currency') }}</p>
        </div>
        <div class="g-col g-span3 text-right">
            <button class="o-btn o-btn--primary o-btn--small" @click="addItem(item)">+
                <span class="is-visuallyHidden" v-html="$t('menu.addItem', { item: item.name })"></span>
            </button>
        </div>
    </section>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'menu-items',

  created() {
    this.getAllMenuItems();
  },

  computed: {
    ...mapState(["menu"])
  },

  methods: {
    ...mapActions(["getAllMenuItems", "addItem"])
  }
};
</script>
