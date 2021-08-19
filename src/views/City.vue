<template>
  <div>
    <city-view-loader v-if="loading" />
    <div v-else>
      <v-container>

        <v-row>
          <v-col>
            <v-card
              class="pa-8"
              width="100%"
              :style="
                'background-image: url(' +
                  image +
                  '); color: white; background-size: cover;'
              "
            >
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="2">
                    <h1 class="my-4 header">
                      {{ city ? city.name.toUpperCase() : "" }}, JAPAN
                    </h1>
                    <v-img
                      class="mb-6"
                      width="120px"
                      :src="viewTempImage(weatherToday.main.temp)"
                    />
                    <p class="temp">{{ weatherToday.main.temp }}°C</p>
                    <h1 class="mt-8">
                      {{
                        weatherToday.weather[0].description
                          .charAt(0)
                          .toUpperCase() +
                          weatherToday.weather[0].description.slice(1)
                      }}
                    </h1>
                  </v-col>
                  <v-col cols="12" sm="10">
                    <v-row>
                      <weather-slide-group :weathers="weatherForecast.list" />
                    </v-row>

                    <weather-statistics :weather-today="weatherToday" />
                  </v-col>
                </v-row>
                <v-row> </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <v-card class="pa-4" width="100%" height="500px">
              <v-card-title>Weather Forecast Chart in °C</v-card-title>
              <forecast-chart :weathers="weatherForecast.list" />
            </v-card>
          </v-col>

          <v-col cols="12" sm="4">
            <iframe
              width="100%"
              height="500px"
              style="border:0"
              loading="lazy"
              allowfullscreen
              :src="mapSrc"
            >
            </iframe>
          </v-col>
        </v-row>

        <v-row>
          <v-btn class="ma-auto my-8" outlined large @click="viewNearby()"
            >View nearby places
            <v-icon class="ml-2" color="red">mdi-map-marker</v-icon></v-btn
          >
        </v-row>

        <gallery :image-gallery="city.gallery" />
      </v-container>
    </div>
  </div>
</template>
<script>
import WeatherSlideGroup from "../components/city/WeatherSlideGroup.vue";
import CityViewLoader from "../components/skeleton_loaders/CityViewLoader";
import WeatherMixin from "../assets/js/mixins/weather.js";
import image from "../assets/images/weather-images/sun.jpg";
import ForecastChart from "../components/city/ForecastChart.vue";
import WeatherStatistics from "../components/city/WeatherStatistics.vue";
import Gallery from "../components/city/Gallery.vue";
export default {
  data: () => ({
    nearbyPlaces: [],
    city: {},
    loading: false,
    weatherForecast: {},
    weatherToday: {},
    image,
  }),

  mixins: [WeatherMixin],

  components: {
    CityViewLoader,
    WeatherSlideGroup,
    ForecastChart,
    WeatherStatistics,
    Gallery
  },

  computed: {
    mapSrc() {
      return (
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyCyG9eulGcFHxnQNtehvntC9_MCac6hZO4&q=" +
        this.city.name +
        ",JP"
      );
    },
    apiUrl() {
      return process.env.VUE_APP_API_URL;
    }
  },

  mounted() {
    this.fetchCity();
  },

  methods: {
    fetchCity() {
      this.loading = true;
      this.axios
        .get(this.apiUrl + "/api/view-city/" + this.$route.params.id)
        .then(result => {
          this.city = result.data.city;
          this.getWeatherForeCast();
          this.getWeatherToday();
          this.fetchPlaces();
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    getWeatherToday() {
      const cityName = this.city.name.toLowerCase();
      const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
      this.axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName +
            ",JP&units=metric&appid=" +
            API_KEY
        )
        .then(result => {
          this.weatherToday = result.data;
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    getWeatherForeCast() {
      const cityName = this.city.name.toLowerCase();
      const API_KEY = process.env.VUE_APP_WEATHER_API_KEY;
      this.axios
        .get(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            cityName +
            ",JP&units=metric&appid=" +
            API_KEY
        )
        .then(result => {
          this.weatherForecast = result.data;
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },

    fetchPlaces() {
      const CLIENT_ID = process.env.VUE_APP_FOURSQUARE_CLIENT_ID;
      const CLIENT_SECRET = process.env.VUE_APP_FOURSQUARE_CLIENT_SECRET;
      this.axios
        .get(
          "https://api.foursquare.com/v2/venues/search?client_id=" +
            CLIENT_ID +
            "&client_secret=" +
            CLIENT_SECRET +
            "&near=" +
            this.city.name +
            ",JP&categoryId=4deefb944765f83613cdba6e&v=20210818"
        )
        .then(result => {
          this.loading = false;
          this.nearbyPlaces = result.data.response.venues;
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },

    viewNearby() {
      this.$router.push("/nearby/" + this.city.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.temp {
  font-size: 45pt;
}
</style>
