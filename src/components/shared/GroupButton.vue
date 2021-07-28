<template>
  <v-row align="center" justify="center">
    <v-col cols="12">
      <p class="text-center">{{ title }}</p>
    </v-col>
    <v-btn-toggle v-model="selectedValue" mandatory>
      <v-btn
        v-for="option in list"
        :key="option.Id"
        :value="option.Id"
        :disabled="disabledProp"
        :data-cy="'form-btn-' + option.Nome + '-' + option.Id"
      >
        <span class="hidden-sm-and-down">{{ option.Nome }}</span>
      </v-btn>
    </v-btn-toggle>
  </v-row>
</template>

<script>
export default {
  name: "GroupButton",
  props: {
    title: {},
    list: {},
    selectedValueProp: {},
    disabledProp: {},
  },
  data: () => ({
    selectedValue: "",
  }),
  created() {
    this.selectedValue = this.selectedValueProp;
  },
  watch: {
    selectedValue: function (val) {
      this.$emit("update:selectedValueProp", val);
    },
    selectedValueProp: function (val) {
      this.selectedValue = val;
    },
  },
};
</script>

<style></style>
