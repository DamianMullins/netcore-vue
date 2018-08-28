<template>
<div class="c-basket-totals">
    <div class="c-basket-row c-basket-row--spaced">
        <p class="c-basket-item c-basket-subtotal u-uppercase">subtotal</p>
        <p
            data-js-test="basket-subtotal"
            class="c-basket-price c-basket-subtotal">
            {{ $n(subtotal, 'currency') }}
        </p>
    </div>

    <div class="c-basket-group c-basket-group--spaced">
        <div class="c-basket-row">
            <p class="c-basket-item">Delivery Fee</p>
            <p
                data-js-test="basket-deliveryFee"
                class="c-basket-price">{{ $n(basket.deliveryFee, 'currency') }}
            </p>
        </div>
    </div>

    <div class="c-basket-row">
        <p class="c-basket-item c-basket-total gamma u-uppercase">total</p>
        <p
            data-js-test="basket-total"
            class="c-basket-price c-basket-total gamma">
            {{ $n(total, 'currency') }}
        </p>
    </div>
</div>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: 'basket-totals',

  computed: {
    ...mapGetters(["subtotal", "total"]),
    ...mapState(["basket"])
  }
};
</script>
