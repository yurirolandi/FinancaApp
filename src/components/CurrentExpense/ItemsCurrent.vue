<template>
  <v-virtual-scroll :items="items.compras" height="350" item-height="64">
    <template v-slot:default="{ item }">
      <v-list-item :key="item.id">
        <v-list-item-action>
          {{ item.parcela }}/{{ item.total_parcela }}
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            <strong> {{ item.nome }}</strong>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action> R$ {{ item.valor }} </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "ItemsCurrent",
  props: ["items"],
};
</script>

<style lang="scss" scoped></style>
