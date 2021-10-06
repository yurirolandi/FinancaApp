<template>
  <div class="panel">
    <h2 class="pa-2">Gastos do mês atual</h2>
    <div class="mt-3">
      <ItemsCurrent v-if="false" />
      <NotItemCurrent v-else />
    </div>
  </div>
</template>

<script>
import ItemsCurrent from "./ItemsCurrent.vue";
import NotItemCurrent from "./NotItemsCurrent.vue";
export default {
  name: "Panel",
  components: {
    ItemsCurrent,
    NotItemCurrent,
  },
};
</script>

<style lang="scss" scoped></style>
