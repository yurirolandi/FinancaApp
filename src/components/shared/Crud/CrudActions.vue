<template>
  <div>
    <div v-if="isValid" class="d-inline-flex">
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on">mdi-cancel</v-icon>
        </template>
        <span>{{ ActionsText || "Não é possível editar/excluir item" }}</span>
      </v-tooltip>
    </div>
    <div v-else class="d-inline-flex">
      <v-icon
        color="primary"
        class="mr-1"
        @click.stop="$emit('edit')"
        data-cy="lista-edit"
        >mdi-pencil</v-icon
      >
      <v-icon color="error" @click.stop="$emit('delete')" data-cy="lista-delete"
        >mdi-delete</v-icon
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CrudTableActions2",
  props: ["isValid", "ActionsText"],
};
</script>
