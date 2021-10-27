<template>
  <div class="month-selected">
    <NavBar />
    <v-container>
      <v-card class="d-flex align-center" elevation="2">
        <v-btn to="/month" outlined class="mx-2" small fab color="primary">
          <v-icon dark> mdi-keyboard-backspace </v-icon>
        </v-btn>
        <v-card-title class="text-h5"> Adicionar Contas </v-card-title>
      </v-card>
      <Table />
    </v-container>
    <BottomNavigation />
  </div>
</template>

<script>
import Table from "../components/TableCrud/Table.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
export default {
  components: {
    Table,
    BottomNavigation,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.month-selected {
  width: 100%;
  overflow-y: auto;
  height: 100vh;
}
</style>
