<template>
  <div class="sliders">
    <div class="sliders__slider-block block-sum">
      <div class="slider-block__data">
        <p class="slider-block__data-title">Сумма займа</p>
        <p class="slider-block-value">{{ Math.round(sliderSum) }} Р</p>
      </div>
      <v-slider track-color="grey lighten-1" step="0" :height="24" v-model="sliderSum" color="green" class="align-center" :max="maxSum" :min="minSum" hide-details> </v-slider>
      <div class="slider-block__sub-data">
        <p class="slider-block__sub-data-title">От {{ minSum }} Р</p>
        <p class="slider-block__sub-data-value">До {{ maxSum }} Р</p>
      </div>
    </div>
    <div class="sliders__slider-block block-time">
      <div class="slider-block__data">
        <p class="slider-block__data-title">Срок займа</p>
        <p class="slider-block-value">{{ Math.round(sliderTime) }} месяцев</p>
      </div>
      <v-slider track-color="grey lighten-1" height="24" v-model="sliderTime" color="green" class="align-center" :max="maxTime" :min="minTime" hide-details> </v-slider>
      <div class="slider-block__sub-data">
        <p class="slider-block__sub-data-title">От {{ minTime }} месяцев</p>
        <p class="slider-block__sub-data-value">До {{ maxTime }} месяцев</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minSum: 15000,
      maxSum: 1000000,
      minTime: 2,
      maxTime: 12,
      sliderSum: null,
      sliderTime: null,
    };
  },
  mounted() {
    if (localStorage.minSum) {
      this.minSum = localStorage.minSum;
    }
    if (localStorage.maxSum) {
      this.maxSum = localStorage.maxSum;
    }
    if (localStorage.minTime) {
      this.minTime = localStorage.minTime;
    }
    if (localStorage.maxTime) {
      this.maxTime = localStorage.maxTime;
    }
  },
  methods: {},
  watch: {
    sliderSum() {
      this.$emit("currentSliderSum", this.sliderSum);
    },
    sliderTime() {
      this.$emit("currentSliderTime", this.sliderTime);

    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.sliders {
  &__slider-block {
    .slider-block__data {
      display: flex;
      justify-content: space-between;
      padding: 0 1.5rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
      .slider-block__data-title {
      }
    }
    .slider-block__sub-data {
      display: flex;
      justify-content: space-between;
      font-size: 0.6rem;
      color: $color-gr-1;
      margin-top: 0.5rem;
    }
  }
  .block-time {
    margin: 1rem 0;
  }
}
</style>
