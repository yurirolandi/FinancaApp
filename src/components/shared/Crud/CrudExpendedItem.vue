<template>
  <v-card elevation="4" class="my-2">
    <v-data-table
      :items="expandedList"
      :item-key="expandedKey"
      :headers="expandedHeaders"
      hide-default-header
      hide-default-footer
      :items-per-page="-1"
      :height="expandedList.length > 10 ? '500' : undefined"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "CrudExpendedItem",
  props: ["expandedList", "expandedKey", "expandedHeaders"],
};
</script>
