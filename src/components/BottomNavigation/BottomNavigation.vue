<template>
  <v-bottom-navigation
    id="bottom-navigation"
    active-class="btn_active"
    v-model="value"
    shift
    fixed
  >
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
      { title: "Home", icon: "$home", route: "/" },
      {
        title: "Balanço",
        icon: "$chart",
        route: "/grafico",
      },
      { title: "Meses", icon: "$calendar", route: "/month" },
      { title: "Perfil", icon: "$account", route: "account" },
    ],
  }),
};
</script>

<style lang="scss">
#bottom-navigation {
  .v-btn:not(.v-btn--round).v-size--default {
    height: 56px;
    min-width: 64px;
    width: 100%;
    padding: 0 16px;
  }
  .btn_active {
    color: #6200ea !important;
  }
}
</style>
