<template>
  <v-container>
    <v-card elevation="2">
      <v-card-title class="text-h4"> Finança </v-card-title>
    </v-card>
    <v-card elevation="2" class="mt-5">
      <NotificacaoLista />
    </v-card>
  </v-container>
</template>

<script>
import NotificacaoLista from "../components/Table/NotificacaoLista.vue";

export default {
  name: "Home",
  components: {
    NotificacaoLista,
  },
};
</script>
