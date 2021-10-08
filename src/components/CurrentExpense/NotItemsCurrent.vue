<template>
  <div class="not-item">
    <h4>R$ 0,00</h4>
  </div>
</template>

<script>
export default {
  name: "NotItems",
};
</script>

<style lang="scss" scoped>
.not-item {
  padding: 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  color: #a3a2a2;
  > h4 {
    font-size: 1.2rem;
  }
}
</style>
