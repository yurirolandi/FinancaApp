<template>
  <v-btn
    color="red darken-1"
    @click.stop="$emit('buttonCancel')"
    text
    :loading="load"
  >
    Cancelar
    <v-icon right> mdi-cancel </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonCancel",
  props: ["load"],
};
</script>
