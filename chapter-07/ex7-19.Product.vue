<!-- 코드 7-19 Product 스크립트: chapter-07/product-script.js -->

...
<script>
import MyHeader from './Header.vue'
export default {
  components: {MyHeader},
  data() {
    return {
      product: ''
    }
  },
  created: function() {
    axios.get('/static/products.json')
    .then((response) => {
      this.product = response.data.products.filter(
          data => data.id == this.$route.params.id)[0]
      this.product.image = '/' + this.product.image;
    });
  }
}
</script>