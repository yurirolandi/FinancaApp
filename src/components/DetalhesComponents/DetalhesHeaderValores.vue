<template>
  <div class="detalhes-header">
    <div class="detalhes-header__container">
      <div class="detalhes-bars">
        <div class="detalhes-bar__atual"></div>
        <div class="detalhes-bar__proximas-faturas"></div>
      </div>
      <div class="detalhes-box">
        <div class="detalhes-box__atual">
          <p>Fatura atual</p>
          <p class="fatura-atual">R$ 451,99</p>
        </div>
        <div class="detalhes-box__proximas-faturas">
          <p>Próximas faturas</p>
          <p class="fatura-proximas">R$ 451,99</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetalhesHeaderValores",
};
</script>

<style lang="scss" scoped>
.detalhes-header {
  padding: 1.5rem 0 0 2.6rem;
  height: 300px;
  &__container {
    width: 100%;
    display: flex;
    height: 250px;
    .detalhes-bars {
      height: 250px;
      min-height: 250px;
      max-height: 250px;
      width: 5px;
      border-radius: 15px;
      position: absolute;
      .detalhes-bar__atual {
        height: 50%;
        width: 5px;
        background: #18a3e4;
        border-radius: 15px;
        position: relative;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
      .detalhes-bar__proximas-faturas {
        position: relative;
        height: 50%;
        width: 5px;
        background: #ff763a;
        border-radius: 15px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    .detalhes-box {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding-left: 2rem;
      &__atual,
      &__proximas-faturas {
        display: flex;
        flex-direction: column;
        align-content: center;

        .fatura-atual {
          color: #18a3e4;
          font-size: 1.5rem;
        }

        .fatura-proximas {
          color: #ff763a;
          font-size: 1.5rem;
        }
        p {
          margin-bottom: 0;
          font-size: 0.8rem;
          color: #747474;
        }
      }
    }
  }
}
</style>