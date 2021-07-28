<template>
  <v-btn
    color="green darken-1"
    text
    @click.stop="$emit('buttonSend')"
    :loading="load"
    data-cy="form-confirmar"
  >
    {{ text }}
    <v-icon right> mdi-send </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonSend",
  props: ["text", "load"],
};
</script>
