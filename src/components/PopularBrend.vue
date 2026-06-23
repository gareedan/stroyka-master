<script setup>

</script>

<template>
  <div class="brands-wrapper">
<div class="container">
  <div class="RowFirst">
    <h1>Популярные бренды</h1>
    <a href="#" class="all-sales">
      Все бренды
      <img src="../images/rightArrow.svg" alt="Стрелка" />
    </a>
  </div>
  <div class="Row">
      <img src="../images/brend/Bever.svg" alt="">
      <img src="../images/brend/Braer.svg" alt="">
      <img src="../images/brend/Leonardo.svg" alt="">
      <img src="../images/brend/EuroBlock.svg" alt="">
      <img src="../images/brend/Perfekta.svg" alt="">
      <img src="../images/brend/Mstera.svg" alt="">
  </div>
  <div class="Row">
    <img src="../images/brend/LCR.svg" alt="">
    <img src="../images/brend/Galen.svg" alt="">
    <img src="../images/brend/Recke.svg" alt="">
    <img src="../images/brend/ModFormat.svg" alt="">
    <img src="../images/brend/Decra.svg" alt="">
    <img src="../images/brend/Engels.svg" alt="">
  </div>
</div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.brands-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;]
  margin: 0 20px;
}
.container img{
  width: 184px;
  height: 124px;
}
.container{
  max-width: 1200px;
  width: 100%;
}
.RowFirst h1{
  font-size: 32px;
  color: #2F323A;
}
.all-sales {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #3CC6F1;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.25s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}
.all-sales img{
  width: 6px;
  height: 12px;
}
.all-sales:hover {
  background: #3CC6F1;
  color: #ffffff;
  text-decoration: none;
}
.all-sales:active {
  background: #2F323A;
  color: #ffffff;
  text-decoration: none;
}

.all-sales img {
  width: 18px;
  height: 18px;
  filter: brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(1000%) hue-rotate(200deg);
}

.all-sales:hover img {
  filter: brightness(0) saturate(100%) invert(100%);
}
.RowFirst{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.Row{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

</style>