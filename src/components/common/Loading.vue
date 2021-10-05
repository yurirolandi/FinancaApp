<template>
  <div class="loading">
    <v-progress-circular indeterminate color="white"></v-progress-circular>
    <p>Carregando...</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  background: #0b0b0bd3;
  width: 100%;
  height: 100%;
  z-index: 10;
  p {
    font: 600;
    font-size: 2rem;
    color: white;
    margin: 0.5rem 0;
  }
}
</style>
