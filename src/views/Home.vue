<template>
  <div class="home">
    <NavBar />
    <v-container>
      <v-card elevation="2">
        <v-card-title class="text-h4"> Finança </v-card-title>
      </v-card>
      <v-card elevation="2" class="mt-5">
        <CurrentExpense />
      </v-card>
    </v-container>
    <BottomNavigation />
  </div>
</template>

<script>
import CurrentExpense from "../components/CurrentExpense/Panel.vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import BottomNavigation from "@/components/BottomNavigation/BottomNavigation";
export default {
  name: "Home",
  components: {
    CurrentExpense,
    BottomNavigation,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
