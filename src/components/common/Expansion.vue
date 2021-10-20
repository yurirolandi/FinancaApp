<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h3>{{ Title }}</h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <slot name="expansion-content"></slot>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "Expansion",
  props: ["Title"],
};
</script>

<style lang="scss">
.v-expansion-panel-content__wrap {
  padding: 0;
}
</style>
