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
              {{ modalTitle }}
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
                    <v-text-field
                      type="number"
                      v-model="valor"
                      label="Valor"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <DateTime :dateProp.sync="liberationDate" />
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-menu
                      ref="parcela"
                      v-model="parcela"
                      :close-on-content-click="false"
                      :nudge-left="15"
                      :nudge-top="15"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="selectParcela"
                          :label="labelParcela"
                          prepend-icon="mdi-division"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-container fluid class="container-background">
                        <v-row>
                          <v-col class="d-flex" cols="6" sm="6">
                            <v-select
                              v-model="parcelaqtd"
                              :items="parcelaItem"
                              label="Parcela"
                            ></v-select>
                          </v-col>
                          <v-col class="d-flex" cols="6" sm="6">
                            <v-select
                              v-model="totalParcela"
                              :items="totalParcelaItem"
                              label="Total Parcela"
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                v-model="dialogDelete"
                v-if="delet"
                text
                @click="deleteItemConfirm"
              >
                Excluir
              </v-btn>
              <v-btn color="teal lighten-2" text @click="close">
                Cancelar
              </v-btn>
              <v-btn
                color="primary darken-1"
                v-if="modalTitle == 'Novo Item'"
                @click="save"
              >
                Salvar
              </v-btn>
              <v-btn color="primary darken-1" v-else @click="editar">
                Editar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        size="20"
        color="orange darken-2"
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
import { mapGetters, mapActions } from "vuex";
import DateTime from "../DateTime/DateTime.vue";
export default {
  components: {
    DateTime,
  },
  data: () => ({
    dialog: false,
    modalTitle: "Novo Item",
    labelParcela: "Selecione a parcela",
    itemId: null,
    dialogDelete: false,
    selectParcela: null,
    liberationDate: "",
    totalParcela: "01",
    parcela: null,
    delet: false,
    parcelaqtd: "01",
    conta: "",
    valor: "",
    time: "",
    totalParcelaItem: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    parcelaItem: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    headers: [
      {
        text: "Conta",
        align: "start",
        sortable: false,
        value: "nome",
      },
      { text: "Valor", value: "valor", align: "start", sortable: false },
      { text: "Data", value: "dia", align: "start", sortable: false },
      { text: "Parcela", value: "parcela", align: "start", sortable: false },
      {
        text: "Total parcela",
        value: "total_parcela",
        align: "start",
        sortable: false,
      },
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
    parcela: function (val) {
      this.selectParcela = `${this.parcelaqtd}/${this.totalParcela}`;
      this.parcela = val;
    },
  },
  methods: {
    ...mapActions([
      "adicionarCompras",
      "editCompra",
      "deleteCompra",
      "refreshMonth",
    ]),
    editItem(item) {
      this.modalTitle = "Editar Item";
      const { dia, nome, parcela, total_parcela, valor } = item;
      const [day, month, year] = dia.split("/");
      this.conta = nome;
      this.valor = valor;
      this.parcelaqtd = parcela;
      this.totalParcela = total_parcela;
      this.liberationDate = `${year}-${month}-${day}`;
      this.labelParcela = `${parcela}/${total_parcela}`;
      this.dialog = true;
    },
    editar() {
      const [year, month, day] = this.liberationDate.split("-");
      const data = {
        nome: this.conta,
        valor: this.valor,
        dia: `${day}/${month}/${year}`,
        parcela: this.parcelaqtd,
        total_parcela: this.totalParcela,
        id: this.currentMonth.id,
      };
      this.editCompra(data);
      this.refreshMonth(this.currentMonth.id);
      this.labelParcela = "Selecione a parcela";
      this.dialog = false;
    },

    deleteItem(item) {
      const { dia, nome, parcela, total_parcela, valor, id } = item;
      const [day, month, year] = dia.split("/");
      this.conta = nome;
      this.valor = valor;
      this.parcelaqtd = parcela;
      this.totalParcela = total_parcela;
      this.liberationDate = `${year}-${month}-${day}`;
      this.labelParcela = `${parcela}/${total_parcela}`;
      this.dialog = true;
      this.dialogDelete = true;
      this.itemId = id;
      this.delet = true;
      this.modalTitle = "Excluir";
    },

    deleteItemConfirm() {
      let payload = {
        id: this.currentMonth.id,
        itemId: this.itemId,
      };
      this.deleteCompra(payload);
      this.labelParcela = "Selecione a parcela";
      this.modalTitle = "Novo Item";
      this.closeDelete();
      this.delet = false;
      this.dialog = false;
    },

    close() {
      this.conta = "";
      this.valor = "";
      this.parcelaqtd = "01";
      this.totalParcela = "01";
      this.liberationDate = "";
      this.labelParcela = `Selecione a parcela`;
      this.modalTitle = "Novo Item";
      this.dialog = false;
      this.delet = false;
    },

    closeDelete() {
      this.conta = "";
      this.valor = "";
      this.parcelaqtd = "01";
      this.totalParcela = "01";
      this.liberationDate = "";
      this.labelParcela = `Selecione a parcela`;
      this.modalTitle = "Novo Item";
      this.delet = false;
      this.dialogDelete = false;
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
          parcelas: this.parcelaqtd,
          total_parcela: this.totalParcela,
          id: this.currentMonth.id,
        };
        this.adicionarCompras(data);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.container-background {
  background-color: white;
}
.v-data-table__mobile-row {
  border-bottom: 1px solid #cecece;
  &:last-child {
    border-bottom: none !important;
    margin-bottom: 3.5rem !important;
  }
}
</style>
