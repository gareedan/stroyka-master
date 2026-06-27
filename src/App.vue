<script>
import city from "@/components/ComponentsMini/city.vue";

export default {
  components: {
    city,
  },
  data() {
    return {
      burgerOpen: false,
    };
  },
};
</script>

<template>
  <div class="allNavigation">
    <div class="nav_up">
      <div class="nav_upBtn">
        <city/>
      </div>

      <div class="nav_upText">
        <router-link to="/Brend">Бренды</router-link>
        <router-link to="/Delivery">Доставка</router-link>
        <router-link to="/Refund">Возврат</router-link>
        <router-link to="/Document">Документация</router-link>
        <router-link to="/Сontact">Контакты </router-link>
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
        <router-link to="/Cart"> <div class="nav_betweenBlock">
          <img src="../src/images/shop_icon.svg" alt="">
          <a>Корзина</a>
        </div></router-link>
      </div>
    </div>

    <div class="nav_down">
      <router-link to="/"> <a>Акции</a></router-link>
      <router-link to="/Catalogue"><a>Строительные материалы</a></router-link>
      <router-link to="/Catalogue"><a>Керамическая плитка</a></router-link>
      <router-link to="/Catalogue"><a>Краски</a></router-link>
      <router-link to="/Catalogue"><a>Сантехника</a></router-link>
      <router-link to="/Catalogue"><a>Напольные покрытия</a></router-link>
      <router-link to="/Catalogue"><a>Инструменты</a></router-link>
      <router-link to="/Catalogue"><a>Обои</a></router-link>
      <router-link to="/Catalogue"><a>Окна</a></router-link>
    </div>
  </div>

  <div class="mobileNav">

    <div class="mobileHeader">

      <button class="burger" @click="burgerOpen = !burgerOpen">
        <img src="@/images/cataloge_icon.svg" alt="">
      </button>

      <router-link to="/">
        <img class="mobileLogo" src="@/images/Logo.svg" alt="">
      </router-link>

      <router-link to="/Cart">
        <img class="cartIcon" src="@/images/shop_icon.svg" alt="">
      </router-link>

    </div>

    <form class="mobileSearch">
      <input type="text" placeholder="Поиск">
      <button></button>
    </form>

    <transition name="slide">

      <div
          class="mobileMenu"
          v-if="burgerOpen"
      >

        <router-link to="/Catalogue">
          <button class="mobileCatalog">
            <img src="@/images/cataloge_icon.svg">
            Каталог
          </button>
        </router-link>

        <div class="mobileBtn">
          <img src="@/images/profile_icon.svg">
          Профиль
        </div>

        <div class="mobileBtn">
          <img src="@/images/box_icon.svg">
          Заказы
        </div>

        <div class="mobileCity">
          <city/>
        </div>

        <router-link to="/">Акции</router-link>
        <router-link to="/Catalogue">Строительные материалы</router-link>
        <router-link to="/Catalogue">Керамическая плитка</router-link>
        <router-link to="/Catalogue">Краски</router-link>
        <router-link to="/Catalogue">Сантехника</router-link>
        <router-link to="/Catalogue">Напольные покрытия</router-link>
        <router-link to="/Catalogue">Инструменты</router-link>
        <router-link to="/Catalogue">Обои</router-link>
        <router-link to="/Catalogue">Окна</router-link>

        <hr>

        <router-link to="/Brend">Бренды</router-link>
        <router-link to="/Delivery">Доставка</router-link>
        <router-link to="/Refund">Возврат</router-link>
        <router-link to="/Document">Документация</router-link>
        <router-link to="/Сontact">Контакты</router-link>

      </div>

    </transition>

  </div>
  <router-view />

  <footer>
    <div class="footer_grid">
      <!-- Логотип и контакты -->
      <div class="footer_col">
        <div class="logo"><img src="../src/images/LogoLight.svg" alt=""></div>
        <div class="footerBlock"><img src="../src/images/mail_icon.svg" alt=""> <a>info@stroykastore.ru</a></div>
        <div class="footerBlock"><img src="../src/images/geo_iconLight.svg" alt=""> <a>Москва, ул.Камушкина 10</a></div>
      </div>

      <!-- Десктоп колонки (скрыты на мобиле) -->
      <div class="footer_col">
        <a>Личный кабинет</a>
        <a>Заказы</a>
        <a>Избранное</a>
        <router-link to="/Cart"><a>Корзина</a></router-link>
      </div>
      <div class="footer_col">
        <router-link to="/Catalogue"><a>Каталог</a></router-link>
        <router-link to="/"><a>Акции</a></router-link>
        <router-link to="/Brend">Бренды</router-link>
        <router-link to="/Сontact">Контакты</router-link>
      </div>
      <div class="footer_col">
        <a>Стать продавцом</a>
        <router-link to="/Delivery">Доставка</router-link>
        <router-link to="/Refund">Возврат</router-link>
        <router-link to="/Document">Документация</router-link>
      </div>
    </div>

    <!-- Мобильная сетка ссылок 2 колонки -->
    <div class="footer_links_mobile" style="display: none; padding: 0 20px 28px; border-bottom: 1px solid #2e3340;">
      <a>Личный кабинет</a>
      <router-link to="/Brend">Бренды</router-link>
      <a>Заказы</a>
      <router-link to="/Сontact">Контакты</router-link>
      <a>Избранное</a>
      <a>Стать продавцом</a>
      <router-link to="/Cart"><a>Корзина</a></router-link>
      <router-link to="/Delivery">Доставка</router-link>
      <router-link to="/Catalogue"><a>Каталог</a></router-link>
      <router-link to="/Refund">Возврат</router-link>
      <router-link to="/"><a>Акции</a></router-link>
      <router-link to="/Document">Документация</router-link>
    </div>

    <div class="footer_down">
      <img src="../src/images/card.svg" alt="">
      <a>© СтройкаСтор</a>
      <a>Сделано в KRUGLOV STUDIO</a>
    </div>
  </footer>
