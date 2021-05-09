<template>
  <div class="detalhes-compras">
    <v-timeline dense clipped>
      <v-timeline-item small right v-for="(produto, i) in produtos" :key="i">
        <div class="timeline">
          <div class="timeline__servico">
            <p class="servico-titulo">{{produto.tipo}}</p>
            <p class="servico-subtitulo">{{produto.item}}</p>
          </div>
          <div class="timeline__valores">
            <p class="valores-data">{{produto.data}}</p>
            <p class="valores-titulo">R$ {{produto.total}}</p>
            <p class="valores-subtitulo">em {{produto.parcela}}x</p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {

  computed: {
    ...mapGetters({
      produtos: "getValorTotal",
    }),
  },
}
</script>
<style lang="scss" scoped>
.detalhes-compras {
  background-color: #f5f5f5;
  .timeline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 2rem;
    color: #7b7b7b;

    p {
      margin-bottom: 0;
    }

    &__servico {
      .servico-titulo {
        font-size: 0.9rem;
      }
      .servico-subtitulo {
        color: #232323;
      }
    }

    &__valores {
      text-align: right;
      .valores-titulo {
        color: #232323;
      }
      .valores-data,
      .valores-subtitulo {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
