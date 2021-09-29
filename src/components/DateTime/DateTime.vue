<template>
  <v-col cols="12" sm="6" md="4">
    <v-menu
      ref="showDate"
      v-model="showDate"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Data de Compra"
          prepend-icon="mdi-calendar"
          readonly
          :rules="dateRules"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
        locale="pt-br"
        @input="showDate = false"
      >
      </v-date-picker>
    </v-menu>
  </v-col>
</template>

<script>
export default {
  name: "DateTime",
  props: {
    dateProp: {},
  },
  data: () => ({
    date: "",
    showDate: false,
    minDate: new Date().toISOString().substr(0, 10),
    dateRules: [(v) => !!v || "Data é Obrigatório"],
  }),
  created() {
    this.date = this.dateProp;
  },
  watch: {
    date: function (val) {
      this.$emit("update:dateProp", val);
    },
    dateProp: function (val) {
      this.date = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
