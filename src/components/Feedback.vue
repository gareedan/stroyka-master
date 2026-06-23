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
            v-for="(reviewGroup, index) in groupedReviews"
            :key="index"
            class="review-slide"
        >
          <div
              v-for="item in reviewGroup"
              :key="item.id"
              class="review-card"
          >
            <div class="review-author">
              <span class="author-icon">
                <img src="@/images/Avatars.svg" alt="avatar" />
              </span>
              <div class="author-info">
                <span class="author-name">{{ item.name }}</span>
                <span class="review-date">{{ item.date }}</span>
              </div>
            </div>
            <p class="review-text">{{ item.text }}</p>
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
  font-size: 32px;
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
  border-radius: 12px;
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
}

.review-card {
  background: #ffffff;
  border: 1px solid #e8e9ea;
  border-radius: 12px;
  padding: 32px 34px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s ease;
  width: 100%;
}

.review-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
}

.review-author {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
  flex-shrink: 0;
}

.author-icon {
  width: 56px;
  height: 56px;
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
  font-size: 19px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 2px;
}

.review-date {
  font-size: 14px;
  color: #8b8d92;
}

.review-text {
  font-size: 15px;
  line-height: 1.8;
  color: #2d2d44;
  margin: 0;
  flex: 1;
  overflow-y: auto;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* Стили для скролла внутри карточки */
.review-text::-webkit-scrollbar {
  width: 4px;
}

.review-text::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.review-text::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}
</style>