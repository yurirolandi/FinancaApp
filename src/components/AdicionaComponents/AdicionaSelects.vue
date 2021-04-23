<template>
  <div class="container-selects">
    <select name="select" class="select-meses" @change="handleMes($event)">
      <option value=" " selected>Seleciona o Mês</option>
      <option v-for="mes in meses" :key="mes.id" :value="mes.mes">
        {{ mes.mes }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Selected",
  props: ["meses"],
  methods: {
    ...mapMutations(["setMesSelecionado"]),
    handleMes(mes) {
      this.setMesSelecionado(mes.target.value);
    },
  },
};
</script>
<style lang="scss" scoped>
.container-selects {
  .select-meses {
    -webkit-appearance: auto;
    border-style: solid;
    padding: 0.5rem;
    &:focus-visible {
      outline: none;
    }
  }
}
</style>