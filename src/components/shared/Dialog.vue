<template>
  <v-dialog
    v-model="show"
    :max-width="maxWidth || 385"
    persistent
    :fullscreen="fullscreen"
    scrollable
  >
    <v-card>
      <v-card-title class="headline">
        <slot name="dialog-titulo"></slot>
      </v-card-title>
      <v-divider class="mb-1"></v-divider>
      <v-card-text>
        <slot name="dialog-conteudo"></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

        <slot name="dialog-btns"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    show: {
      type: Boolean,
      require: true,
      twoWay: true,
    },
    maxWidth: {
      type: Number,
    },
    fullscreen: {
      type: Boolean,
    },
  },
};
</script>
