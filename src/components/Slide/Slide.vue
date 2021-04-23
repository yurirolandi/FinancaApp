<template>
  <v-sheet class="mx-auto">
    <v-slide-group v-model="model" class="pr-4 pl-4" center-active>
      <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? 'card' : 'card-active'"
          class="ma-2"
          height="80"
          width="80"
          @click="toggle"
        >
          Ação de algo
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script>
export default {
  name: "Slide",
  components: {},
  data: () => ({
    model: null,
  }),
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #00000096 !important;
  color: white !important;
  padding: 0.4rem;
}
.card-active {
  background-color: #00000033 !important;
  padding: 0.4rem;
  color: white !important;
}
</style>
