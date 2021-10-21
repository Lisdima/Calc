<template>
  <button @click="goToSettings" class="settings">
    Настройки
  </button>
</template>

<script>
export default {
  methods: {
    goToSettings() {
      this.$router.push("/settings");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.settings {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  padding: 0.15rem 0.4rem;
  background: $color-gr;
  border-radius: 0.2rem;
  @media (max-width: $width-page-1100) {
    position: relative;
    max-width: 200px;
    transform: translateY(0);
    height: fit-content;
  }
}
</style>
