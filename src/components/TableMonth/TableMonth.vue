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
          <tr v-for="item in desserts" :key="item.mes">
            <td>{{ item.mes }}</td>
            <td>{{ item.valor }}</td>
            <td>{{ item.status }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  name: "TableMonth",
  data() {
    return {
      desserts: [
        {
          mes: "Janeiro",
          valor: 159,
          status: 'Pago',
        },
        {
          mes: "Fevereiro",
          valor: 237,
          status: 'Pendente',
        },
        {
          mes: "Março",
          valor: 255,
          status: 'Pago',
        },
        {
          mes: "Abril",
          valor: 255,
          status: 'Pendente',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.TableMonth {
  color: #adadad;
}
</style>

