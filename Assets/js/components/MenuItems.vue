<template>
<div class="c-listing">
    <h1>{{ menu.restaurantName }}</h1>
    <menu-item v-for="item in menu.items" :key="item.id" :item="item" />
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MenuItem from './MenuItem.vue';

export default {
  name: 'menu-items',

  components: {
      MenuItem
  },

  computed: {
    ...mapState(["menu"])
  }
};
</script>
