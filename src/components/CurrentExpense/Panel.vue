<template>
  <div class="panel">
    <h2 class="pa-2">Gastos do mês de {{ compra ? compra.mes : "" }}</h2>
    <div class="mt-3">
      <ListItem v-if="compra.length" nome="Compras" valor="valor">
        <template v-slot:item> Parcelas </template>
      </ListItem>
      <ItemsCurrent v-if="compra.length" :items.sync="compra" />
      <NotItemCurrent v-else />
    </div>
    <div v-if="compra.length">
      <v-divider></v-divider>
      <ListItem nome="Total" :valor="'R$ ' + total">
        <template v-slot:item>
          <v-icon color="white">mdi-cash-register</v-icon>
        </template>
      </ListItem>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ItemsCurrent from "./ItemsCurrent.vue";
import NotItemCurrent from "./NotItemsCurrent.vue";
import ListItem from "./ListItem.vue";
export default {
  name: "Panel",
  components: {
    ItemsCurrent,
    NotItemCurrent,
    ListItem,
  },
  computed: {
    ...mapGetters({
      compra: "getCurrentMonth",
      total: "getFilterValue",
    }),
  },
  methods: {
    ...mapActions(["refreshMonth"]),
  },
  created() {
    let data = new Date();
    this.refreshMonth(`${data.getMonth() + 1}${data.getFullYear()}`);
  },
};
</script>

<style lang="scss" scoped>
.total-box {
  background-color: #6200ea !important;
  > .v-list-item__content,
  .v-list-item__action {
    color: white !important;
  }
}
</style>
