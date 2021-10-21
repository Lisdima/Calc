<template>
  <v-row>
    <v-col cols="12" md="12" sm="12" xs="12">
      <v-text-field v-model="currentParams.minSum" label="Минимальная сумма займа, руб" required></v-text-field>
    </v-col>

    <v-col cols="12" md="12" sm="12" xs="12">
      <v-text-field v-model="currentParams.maxSum" label="Максимальная сумма займа, руб" required></v-text-field>
    </v-col>

    <v-col cols="12" md="12" sm="12" xs="12">
      <v-text-field v-model="currentParams.minTime" label="Минимальный срок займа, мес" required></v-text-field>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12">
      <v-text-field v-model="currentParams.maxTime" label="Максимальный срок займа, мес" required></v-text-field>
    </v-col>
    <v-col cols="12" md="12" sm="12" xs="12">
      <v-text-field v-model="currentParams.percent" label="Процентная ставка ежемесячного платежа, %" required></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    inputsValues: { type: Object },
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  computed: {
    currentParams: {
      get() {
        return this.inputsValues;
      },
      set(value) {
        this.$emit("updateInputsValues", value);
      },
    },
  },
  methods: {
  },
};
</script>
