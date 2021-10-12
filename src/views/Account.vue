<template>
  <div class="account">
    <NavBar />
    <v-container>
      <v-card
        elevation="2"
        class="d-flex flex-column justify-center align-center"
      >
        <h4>Foto de Perfil</h4>
        <EditFoto />

        <v-card-title>
          <span class="text-h6 font-weight-light">{{
            users.nome !== null ? users.nome : ""
          }}</span>
        </v-card-title>
        <v-list-item-subtitle>
          <span class="text-h6 font-weight-light">{{
            users.email !== null ? users.email : ""
          }}</span>
        </v-list-item-subtitle>
        <v-card-actions>
          <v-btn text @click.stop="logout">Sair do App</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <BottomNavigation />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import EditFoto from "@/components/EditFoto/EditFoto.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
export default {
  name: "Account",
  components: {
    EditFoto,
    BottomNavigation,
    NavBar,
  },
  computed: {
    ...mapGetters({
      users: "getUser",
    }),
  },
  methods: {
    ...mapMutations(["setUser", "setLoadingFullScreen"]),
    logout() {
      this.setLoadingFullScreen(true);
      this.setUser(null);
      localStorage.removeItem("Use");
      localStorage.removeItem("Token");
      this.$router.push({ path: "/Login" });
      this.setLoadingFullScreen(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.account {
  width: 100%;
}
</style>
