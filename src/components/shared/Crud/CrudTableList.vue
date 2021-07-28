<template>
  <v-card elevation="4" class="mx-auto mb-7">
    <v-data-table
      :headers="headers"
      :items="itemList"
      :item-key="itemKey"
      class="elevation-1"
      :loading="isLoading"
      loading-text="Carregando Dados"
      no-results-text="Nenhum item encontrado pela pesquisa"
      :show-expand="showExpand"
      :search="search"
      data-cy="lista-crud"
      :dense="isDense"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-text-field
            v-model="search"
            label="Pesquisar"
            class="mt-5"
            data-cy="crud-pesquisar"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn-toggle
            v-model="isDense"
            mandatory
            class="mb-2 mr-2"
            color="primary"
            dense
          >
          </v-btn-toggle>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                color="primary"
                class="mb-2 mr-2"
                @click.stop="$emit('fillList')"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon large>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Atualizar a lista</span>
          </v-tooltip>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="openFormDialogCreate"
            data-cy="crud-criar"
          >
            {{ createButtonText }}
            <v-icon right>mdi-plus-box</v-icon>
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:expanded-item="{ item }">
        <td :colspan="100">
          <CrudExpendedItem
            :expandedList="item[expendedListProp]"
            :expandedKey="expandedKey"
            :expandedHeaders="expandedHeaders"
          />
        </td>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <CrudTableActions
          :isValid="validateItem(item)"
          :ActionsText="validadeActionsText"
          @edit="openFormDialogEdit(item)"
          @delete="openConfirmDialogDelete(item)"
        />
      </template>
    </v-data-table>
    <CrudDialogDelete
      :dialogTitle="dialogDeleteTitle"
      :keyValueList="keyValueList"
      @deleteElement="$emit('deleteEvent')"
    />
  </v-card>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import CrudTableActions from "./CrudActions.vue";
import CrudExpendedItem from "./CrudExpendedItem.vue";
import CrudDialogDelete from "./CrudDialogDelete";
export default {
  name: "CrudTableList",
  components: {
    CrudTableActions,
    CrudExpendedItem,
    CrudDialogDelete,
  },
  props: [
    "itemList",
    "headers",
    "itemKey",
    "validadeActionsFunction",
    "validadeActionsText",
    "createButtonText",
    "expendedListProp",
    "expandedHeaders",
    "expandedKey",
    "showExpand",
    "dialogDeleteTitle",
    "keyValueList",
  ],
  data: () => ({
    search: "",
    dialogExclude: false,
    isDense: false,
  }),
  methods: {
    ...mapMutations([
      "setCurrentElement",
      "setShowFormDialog",
      "setShowConfirmDialog",
      "setShowDeleteDialog",
    ]),
    openFormDialog() {
      this.setShowFormDialog(true);
    },
    setCurrentElementStore(item) {
      const index = this.itemList.indexOf(item);
      this.setCurrentElement(this.itemList[index]);
    },
    openFormDialogCreate() {
      this.setCurrentElement(null);
      this.openFormDialog();
    },
    openFormDialogEdit(item) {
      this.setCurrentElementStore(item);
      this.openFormDialog();
    },
    openConfirmDialogDelete(item) {
      this.setCurrentElementStore(item);
      this.setShowDeleteDialog(true);
    },
    validateItem(item) {
      return this.validadeActionsFunction == null
        ? false
        : this.validadeActionsFunction(item);
    },
  },
  computed: {
    ...mapGetters({
      isLoading: "getLoadingCrud",
    }),
  },
};
</script>

<style></style>
