<template>
  <v-virtual-scroll :items="items" height="350" item-height="64">
    <template v-slot:default="{ item }">
      <v-list-item :key="item">
        <v-list-item-action>
          <v-btn fab small depressed color="primary">
            {{ item }}
          </v-btn>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            Compras <strong>Valor R$ {{ item }}</strong>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
    </template>
  </v-virtual-scroll>
</template>

<script>
export default {
  name: "ItemsCurrent",
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 7000;
    },
  },
};
</script>

<style lang="scss" scoped></style>
