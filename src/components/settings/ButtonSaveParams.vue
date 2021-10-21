<template>
  <button @click="saveParams" class="btn-save-data">Сохранить данные</button>
</template>

<script>
export default {
  methods: {
    saveParams() {
      this.$emit("buttonClick");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.btn-save-data {
  background: $color-component-green;
  width: 100%;
  max-width: 10rem;
  color: #ffffff;
  padding: 0.6rem 0;
  font-size: 0.8rem;
  font-weight: 300;
  border-radius: 4px;
  margin-top: 1rem;
}
</style>
