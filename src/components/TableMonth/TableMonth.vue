<template>
  <div class="TableMonth">
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Mês</th>
            <th class="text-left">Valor</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Janeiro</td>
            <td>{{valor}}</td>
            <td>Pago</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TableMonth",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      total: "getTotal",
    }),
     valor(){
      return `R$ ${this.total}`
    }
  },
};
</script>

<style lang="scss" scoped>
.TableMonth {
  color: #adadad;
}
</style>
