<script setup>
</script>

<template>
  <div class="about-company">
    <div class="about-container">
      <div class="about-image about-image--desktop">
        <img src="@/images/hand.svg" alt="hand" />
      </div>
      <div class="about-content">
        <h1 class="about-title">О компании</h1>
        <div class="about-image about-image--mobile">
          <img src="@/images/hand.svg" alt="hand" />
        </div>
        <div class="about-text">
          <p>
            В СтройкаСтор вы всегда можете купить все необходимые товары для ремонта дома и дачи.
            Хотите сделать ремонт в квартире? Строите загородный дом? Используйте строительные и
            отделочные материалы из нашего каталога.
          </p>
          <p>
            Быстрая доставка строительных товаров по низким ценам сделает ваши покупки более
            приятными. Ремонт может стоить дешево, если делать его с нами. Для вас всегда в
            наличии более 30 000 товаров для строительства по низким ценам каждый день.
          </p>
          <p>
            СтройкаСтор — это широкий ассортимент товаров для дома и ремонта недорого;
            Возможность заказать строительные и отделочные материалы для дома и дачи.
          </p>
        </div>
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

.about-company {
  max-width: 1400px;
  width: 100%;
  margin: 40px auto 0;
  padding: 0 20px 20px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.about-container {
  display: flex;
  align-items: stretch;
  background: #F6F6F6;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8e9ea;
  width: 100%;
  min-height: 340px;
}


.about-image--desktop {
  flex: 0 0 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.about-image--desktop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Мобильное изображение — скрыто по умолчанию */
.about-image--mobile {
  display: none;
  width: 100%;
  margin-bottom: 20px;
}

.about-image--mobile img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.about-content {
  flex: 1;
  padding: 48px 48px 48px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-title {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
}

.about-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #2d2d44;
  margin-bottom: 16px;
}

.about-text p:last-child {
  margin-bottom: 0;
}


@media (max-width: 480px) {
  .about-company {
    margin: 20px auto 0;
    padding: 0 12px 16px 12px;
  }

  .about-container {
    flex-direction: column;
    min-height: unset;
    border-radius: 12px;
  }


  .about-image--desktop {
    display: none;
  }


  .about-image--mobile {
    display: block;
    width: 50%;
  }

  .about-content {
    padding: 24px 20px;
  }

  .about-title {
    font-size: 22px;
    margin-bottom: 14px;
  }

  .about-image--mobile {
    margin-bottom: 16px;
  }

  .about-text p {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 12px;
  }
}
</style>