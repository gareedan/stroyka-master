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
        <a>Главная → Корзина</a>
        <h1>Корзина</h1>
      </div>
      <div class="brandColumn Visible">
        <img src="@/images/People/shop.svg" alt="" >
      </div>
      <div class="brandColumn InVisible">
      <img src="@/images/cartImg.svg" alt="" >
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
.InVisible{
  display:none;
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
@media (max-width: 480px) {
  .main {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .mainBrand {
    width: calc(100% - 24px);
    margin: 0 12px;
    min-height: 160px;
    max-height: 160px;
    overflow: hidden;
    position: relative;
  }

  .Visible {
    display: none;
  }

  .InVisible {
    display: block;
    position: absolute;
    right: -20px;
    bottom: 0;
    width: 220px;
  }

  .InVisible img {
    width: 90%;
    height: auto;
    display: block;
  }

  .brandColumnFirst {
    width: 55%;
    gap: 10px;
    z-index: 1;
  }

  .brandColumnFirst a {
    font-size: 11px;
    padding-left: 16px;
  }

  .brandColumnFirst h1 {
    font-size: 28px;
    font-weight: 700;
    padding-left: 16px;
    padding-bottom: 0;
  }
}
</style>