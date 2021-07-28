<template>
  <Dialog :show="showConfirmDialog">
    <template v-slot:dialog-titulo>
      {{ dialogTitle }}
    </template>

    <template v-slot:dialog-conteudo>
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

      <ButtonSend
        @buttonSend="$emit('sendElement')"
        :load="isLoading"
        text="Confirmar"
      />
    </template>
  </Dialog>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Dialog from "../Dialog";
import ButtonSend from "../Buttons/ButtonSend.vue";
import ButtonCancel from "../Buttons/ButtonCancel.vue";
export default {
  name: "CrudDialogConfirm",
  components: {
    Dialog,
    ButtonSend,
    ButtonCancel,
  },
  props: ["dialogTitle", "keyValueList"],
  methods: {
    ...mapActions(["showSnackBar"]),
    ...mapMutations(["setShowConfirmDialog", "setShowFormDialog"]),
    closeDialog() {
      this.setShowConfirmDialog(false);
    },
  },
  computed: {
    ...mapGetters({
      element: "getCurrentElement",
      showConfirmDialog: "getShowConfirmDialog",
      isLoading: "getLoadingCrud",
    }),
  },
};
</script>

<style></style>
