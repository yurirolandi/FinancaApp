<template>
  <div class="adiciona-itens">
    <div class="adiciona-itens__fixed">
      <v-card class="card" elevation="2" shaped fixed>
        <div class="container-table">
          <h3>Mês {{ mesSelecionado }}</h3>

          <v-row justify="end">
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Novo Item
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="primary">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Adicionar Itens</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark text @click="salvarItens"> Salvar </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <div class="container-input">
                  <v-text-field
                    label="Produto"
                    v-model="values.produto"
                  ></v-text-field>
                  <v-text-field
                    label="Valor"
                    v-model="values.valor"
                  ></v-text-field>
                  <v-select
                    :items="parcela"
                    label="Parcelas"
                    dense
                    outlined
                    v-model="values.valueParcela"
                  ></v-select>
                  <v-select
                    v-model="values.valueComercio"
                    :items="comercios"
                    label="Selecione o tipo de comercio"
                  >
                    <template v-slot:selection="{ item, index }">
                      <v-chip v-if="index === 0">
                        <span>{{ item }}</span>
                      </v-chip>
                    </template>
                  </v-select>
                </div>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </v-row>
        </div>
      </v-card>
    </div>
    <div class="container-task" v-if="array.length">
      <div v-for="(tasks, i) in array" :key="i">
        <div v-for="(mes, i) in tasks" :key="i">
          <div v-for="(compra, i) in mes" :key="i">
            <v-card
              class="card mt-4"
              elevation="2"
              shaped
              v-if="compra.mes === mesSelecionado"
            >
              <div class="itens-preenchidos">
                <p class="mt-2">
                  Produto: <span>{{ compra.item }}</span>
                </p>
                <v-divider></v-divider>
                <p class="mt-2">
                  Valor: <span>{{ compra.total }}</span>
                </p>
                <v-divider></v-divider>
                <p class="mt-2">
                  Tipo de comercio: <span>{{ compra.tipo }}</span>
                </p>
                <v-divider></v-divider>
                <p>
                  Parcelas: <span>{{ compra.parcela }}</span>
                </p>
              </div>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <v-btn
      v-if="array.length"
      @click="enviaDados"
      class="mb-10"
      fab
      dark
      absolute
      bottom
      right
      color="indigo"
    >
      <v-icon dark> mdi-content-save </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// import { requestAxios } from "../../server/axios";

export default {
  name: "AdicionaItens",
  props: ["mesSelecionado"],
  data() {
    return {
      dialog: false,
      values: {
        produto: "",
        valor: "",
        valueComercio: "",
        valueParcela: "",
      },
      array: [],
    };
  },
  methods: {
    ...mapMutations(["setProdutosAdicionados"]),

    salvarItens() {
      this.dialog = false;
      if (
        this.values.valor !== "" &&
        this.values.produto !== "" &&
        this.values.valueComercio !== "" &&
        this.values.valueParcela !== ""
      ) {
        let filtroArray = this.task.find((x) => x[this.mesSelecionado]);
        if (filtroArray) {
          filtroArray[this.mesSelecionado].push({
            mes: this.mesSelecionado,
            item: this.values.produto,
            total: this.values.valor,
            tipo: this.values.valueComercio,
            parcela: this.values.valueParcela,
          });
        } else {
          this.array.push({
            [this.mesSelecionado]: [
              {
                mes: this.mesSelecionado,
                item: this.values.produto,
                total: this.values.valor,
                tipo: this.values.valueComercio,
                parcela: this.values.valueParcela,
              },
            ],
          });
        }
        this.values.valor = "";
        this.values.produto = "";
        this.values.valueComercio = "";
        this.values.valueParcela = "";
      }
    },
    async enviaDados() {
      console.log("envio", this.task);
      // await requestAxios.post(`produto${this.mesSelecionado}`, this.task);
    },
  },
  computed: {
    ...mapGetters({
      task: "getProdutosAdicionados",
      parcela: "getParcelas",
      comercios: "getComercio",
    }),
  },
};
</script>

<style lang="scss" scoped>
.adiciona-itens {
  &__fixed {
    position: fixed;
    top: 155px;
    z-index: 10;
    width: 100%;
    background: white;
  }
  .container-table {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    padding: 1.8rem;
  }
}
.container-input {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.itens-preenchidos {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
  }
}
</style>
