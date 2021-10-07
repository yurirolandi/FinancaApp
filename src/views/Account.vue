<template>
  <v-container>
    <v-card
      elevation="2"
      class="d-flex flex-column justify-center align-center"
    >
      <h4>Foto de Perfil</h4>
      <EditFoto />

      <v-card-title>
        <span class="text-h6 font-weight-light">{{ users.nome }}</span>
      </v-card-title>
      <v-list-item-subtitle>
        <span class="text-h6 font-weight-light">{{ users.email }}</span>
      </v-list-item-subtitle>
      <v-card-actions>
        <v-btn text @click.stop="logout">Sair do App</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import EditFoto from "../components/EditFoto/EditFoto.vue";
export default {
  name: "Account",
  components: {
    EditFoto,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({
      users: "getUser",
    }),
  },
  methods: {
    ...mapMutations(["setToken", "setUser", "setLoadingFullScreen"]),
    logout() {
      this.setLoadingFullScreen(true);
      localStorage.removeItem("Use");
      localStorage.removeItem("Token");
      this.setToken(false);
      this.setUser({});
      this.$router.push({ path: "/Login" });
      this.setLoadingFullScreen(false);
    },
  },
};
</script>
