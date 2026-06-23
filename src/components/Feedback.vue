<script>
import reviewsData from '../stores/reviews.json'

export default {
  name: "ReviewsSlider",
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 2,
      reviews: reviewsData.reviews || reviewsData
    }
  },
  computed: {
    slidesCount() {
      return Math.ceil(this.reviews.length / this.slidesPerView)
    },
    groupedReviews() {
      const groups = []
      for (let i = 0; i < this.reviews.length; i += this.slidesPerView) {
        groups.push(this.reviews.slice(i, i + this.slidesPerView))
      }
      return groups
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.slidesCount - 1) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    goToSlide(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    // Автоматическое переключение слайдов
    setInterval(() => {
      if (this.currentSlide < this.slidesCount - 1) {
        this.currentSlide++
      } else {
        this.currentSlide = 0
      }
    }, 8000)
  }
}
</script>

<template>
  <div class="reviews-slider">
    <div class="reviews-header">
      <h2>Отзывы</h2>
      <div class="slider-controls">
        <button
            class="slide-btn prev"
            @click="prevSlide"
            :disabled="currentSlide === 0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button
            class="slide-btn next"
            @click="nextSlide"
            :disabled="currentSlide === slidesCount - 1"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="slider-container">
      <div
          class="slider-track"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
            v-for="(review, index) in groupedReviews"
            :key="index"
            class="review-slide"
        >
          <div
              v-for="item in review"
              :key="item.id"
              class="review-card"
          >
            <div class="review-author">
              <span class="author-icon">
                <img src="@/images/Avatars.svg" alt="">
              </span>
              <div class="author-info">
                <span class="author-name">{{ item.name }}</span>
              </div>
            </div>
            <p class="review-text">{{ item.text }}</p>
            <span class="review-date">{{ item.date }}</span>
          </div>
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

.reviews-slider {
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: 40px auto 0;
  padding: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.reviews-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  letter-spacing: -0.3px;
}

.slider-controls {
  display: flex;
  gap: 12px;
}

.slide-btn {
  width: 44px;
  height: 44px;
  border: 1px solid #e8e9ea;
  border-radius: 50%;
  background: #ffffff;
  color: #1a1a2e;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.slide-btn:hover:not(:disabled) {
  background: #2d7aff;
  color: #ffffff;
  border-color: #2d7aff;
}

.slide-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.slide-btn svg {
  width: 20px;
  height: 20px;
}

.slider-container {
  overflow: hidden;
  margin-bottom: 20px;
  max-width: 60%;
  height: 80% ;


}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.review-slide {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 10px;
}

.review-card {
  background: #F6F6F6;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  padding: 24px;
  height: 100%;
  transition: box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
}

.review-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
}

.review-author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
}

.author-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #2d7aff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}

.author-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-size: 18px;
  font-weight: 600;
  color: #2F323A;
}

.review-date {
  font-size: 13px;
  color: #8b8d92;
  margin-top: 2px;
}

.review-text {
  font-size: 16px;
  line-height: 1.6;
  color: #2F323A;
  margin: 0;
  flex: 1;
}

</style>