</template>

<style>
@font-face {
  font-family: 'Manrope';
  src: url('assets/font/Manrope-Regular.ttf');
}

* {
  max-width: 100%;
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
  gap: 32px;
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
  gap: 800px;
  padding: 10px 40px 0 40px;
  color: #5D6066;
}

.nav_between img {
  width: 117px;
  height: 48px;
}

form {
  position: relative;
  width: 544px;
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
  gap: 30px;
  align-items: center;
}

.nav_down {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #454950;
  gap: 48px;
  font-size: 16px;
  padding: 15px 40px;
  border-bottom: 2px solid #F6F6F6;
}

/* --- ФУТЕР: ГРИД НА 4 КОЛОНКИ --- */
footer {
  background-color: #171B24;
  color: #E8E9EA;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Четыре равные колонки */
  gap: 40px;
  width: 70%;
  max-width: 1200px;
  padding: 50px 0;
  margin: 0 auto;
}

.footer_col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer_col a {
  text-decoration: none;
  color: #E8E9EA;
  font-size: 16px;
}

.logo {
  width: 98px;
  height: 48px;
}

.footerBlock {
  gap: 12px;
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
  gap: 200px;
  width: 70%;
  margin: 0 auto;
}

.footer_down img {
  width: 268px;
  height: 36px;
}
/* --- КОНЕЦ ФУТЕРА --- */

.nav_down a{
  color: #454950;
}
.mobileNav{
  display:none;
}
@media (max-width:375px){
  .allNavigation{
    display:none;
  }
  .mobileNav{
    display:block;
    position:relative;
    width:100%;
    background:#fff;
  }
  .mobileHeader{
    height:64px;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:20px;
    border-bottom:1px solid #F3F3F3;
  }
  .burger{
    width:32px;
    height:32px;
    border:none;
    background:transparent;
  }
  .burger img{
    width:22px;
    filter: brightness(0);
  }
  .mobileLogo{
    width:98px;
  }
  .cartIcon{
    width:24px;
  }
  .mobileSearch{
    width: calc(100% - 32px);
    margin: 12px 16px;
    background: #F6F6F6;
    border-radius: 8px;
    display: flex;
    align-items: center;
    height: 44px;
  }
  .mobileSearch input{
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 12px;
    font-size: 14px;
  }
  .mobileSearch button{
    width: 44px;
    height: 44px;
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .mobileMenu{
    position:absolute;
    top:60px;
    left:0;
    width:250px;
    height:calc(100vh - 120px);
    background:#fff;
    padding:12px 16px;
    overflow:auto;
    z-index:999;
  }

  .mobileCatalog{
    width:100%;
    height:48px;
    border:none;
    border-radius:8px;
    background:#3CC6F1;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    margin:18px 0;
  }
  .mobileCatalog img{
    width:22px;
  }
  .mobileBtn{
    height:44px;
    border:1px solid #E8E8E8;
    border-radius:22px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    margin-bottom:12px;
    color:#5D6066;
  }
  .mobileBtn img{
    width:22px;
  }
  .mobileCity{
    margin:18px 0;
    color:#5D6066;
  }
  .mobileMenu a{
    display:block;
    color:#454950;
    padding:10px 0;
    font-size:15px;
  }
  .mobileMenu hr{
    margin:16px 0;
    border:none;
    border-top:1px solid #E8E8E8;
  }
  footer {
    align-items: stretch;
  }

  .footer_grid {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 28px 20px 0;
    gap: 0;
  }

  /* Первая колонка — логотип и контакты */
  .footer_col:first-child {
    padding-bottom: 24px;
    border-bottom: 1px solid #2e3340;
    margin-bottom: 24px;
  }

  /* Колонки 2, 3, 4 — объединяем в 2-колоночную сетку */
  .footer_col:not(:first-child) {
    display: none;
  }

  .footer_links_mobile {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    gap: 14px 24px;
    padding-bottom: 28px;
    border-bottom: 1px solid #2e3340;
  }

  .footer_links_mobile a {
    color: #E8E9EA;
    font-size: 15px;
    text-decoration: none;
  }

  .footer_down {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    width: 100%;
    padding: 24px 20px;
    border-top: none;
  }

  .footer_down img {
    width: 200px;
    height: auto;
  }
}
</style>