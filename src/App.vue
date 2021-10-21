<template>
  <v-app>
    <v-main>
      <div class="my-container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
  }
};
</script>
