<template>
  <v-bottom-navigation active-class="btn_active" v-model="value" shift fixed>
    <v-btn v-for="(item, index) in items" :key="index" router :to="item.route">
      <span>{{ item.title }}</span>

      <v-icon> {{ item.icon }} </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: "Home",
    items: [
      { title: "Home", icon: "mdi-home", route: "/" },
      {
        title: "Balanço",
        icon: "mdi-chart-histogram",
        route: "/grafico",
      },
      { title: "Meses", icon: "mdi-calendar-month", route: "/month" },
      { title: "Perfil", icon: "mdi-account", route: "account" },
    ],
  }),
};
</script>

<style lang="scss">
.v-btn:not(.v-btn--round).v-size--default {
  height: 56px;
  min-width: 64px;
  width: 100%;
  padding: 0 16px;
}
.btn_active {
  color: #6200ea !important;
}
</style>
