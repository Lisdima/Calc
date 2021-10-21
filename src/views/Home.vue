<template>
  <v-card id="card">
    <div class="main-page">
      <div class="main-page__title">
        <h2 class="title-text">Калькулятор займа под ПТС</h2>
        <BtnSettings />
      </div>
      <div class="main-page__data">
        <div class="data__input" cols="12" md="12">
          <div class="main-page__type-pay">
            <p class="type-pay__value">Тип платежа</p>
            <TabsPayment @changedItem="currentPayment" />
          </div>
          <ScrollComponents @currentSliderSum="giveResult" @currentSliderTime="giveResultAnnuity" style="marginTop: 2rem" />
          <div class="data__input-note note">
            Условия выдачи займа могут отличаться, исходя из анализа документов и состояния вашего автомабиля
          </div>
        </div>
        <div class="data__result">
          <div class="data__result-computed">
            <div class="data__result-rate rate">
              <div class="rate-name param-text">Ставка</div>
              <div class="rate-value param-value">{{ percent }}%</div>
            </div>
            <div class="data__result-rate payment">
              <div class="payment-name param-text">Ежемясячный платеж</div>
              <div v-if="checkDiff" class="payment-value param-value">{{ diffentPayment }} Р</div>
              <div v-else class="payment-value param-value">{{ annuityPayment }} Р</div>
            </div>
          </div>
          <ButtonApply />
          <div class="data__result-note note">
            Расчет займа предварительный
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import BtnSettings from "@/components/main/ButtonSettings.vue";
import TabsPayment from "@/components/main/TabsTypeOfPayment.vue";
import ScrollComponents from "@/components/main/ScrollComponents.vue";
import ButtonApply from "@/components/main/ButtonApply.vue";

export default {
  name: "Home",
  data() {
    return {
      percent: 2.7,
      sum: null,
      month: null,
      checkDiff: true,
      sliderSum: null,
      sliderTime: null,
    };
  },
  mounted() {
    if (localStorage.percent) {
      this.percent = localStorage.percent;
    }
  },
  methods: {
    giveResult(choiseSum) {
      this.sum = choiseSum;
    },
    giveResultAnnuity(choiseMonths) {
      this.month = choiseMonths;
    },
    currentPayment(value) {
      value === "differentiated" ? (this.checkDiff = true) : (this.checkDiff = false);
    },
  },
  components: { BtnSettings, TabsPayment, ScrollComponents, ButtonApply },
  computed: {
    diffentPayment() {
      return Math.round((this.percent / 100) * this.sum);
    },
    annuityPayment() {
      return Math.round(((this.percent / 100) * Math.pow(1 + this.percent / 100, this.month) * this.sum) / (Math.pow(1 + this.percent / 100, this.month) - 1));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
#card {
  padding: 2rem 3.5rem;
  margin-top: 2rem;
  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
}
.main-page {
  &__title {
    position: relative;
    @media (max-width: $width-page-1100) {
      display: flex;
      justify-content: space-between;
    }
    @media (max-width: 960px) {
      flex-direction: column;
    }
    .title-text {
      font-size: 1.6rem;
      @media (max-width: 600px) {
        text-align: center;
      }
    }
  }
  &__type-pay {
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
      flex-direction: column;
    }
    .type-pay__value {
      @media (max-width: 600px) {
        text-align: center;
      }
    }
  }
  &__data {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    @media (max-width: $width-page-1100) {
      flex-direction: column;
    }
    .data__input {
      width: 60%;
      @media (max-width: $width-page-1100) {
        width: 100%;
      }
    }
    .data__result {
      width: 30%;
      font-size: 0.6rem;
      color: $color-gr-1;
      @media (max-width: $width-page-1100) {
        width: 100%;
        margin-top: 2rem;
      }
      &-computed {
        @media (max-width: $width-page-1100) {
          display: flex;
          justify-content: space-between;
        }
        @media (max-width: 430px) {
          flex-direction: column;
        }
      }
      .data__result-rate {
        margin-bottom: 0.6rem;
      }
      .param-value {
        font-size: 2.5rem;
        color: $color-text-black;
        font-weight: 500;
      }
      .data__result-note {
        margin-top: 1.4rem;
      }
    }
    .note {
      color: $color-gr-1;
      font-size: 0.58rem;
    }
  }
}
</style>
