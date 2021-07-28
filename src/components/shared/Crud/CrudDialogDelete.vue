<template>
  <Dialog :show="showDeleteDialog">
    <template v-slot:dialog-titulo>
      {{ dialogTitle }}
    </template>

    <template v-slot:dialog-conteudo v-if="element">
      <v-simple-table dense>
        <template v-slot:default>
          <tbody>
            <tr v-for="object in keyValueList" :key="object.key">
              <th>{{ object.key }}:</th>
              <td>{{ object.value }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>

    <template v-slot:dialog-btns>
      <ButtonCancel @buttonCancel="closeDialog" :load="isLoading" />

      <ButtonDelete @buttonDelete="$emit('deleteElement')" :load="isLoading" />
    </template>
  </Dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Dialog from "../Dialog";
import ButtonDelete from "../Buttons/ButtonDelete.vue";
import ButtonCancel from "../Buttons/ButtonCancel.vue";
export default {
  name: "CrudDialogDelete",
  components: {
    Dialog,
    ButtonDelete,
    ButtonCancel,
  },
  props: ["dialogTitle", "keyValueList"],
  methods: {
    ...mapActions(["showSnackBar"]),
    ...mapMutations(["setShowDeleteDialog", "setShowFormDialog"]),
    closeDialog() {
      this.setShowDeleteDialog(false);
    },
  },
  computed: {
    ...mapGetters({
      element: "getCurrentElement",
      showDeleteDialog: "getShowDeleteDialog",
      isLoading: "getLoadingCrud",
    }),
  },
};
</script>

<style></style>
