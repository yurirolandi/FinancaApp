<template>
  <v-data-table
    :headers="headers"
    :items="currentMonth.compras"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ currentMonth.mes }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>

        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Novo Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="conta"
                      label="Nome da Conta"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="valor" label="Valor"></v-text-field>
                  </v-col>
                  <DateTime :dateProp.sync="liberationDate" />
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close"> Cancelar </v-btn>
              <v-btn color="primary darken-1" @click="save"> Salvar </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Deseja deletar o item ?
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        size="20"
        color="orange darken-2
"
        class="mr-3"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="20" color="red" @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data> <h2>Sem registro !!!</h2> </template>
  </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
import DateTime from "../DateTime/DateTime.vue";
export default {
  components: {
    DateTime,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    liberationDate: "",
    conta: "",
    valor: "",
    headers: [
      {
        text: "Conta",
        align: "start",
        sortable: false,
        value: "conta",
      },
      { text: "Valor", value: "valor", align: "start", sortable: false },
      { text: "Data", value: "data", align: "start", sortable: false },
      { text: "Ação", value: "actions", align: "start", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      conta: "",
      valor: 0,
      data: "",
    },
    defaultItem: {
      conta: "",
      valor: 0,
      data: "",
    },
  }),

  computed: {
    ...mapGetters({
      currentMonth: "getCurrentMonth",
    }),
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Editar Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        const [year, month, day] = this.liberationDate.split("-");
        const data = {
          conta: this.conta,
          valor: this.valor,
          data: `${day}/${month}/${year}`,
        };
        this.desserts.push(data);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped></style>
