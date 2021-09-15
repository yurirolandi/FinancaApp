<template>
  <div class="panel">
    <h2 class="pa-2">Gastos do mês atual</h2>
    <div class="mt-3">
      <ItemsCurrent />
    </div>
  </div>
</template>

<script>
import ItemsCurrent from "./ItemsCurrent.vue";
export default {
  name: "Panel",
  components: {
    ItemsCurrent,
  },
};
</script>

<style lang="scss" scoped></style>
