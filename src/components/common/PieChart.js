import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  props: ["data", "options"],
  mounted() {
    this.renderChart(this.data, {
      borderWidth: "10px",
      hoverBackgroundColor: "red",
      hoverBorderWidth: "10px",
    });
  },
};
