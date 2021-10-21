<template>
  <button @click="goHome" class="go-home">
    На главную
  </button>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.go-home {
  padding: 0.15rem 0.4rem;
  background: $color-gr;
  border-radius: 0.2rem;
}
</style>