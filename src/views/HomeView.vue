<script>
import Slider from '../components/Slider.vue'
import SalesBlock from '../components/SalesBlock.vue'
import Popular from '../components/Popular.vue'

export default {
  components: {
    Slider,
    SalesBlock,
    Popular,
  }
}
</script>

<template>
  <div class="home">
    <Slider />
    <SalesBlock />
    <Popular />
  </div>


</template>

<style scoped>

</style>