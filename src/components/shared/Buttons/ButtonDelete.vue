<template>
  <v-btn
    color="error"
    @click.stop="$emit('buttonDelete')"
    :loading="load"
    data-cy="form-exclude"
  >
    Excluir
    <v-icon right> mdi-trash-can </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonDelete",
  props: ["load"],
};
</script>
