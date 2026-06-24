<script setup>
import sellersData from '@/stores/sellers.json'


const sellers = sellersData.sellers || sellersData || []
</script>

<template>
  <div class="sellers-page">
    <div class="sellers-grid">
      <a
          v-for="seller in sellers"
          :key="seller"
          href="#"
          class="seller-item"
      >
        {{ seller }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.sellers-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sellers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.seller-item {
  padding: 5px 10px;
  background: #f5f6f8;
  border-radius: 15px;
  text-decoration: none;
  color: #8b8d92;
  font-size: 18px;
  text-align: center;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.seller-item:hover {
  background: #3CC6F1;
  color: white;
}

.seller-item:active {
  background: #1a1a2e;
  color: white;
}
</style>