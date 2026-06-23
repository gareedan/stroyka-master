<script>
import Slider from '../components/Slider.vue'
import SalesBlock from '../components/SalesBlock.vue'
import Popular from '../components/Popular.vue'
import PopularProducts from "@/components/PopularProducts.vue";
import Brend from "@/components/PopularBrend.vue";
import FeedBack from "@/components/Feedback.vue";
import Company from "@/components/Company.vue";

export default {
  components: {
    Slider,
    SalesBlock,
    Popular,
    PopularProducts,
    Brend,
    FeedBack,
    Company,
  }
}
</script>

<template>
  <div class="home">
    <Slider />
    <SalesBlock />
    <Popular />
    <PopularProducts/>
    <Brend />
    <FeedBack />
    <Company />
  </div>

</template>

<style scoped>
</style>