<template>
  <v-row>
    <v-col cols="6">
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
            label="Data de Liberação"
            prepend-icon="mdi-calendar"
            readonly
            :rules="dateRules"
            v-bind="attrs"
            v-on="on"
            data-cy="form-date"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          :min="minDate"
          no-title
          scrollable
          locale="pt-br"
          @input="showDate = false"
          @change="$emit('update:dateProp', date)"
        >
        </v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="6">
      <v-menu
        ref="showTime"
        v-model="showTime"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="time"
            label="Hora de Liberação"
            prepend-icon="mdi-clock-time-four-outline"
            :rules="timeRules"
            readonly
            v-bind="attrs"
            v-on="on"
            data-cy="form-time"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="showTime"
          v-model="time"
          format="24hr"
          full-width
          @click:minute="$refs.showTime.save(time)"
          @input="$emit('update:timeProp', time)"
        ></v-time-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DateTime",
  props: {
    dateProp: {},
    timeProp: {},
  },
  data: () => ({
    date: "",
    time: "",

    showDate: false,
    showTime: false,
    minDate: new Date().toISOString().substr(0, 10),

    dateRules: [(v) => !!v || "Data é Obrigatório"],
    timeRules: [(v) => !!v || "Hora é Obrigatória"],
  }),
  created() {
    this.date = this.dateProp;
    this.time = this.timeProp;
  },
  methods: {},
  watch: {
    date: function (val) {
      this.$emit("update:dateProp", val);
    },
    time: function (val) {
      this.$emit("update:timeProp", val);
    },
    dateProp: function (val) {
      this.date = val;
    },
    timeProp: function (val) {
      this.time = val;
    },
  },
};
</script>

<style></style>
