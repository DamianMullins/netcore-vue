<template>
<div class="c-listing">
    <menu-item v-for="item in menu.items" :key="item.id" :item="item" />
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MenuItem from './MenuItem.vue';

export default {
  name: 'menu-items',

  // created() {
  //   this.getAllMenuItems();
  // },

  components: {
      MenuItem
  },

  computed: {
    ...mapState(["menu"])
  },

  // methods: {
  //   ...mapActions(["getAllMenuItems"])
  // }
};
</script>
