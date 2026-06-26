<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.async = true
  script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A098cdf1a3fa95cb1a4c3dddad1a5706843710c22ef92ef2ba7c6e082d87fc00a&amp;width=1160&amp;height=340&amp;lang=ru_RU&amp;scroll=true'
  document.getElementById('yandex-map-container').appendChild(script)
})
</script>

<template>
  <div class="map-wrapper">
    <div id="yandex-map-container" class="map-container"></div>
  </div>
</template>

<style scoped>
.map-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 340px;
  padding: 20px 0;
}

.map-container {
  width: 80%;
  max-width: 1160px;
  height: 340px;
}
</style>