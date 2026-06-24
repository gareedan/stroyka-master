<script setup>
</script>

<template>
  <div class="allNavigation">
    <div class="nav_up">
      <div class="nav_upBtn">
        <img src="../src/images/geo_icon.svg" alt="">
        <a> Москва</a>
      </div>

      <div class="nav_upText">
        <router-link to="/Brend">Бренды</router-link>
        <router-link to="/Delivery">Доставка</router-link>
        <router-link to="/Refund">Возврат</router-link>
        <router-link to="/Document">Документация</router-link>
        <router-link to="/Contact">Контакты </router-link>
      </div>
    </div>

    <div class="nav_between">
      <router-link to="/"><img src="../src/images/Logo.svg" alt=""></router-link>

      <div class="between_right">
        <router-link to="/Catalogue">
        <button class="cat_btn">
          <img src="../src/images/cataloge_icon.svg" alt="">
          <a> Каталог</a>
        </button></router-link>

        <form class="form">
          <input type="text" placeholder="Поиск">
          <button type="submit"></button>
        </form>

        <div class="nav_betweenBlock">
          <img src="../src/images/profile_icon.svg" alt="">
          <a>Профиль</a>
        </div>
        <div class="nav_betweenBlock">
          <img src="../src/images/box_icon.svg" alt="">
          <a>Заказы</a>
        </div>
        <div class="nav_betweenBlock">
          <img src="../src/images/shop_icon.svg" alt="">
          <a>Профиль</a>
        </div>
      </div>
    </div>

    <div class="nav_down">
      <a>Акции</a>
      <a>Строительные материалы</a>
      <a>Керамическая плитка</a>
      <a>Краски</a>
      <a>Сантехника</a>
      <a>Напольные покрытия</a>
      <a>Инструменты</a>
      <a>Обои</a>
      <a>Окна</a>
    </div>
  </div>

  <router-view />

  <footer>
    <div class="footer_up">
      <div class="column">
        <div class="logo"><img src="../src/images/LogoLight.svg" alt=""></div>
        <div class="footerBlock"><img src="../src/images/mail_icon.svg" alt=""> <a>info@stroykastore.ru</a> </div>
        <div class="footerBlock"><img src="../src/images/geo_iconLight.svg" alt=""> <a>Москва, ул.Камушкина 10</a> </div>
      </div>
      <div class="column">
        <a>Личный кабинет</a>
        <a>Заказы</a>
        <a>Избранное</a>
        <a>Корзина</a>
      </div>
      <div class="column">
        <a>Каталог</a>
        <a>Акции</a>
        <router-link to="/Brend">Бренды</router-link>
        <router-link to="/Contact">Контакты</router-link>
      </div>
      <div class="column">
        <a>Стать продавцом</a>
        <router-link to="/Delivery">Доставка</router-link>
        <router-link to="/Refund">Возврат</router-link>
        <router-link to="/Document">Документация</router-link>
      </div>
    </div>
    <div class="footer_down">
      <a>© СтройкаСтор</a>
      <img src="../src/images/card.svg" alt="">
      <a>Cделано в KRUGLOV STUDIO</a>
    </div>
  </footer>
</template>

<style>
@font-face {
  font-family: 'Manrope';
  src: url('assets/font/Manrope-Regular.ttf');
}

* {
  max-width: 1920px; /* Изменено с 1440px на 1920px */
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.allNavigation {
  display: flex;
  flex-direction: column;
}

.nav_upBtn {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  color: #5D6066;
  font-size: 15px;
  padding-bottom: 10px;
}

.nav_upBtn img {
  width: 15px;
  height: 18px;
}

.nav_upText {
  display: flex;
  flex-direction: row;
  gap: 32px; /* Увеличено для лучшего распределения на 1920px */
  color: #5D6066;
  text-decoration: none;
}

.nav_up a {
  text-decoration: none;
  color: #5D6066;
}

.nav_up a:hover {
  filter: brightness(90%);
}

.nav_up {
  background-color: #F6F6F6;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 800px; /* Увеличено с 620px для 1920px */
  padding: 10px 40px 0 40px; /* Добавлены боковые отступы */
  color: #5D6066;
}

.nav_between img {
  width: 117px;
  height: 48px;
}

form {
  position: relative;
  width: 544px; /* Увеличено с 444px для 1920px */
  margin: 0 auto;
  background: #F6F6F6;
  border-radius: 10px;
  max-height: 48px;
  align-items: center;
  color: #8B8D92;
}

.form input,
.form button {
  border: none;
  outline: none;
  background: transparent;
}

.form input {
  width: 96%;
  height: 42px;
  padding-left: 15px;
  color: #8B8D92;
}

.form button {
  height: 42px;
  width: 42px;
  top: 0;
  right: 0;
  cursor: pointer;
  content: url("@/images/search_icon.svg");
}

.nav_between {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 250px;
  padding: 20px 40px;
  border-bottom: 2px solid #F6F6F6;
}

.cat_btn{
  background-color: #3CC6F1;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  width: 144px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 10px;
  max-height: 48px ;
  cursor: pointer;
  border: none;
  padding: 10px;
}
.cat_btn img {
  width: 24px;
  height: 24px;
}
.cat_btn:hover {
  filter: brightness(70%);
  background-color: #2F323A;
}

.nav_betweenBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #2F323A;
  cursor: pointer;
  align-items: center;
}

.nav_betweenBlock img {
  width: 24px;
  height: 24px;
}

.nav_betweenBlock:hover {
  filter: brightness(70%);
}

.between_right {
  display: flex;
  flex-direction: row;
  gap: 30px; /* Увеличено с 20px */
  align-items: center;
}

.nav_down {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #454950;
  gap: 48px; /* Увеличено с 30px для 1920px */
  font-size: 16px;
  padding: 15px 40px; /* Добавлены боковые отступы */
  border-bottom: 2px solid #F6F6F6;
}

footer {
  background-color: #171B24;
  color: #E8E9EA;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Увеличено с 12px */
}

.logo {
  width: 98px;
  height: 48px;
}

.footer_up {
  padding: 50px 40px; /* Увеличено и добавлены боковые отступы */
  display: flex;
  flex-direction: row;
  gap: 200px; /* Увеличено с 150px */
  align-items: flex-start; /* Выравнивание по верхнему краю для лучшего вида */
  justify-content: center;
}

footer a {
  text-decoration: none;
  color: #E8E9EA;
  font-size: 16px;
}

.footerBlock {
  gap: 12px; /* Увеличено с 10px */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
}

.footer_down {
  border-top: 2px solid #5D6066;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #5D6066;
  gap: 200px; /* Увеличено с 168px */
  width: 70%; /* Немного увеличено для 1920px */
  margin: 0 auto;
}

.footer_down img {
  width: 268px;
  height: 36px;
}
</style>