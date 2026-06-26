<script>

</script>

<template>
<div class="ALL">
  <h1>Главная → Документация </h1>
    <a>Документация</a>

    <div class="allDocument">
          <div class="DocumentBlock">
            <img src="@/images/catalog/DocumentWTF.svg" alt="">
            <div class="BottomBlock">
            <h1>Оферта «Безопасная сделка»</h1>
            <h2>PDF · 10 МБ</h2>
            <button> <a href="/3%20глава.docx" download>Скачать</a></button></div>
          </div>

          <div class="DocumentBlock">
            <img src="@/images/catalog/DocumentWTF.svg" alt="">
            <div class="BottomBlock">
            <h1>Оферта «Безопасная сделка»</h1>
            <h2>PDF · 10 МБ</h2>
            <button> <a href="/3%20глава.docx" download>Скачать</a></button></div>
          </div>

          <div class="DocumentBlock">
            <img src="@/images/catalog/DocumentWTF.svg" alt="">
            <div class="BottomBlock">
            <h1>Оферта «Безопасная сделка»</h1>
            <h2>PDF · 10 МБ</h2>
            <button > <a href="/3%20глава.docx" download>Скачать</a></button></div>
          </div>
    </div>

</div>
</template>

<style scoped>
*{
  max-width: 100%;
  text-decoration: none;
  margin: 0 auto;
  padding: 0;
  align-items: center;

}
.ALL{
  width: 80%;
  padding: 60px 40px;
}
.ALL h1{
  color: #454950;
  font-size: 16px;
  font-weight: 500;
}
.ALL a{
  color: #171B24;
  font-size: 48px;
  font-weight: 700;
}
.DocumentBlock{
  border: 1px solid #e8e9ea;
  max-width: 30%;
  border-radius: 10px;
}
.DocumentBlock img{
  border-radius: 10px;
}
.BottomBlock{
  background: white;
  padding: 10px;
}
.BottomBlock h1{
  font-size: 18px;
  font-weight: 500;
  color: #2F323A;
}
.BottomBlock h2{
  font-size: 16px;
  font-weight: 500;
  color: #2F323A;
  padding-bottom: 20px;
}
.allDocument{
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.BottomBlock button{
  color: white;
  background: #3CC6F1 ;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 12px 170px;
}
.BottomBlock button a{
  color: white;
  font-size: 20px;
  font-weight: 500;
}
</style>