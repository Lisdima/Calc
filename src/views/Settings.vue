<template>
  <div id="settings">
    <ButtonHome />
    <Inputs :inputsValues="inputsValues" @updateInputsValues="updateInputsValues" style="marginTop: 1rem" />
    <ButtonSaveData @buttonClick="saveParams" />
  </div>
</template>

<script>
import Inputs from "@/components/settings/Inputs.vue";
import ButtonHome from "@/components/settings/ButtonHome.vue";
import ButtonSaveData from "@/components/settings/ButtonSaveParams.vue";

export default {
  data() {
    return {
      inputsValues: {
        minSum: "",
        maxSum: "",
        minTime: "",
        maxTime: "",
        percent: "",
      },
    };
  },
  mounted() {
    this.inputsValues.minSum = localStorage.minSum;
    this.inputsValues.maxSum = localStorage.maxSum;
    this.inputsValues.minTime = localStorage.minTime;
    this.inputsValues.maxTime = localStorage.maxTime;
    this.inputsValues.percent = localStorage.percent;
    console.log(localStorage);
  },
  methods: {
    updateInputsValues(e) {
      Object.keys(e).forEach((key) => {
        this.inputsValues[key] = e[key];
      });
    },
    saveParams() {
      localStorage.minSum = this.inputsValues.minSum;
      localStorage.maxSum = this.inputsValues.maxSum;
      localStorage.minTime = this.inputsValues.minTime;
      localStorage.maxTime = this.inputsValues.maxTime;
      localStorage.percent = this.inputsValues.percent;
      this.$router.push("/");
    },
  },
  components: { Inputs, ButtonHome, ButtonSaveData },
};
</script>

<style lang="scss" scoped>
#settings {
  padding-top: 1rem;
}
</style>
