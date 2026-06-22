<script >
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
        <div class="slide"><img src="../images/SliderFirst.svg" alt=""></div>
        <div class="slide"><img src="../images/SliderSecond.svg" alt=""></div>
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F6F6F6;
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
  will-change: transform;
}

.slide {
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Кнопки управления */
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
  backdrop-filter: blur(8px);
border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: blue;
  outline: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.controls button:hover {
  background: lightgray;
}
.controls button:active {
  transform: scale(0.95);
  filter: contrast(100%);
}
</style>