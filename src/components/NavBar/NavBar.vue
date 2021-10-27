<template>
  <v-app-bar height="60" color="white" dense dark absolute>
    <v-avatar color="primary" size="38">
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
      return `${firstName}`;
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
    color: #000;
  }
  &__name {
    font-size: 1.2rem;
    text-align: center;
    color: #000;
  }
}
</style>
