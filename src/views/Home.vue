<template>
  <div class="home">
    <v-sheet class="mx-auto" elevation="8" max-width="800">
      <v-slide-group v-model="model" class="pa-4" center-active show-arrows>
        <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-2"
            height="80"
            width="80"
            @click="toggle"
          >
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    model: null,
  }),
};
</script>
