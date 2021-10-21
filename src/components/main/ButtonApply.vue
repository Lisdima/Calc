<template>
  <div>
    <button @click="snackbar = true" class="btn-apply">Подать заявку</button>
    <v-snackbar v-model="snackbar" :timeout="timeout" top :max-height="height" color="success" >
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      text: "Заявка успешно отправлена",
      timeout: 2000,
      height: 10
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.btn-apply {
  background: $color-component-green;
  width: 100%;
  color: #ffffff;
  padding: 0.6rem 0;
  font-size: 0.8rem;
  font-weight: 300;
  border-radius: 4px;
}
</style>
