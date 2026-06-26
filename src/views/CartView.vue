<script >
import Cart from '../components/cart.vue'
export default {
  components: {
    Cart,
  }
}
</script>
<template>
  <div class="main">
    <div class="mainBrand">
      <div class="brandColumnFirst">
        <a>Главная → Заказы</a>
        <h1>Заказы</h1>
      </div>
      <div class="brandColumn">
        <img src="@/images/People/shop.svg" alt="">
      </div>
    </div>
  </div>
  <Cart/>
</template>



<style scoped>
.main{
  padding-top: 40px;
  padding-bottom: 40px;
}
.mainBrand {
  width: 80%;
  margin: 0 auto;
  display: flex;
  background: #F6F6F6;
  border-radius: 10px;
  align-items: center;
  max-height: 232px ;
  min-height: 232px ;
}
.brandColumnFirst {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  width: 400px;
}
.brandColumnFirst a{
  text-decoration: none;
  font-size: 16px;
  color: #8b8d92;
  padding-left: 100px;

}
.brandColumnFirst h1{
  color: #171B24;
  font-size: 48px;
  padding-left: 100px;
  padding-bottom: 50px;
  z-index: 0;
}
.brandColumn{
  max-width: 707px;
}

</style>