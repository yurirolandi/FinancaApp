<template>
  <v-container>
    <v-card class="d-flex align-center" elevation="2">
      <v-btn to="/month" outlined class="mx-2" small fab color="primary">
        <v-icon dark> mdi-keyboard-backspace </v-icon>
      </v-btn>
      <v-card-title class="text-h5"> Adicionar Contas </v-card-title>
    </v-card>
    <Table />
  </v-container>
</template>

<script>
import Table from "../components/TableCrud/Table.vue";
export default {
  components: {
    Table,
  },
};
</script>

<style lang="scss" scoped></style>
