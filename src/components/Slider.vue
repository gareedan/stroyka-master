<script>
export default {
  data() {
    return {
      current: 0,
      slidesCount: 2
    };
  },
  methods: {
    nextSlide() {
      if (this.current < this.slidesCount - 1) {
        this.current++;
      } else {
        this.current = 0;
      }
    },
    prevSlide() {
      if (this.current > 0) {
        this.current--;
      } else {
        this.current = this.slidesCount - 1;
      }
    }
  }
};
</script>

<template>
  <div class="HomeSlider">
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${current * 100}%)` }">


        <div class="slide">
          <div class="slide-content">
            <span class="tag">Специальные предложения</span>
            <h2>на строительные материалы <br>и товары для ремонта</h2>
            <button>Подробнее</button>
          </div>
          <div class="slide-image">
            <img src="../images/People.svg" alt="People">
          </div>
        </div>


        <div class="slide">
          <div class="slide-content">
            <span class="tag">Распродажа инструментов</span>
            <h2>«СтройкаСтор» стремится сделать условия покупки<br>
              максимально выгодными для каждого покупателя, поэтому <br>
              на сайте регулярно появляются товары со скидкой</h2>
            <button>Подробнее</button>
          </div>
          <div class="slide-image">
            <img src="../images/Plumbing-Tools.png" alt="Plumbing Tools">
          </div>
        </div>

      </div>

      <div class="controls">
        <button class="prev-btn" @click="prevSlide">
          <img src="../images/past.svg" alt="">
        </button>
        <button class="next-btn" @click="nextSlide">
          <img src="../images/next.svg" alt="">
        </button>
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

.HomeSlider {
  width: 100%;
  max-width: 1320px;
  height: 420px;
  margin: 40px auto;
  background: #F6F6F6;
  border-radius: 10px;
  overflow: hidden;
}

.slider {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  padding: 40px 80px;
  background: #F6F6F6;
}

.slide-content {
  max-width: 400px;
  flex-shrink: 0;
}

.tag {
  display: inline-block;
  font-size: 48px;
  font-weight: 600;
  color: #171B24;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
}

.slide-content h2 {
  font-size: 20px;
  font-weight: 500;
  color: #8b8d92;
  margin-bottom: 30px;
  line-height: 1.5;
}

.slide-content h2 br {
  display: block;
}

.slide-content button {
  background: #3CC6F1;
  color: #fff;
  border: none;
  padding: 14px 45px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.slide-content button:hover {
  background: #2d7aff;
}

.slide-content button:active {
  background: #171B24;
}



.slide-image img {
  width: 100%;
  height: 100%;
}
.slide-imageSecond img {
  width: 100%;
  height: 100%;

}

.controls {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 12px;
  z-index: 10;
}

.controls button {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.controls button:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}

.controls button:active {
  transform: scale(0.95);
}

.controls button img {
  width: 20px;
  height: 20px;
}

</style>