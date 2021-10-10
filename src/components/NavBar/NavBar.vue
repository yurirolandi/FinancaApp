<template>
  <v-app-bar color="deep-purple accent-4" dense dark fixed>
    <v-avatar color="blue" size="38">
      <span class="white--text text-h6">YR</span>
    </v-avatar>
    <v-spacer></v-spacer>
    <v-toolbar-title class="user"
      ><span class="user__welcome">Bem vindo,</span>
      <span class="user__name">{{ users.nome ? users.nome : "" }}</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      users: "getUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar {
  flex: 0;
}
.user {
  &__welcome {
    font-size: 1.1rem;
    margin-right: 0.2rem;
  }
  &__name {
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
