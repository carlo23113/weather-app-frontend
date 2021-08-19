<template>
  <v-row>
    <v-col class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>FEELS LIKE</h5>
        {{ weatherToday.main.feels_like }}
      </div></v-col
    >
    <v-col cols="12" lg="2" sm="3" class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>WIND</h5>
        {{ weatherToday.wind.deg }}°
      </div></v-col
    ><v-col cols="12" lg="2" sm="3" class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>HUMIDITY</h5>
        {{ weatherToday.main.humidity }}%
      </div></v-col
    ><v-col cols="12" lg="2" sm="3" class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>PRESSURE</h5>
        {{ weatherToday.main.pressure }} mb
      </div></v-col
    ><v-col cols="12" lg="2" md="3" class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>MIN TEMP</h5>
        {{ weatherToday.main.temp_min }}°C
      </div></v-col
    ><v-col cols="12" lg="2" md="3" class="header pa-6"
      ><v-icon>mdi-thermometer</v-icon>
      <div>
        <h5>MAX TEMP</h5>
        {{ weatherToday.main.temp_max }}°C
      </div></v-col
    >
  </v-row>
</template>
<script>
export default {
    props: {
        weatherToday: {
            type: Object,
            required: true,
        }
    }
}
</script>
