<template>
  <v-slide-group>
    <v-slide-item v-for="(weather, index) in weathers" :key="index">
      <v-card color="transparent" elevation="5" class="weather-card" height="150px" width="150px">
        <div>
          <v-img
            class="ma-auto"
            width="80px"
            :src="viewTempImage(weather.main.temp)"
          />
          <h2 class="mt-4">{{ weather.main.temp }}°C</h2>
          {{ formatDate(weather.dt_txt) }}
        </div></v-card
      >
    </v-slide-item>
  </v-slide-group>
</template>
<script>
import moment from "moment";
import weather from "../../assets/js/mixins/weather.js";

export default {
  props: {
    weathers: {
      type: Array,
      required: true
    }
  },

  mixins: [weather ],

  methods: {
    formatDate(dateTime) {
      return moment(dateTime).format("MMMM DD, ha");
    },
  }
};
</script>

<style scoped>
.weather-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  text-align: center;
  margin: 7px;
}
</style>
