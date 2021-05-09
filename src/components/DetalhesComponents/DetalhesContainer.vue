<template>
  <div class="detalhesContainer">
    <SharedHeader />
    <DetalhesHeaderValores />
    <DetalhesCompras />
  </div>
</template>

<script>
import DetalhesCompras from "./DetalhesCompras";
import DetalhesHeaderValores from "./DetalhesHeaderValores";
import SharedHeader from "../Shared/SharedHeader";
export default {
  name: "DetalhesContainer",
  components: {
    DetalhesCompras,
    DetalhesHeaderValores,
    SharedHeader,
  },
};
</script>
