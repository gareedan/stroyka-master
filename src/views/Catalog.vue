<script>
import Sellers from "@/components/Sellers.vue";
import Categories from "@/components/Categories.vue";


export default {
  components: {
    Sellers,
    Categories,
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
   <Categories />
 </div>
</template>

<style scoped>
*{
  width: 100%;
  font-family: 'Manrope', sans-serif;
  box-sizing: border-box;
}

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
  align-items: center;
  gap: 20px;

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
}
.brandColumn{
  max-width: 707px;
}
.brandColumnFirst h2{
  color: #2F323A;
  font-size: 20px;
  padding-left: 100px;
  font-weight: 100;
}
</style>