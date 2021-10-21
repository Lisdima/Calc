<template>
  <v-radio-group id="radio-buttons" @change="selectedItem" v-model="row" active-class="selected-item" row>
    <v-radio :class="{ active: row === 'differentiated' }" label="Дифференцированный" value="differentiated"></v-radio>
    <v-radio label="Аннуитетный" :class="[{ active: row === 'annuity' }]" style="borderRadius: 0 4px 4px 0" value="annuity"></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  data() {
    return {
      row: "differentiated",
    };
  },
  methods: {
    selectedItem(value) {
      this.$emit("changedItem", value);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
#radio-buttons {
  @media (max-width: 600px) {
    margin: 0.5rem auto 0;
  }
}
.active {
  border: 3px solid $color-component-green !important;
}
.v-application--is-ltr .v-input--selection-controls__input {
  display: none;
}
.v-input--radio-group.v-input--radio-group--row .v-radio {
  margin-right: 0 !important;
  font-size: 0.8rem;
  padding: 5px 15px;
  border-radius: 4px 0 0 4px;
  border: 2px solid $color-gr;
  @media (max-width: 430px) {
    width: 100%;
  }
}
</style>
