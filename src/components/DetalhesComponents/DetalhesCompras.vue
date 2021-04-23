<template>
  <div class="detalhes-compras">
    <v-timeline dense clipped>
      <v-timeline-item small right v-for="item in 10" :key="item">
        <div class="timeline">
          <div class="timeline__servico">
            <p class="servico-titulo">Mercado</p>
            <p class="servico-subtitulo">timeline item</p>
          </div>
          <div class="timeline__valores">
            <p class="valores-data">12 Abr</p>
            <p class="valores-titulo">R$ 22,00</p>
            <p class="valores-subtitulo">em 2x</p>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<style lang="scss" scoped>
.detalhes-compras {
  background-color: #f5f5f5;
  .timeline {
    display: flex;
    justify-content: space-between;
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