<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="header">
        <strong>Olá, Yuri</strong>
        <div class="header__icons">
          <v-icon>mdi-eye-off</v-icon>
          <v-icon>mdi-cog</v-icon>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <FooterApp />
  </v-app>
</template>

<script>
import FooterApp from "./components/Footer/FooterApp";
export default {
  name: "App",
  components: {
    FooterApp,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__icons{
    .v-icon{
      margin-left: 1rem;
      border-radius: 50%;
      background-color: #00000033;      
      padding: 0.4rem;
    }
  }
}
</style>
