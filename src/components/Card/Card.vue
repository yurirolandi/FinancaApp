<template>
  <div class="card" @click.stop="$emit('detalhes')">
    <v-card elevation="2" shaped class="pa-4">
      <h2 class="card__title">
        <v-icon>{{ CardIcon }}</v-icon> {{ cardTitle }}
      </h2>
      <h3 class="card__subtitle">{{ cardSubtitle }}</h3>
      <v-card-text>
        <div>
          <h4 class="card__cash">{{ CardCash }}</h4>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["cardTitle", "cardSubtitle", "CardCash", "CardIcon"],
};
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem;
  &__title {
    font-weight: normal;
    font-size: 1.3rem;
    padding-left: 16px;
    color: #adadad;
  }
  &__subtitle {
    margin-top: 1rem;
    font-weight: normal;
    padding-left: 16px;
    font-size: 1rem;
    color: #adadad;
  }
  &__cash {
    color: #2c9fd3;
    font-weight: bold;
    font-size: 1.5rem;
  }
}
</style>