<template>
  <div class="adiciona-itens">
    <v-card class="card" elevation="2" shaped>
      <div class="container-table">
        <h3>Mês {{mesSelecionado}}</h3>

        <v-row justify="center">
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
                <v-text-field label="Produto" v-model="produto"></v-text-field>
                <v-text-field label="Valor" v-model="valor"></v-text-field>
                <v-select
                  :items="parcela"
                  label="Parcelas"
                  dense
                  outlined
                  v-model="valueParcela"
                ></v-select>
                <v-select
                  v-model="valueComercio"
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
    <v-card class="card mt-4" elevation="2" shaped v-if="show">
      <div class="itens-preenchidos">
        <p class="mt-2">Produto: {{ produto }}</p>
        <v-divider></v-divider>
        <p class="mt-2">Valor: {{ valor }}</p>
        <v-divider></v-divider>
        <p class="mt-2">Tipo de comercio: {{ valueComercio }}</p>
        <v-divider></v-divider>
        <p>Parcelas: {{ valueParcela }}</p>
        <v-divider></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AdicionaItens",
  props: ['mesSelecionado'],
  data() {
    return {
      dialog: false,
      show: false,
      produto: "",
      valor: "",
      valueComercio: "",
      valueParcela: "",
      comercios: ["Mercado", "Lazer", "Casa", "Salão", "Outros"],
      parcela: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ],
    };
  },
  methods: {
    salvarItens() {
      this.dialog = false;
      if (
        this.valor !== "" &&
        this.produto &&
        this.valueComercio !== "" &&
        this.valueParcela
      ) {
        this.show = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.adiciona-itens {
  .container-table {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
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
}
</style>