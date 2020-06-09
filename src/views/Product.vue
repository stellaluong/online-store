<template>
  <div>
    <section class="wrapper">
      <div class="flex-col">
        <img class="flex-col--2" :src="imagePath(product)" alt="">
        <div class="flex-col--2" >
        <h2>{{ product.name }}</h2>
        <p>Pris: {{ product.price}},- </p>
        <p>Størrelse: {{ product.size }} </p>
        <p>Farge: {{ product.color}} </p>
        <p><em>{{product.quantity}} Igjen på lager</em></p>
        <h3>Productinformasjon</h3>
        <ul>
          <li>Material: {{product.details.material}}</li>
          <li>Fit: {{product.details.fit}}</li>
          <li>Maintenance: {{product.details.maintenance}}</li>
          <li v-if="product.details.additional">Additional: {{product.details.additional}}</li>
        </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/img/products/${product.images[0]}`)
    }
  }
};
</script>
.flex-col {
  display: flex;
  align-items: flex-start;
}
.flex-col--2 {
  width: 50%;
}
<style lang="scss">
</style>