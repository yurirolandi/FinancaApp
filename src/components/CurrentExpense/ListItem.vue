<template>
  <v-list-item class="total-box">
    <v-list-item-action>
      <slot name="item"></slot>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>
        <strong> {{ nome }} </strong>
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      {{ valor }}
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  props: ["nome", "valor"],
  name: "ListItem",
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
