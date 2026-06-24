<script>
import Sellers from "@/components/Sellers.vue";


export default {
  components: {
    Sellers,
  }
}
</script>

<template>
  <div class="main">
    <div class="mainBrand">
      <div class="brandColumnFirst">
        <a>Главная → Каталог</a>
        <h1>Каталог</h1>
      </div>
      <div class="brandColumn">
        <img src="@/images/People/CatalogPeople.svg" alt="">
      </div>
    </div>
  </div>
  <div>
    <Sellers />
  </div>
</template>

<style scoped>

*{
  width: 100%;
  font-family: Manrope, sans-serif;
}
.main{
  padding-top: 40px;
}
.mainBrand {
  width: 80%;
  margin: 0 auto;
  display: flex;
  background: #F6F6F6;
  border-radius: 10px;
  align-items: center;
}
.brandColumnFirst {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 368px;
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