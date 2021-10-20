<template>
  <v-app-bar color="primary" dense dark fixed>
    <v-avatar color="secondary" size="38">
      <span class="white--text text-h6">
        {{ setInitialName }}
      </span>
    </v-avatar>
    <v-spacer></v-spacer>
    <v-toolbar-title class="user"
      ><span class="user__welcome">Bem vindo,</span>
      <span class="user__name">{{
        users.nome !== null ? users.nome : ""
      }}</span>
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
    setInitialName() {
      let nameStore = this.users.nome;
      if (!nameStore) return "SN";
      let firstName = nameStore.split(" ")[0][0];
      let lastName = nameStore.split(" ")[2][0]
        ? nameStore.split(" ")[2][0]
        : "";
      return `${firstName}${lastName}`;
    },
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
