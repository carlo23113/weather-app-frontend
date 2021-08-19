<template>
  <div class="home">
    <v-parallax :src="japan"> </v-parallax>

    <!-- <v-img max-height="100vh" max-width="100vw" :src="japan" /> -->
    <div class="welcome-text">
      <h5>Hi {{ name || userName }},</h5>
      <h1>WELCOME TO <br />JAPAN</h1>
      <v-btn to="/explore">Explore</v-btn>
    </div>

    <div class="cities">
      <h1>
        Explore some of the cities in <span style="color: red">Japan</span>
      </h1>

      <cities-slide-group-loader v-if="loading" />
      
      <cities-slide-group
        v-else
        :cities="cities"
        :api-url="apiUrl"
        @selected="viewCity"
      />
    </div>
  </div>
</template>

<script>
import japan from "../assets/images/japan.jpg";
import CitiesSlideGroup from "../components/home/CitiesSlideGroup.vue";
import CitiesSlideGroupLoader from "../components/skeleton_loaders/CitiesSlideGroupLoader.vue";
import { bus } from "../assets/js/bus.js";
export default {
  components: { CitiesSlideGroup, CitiesSlideGroupLoader },
  data: () => ({
    japan,
    dialog: true,
    cities: [],
    loading: false
  }),
  computed: {
    userName() {
      return window.localStorage.getItem("name");
    },
    name() {
      return this.$store.state.home.name;
    },
    apiUrl() {
      return process.env.VUE_APP_API_URL;
    }
  },
  mounted() {
    if (!this.userName) {
      bus.$emit("enter-name");
    }
    this.fetchCities();
  },
  methods: {
    fetchCities() {
      this.loading = true;
      this.axios
        .get(this.apiUrl + "/api/fetch-cities")
        .then(result => {
          this.cities = result.data.cities;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
          this.loading = false;
        });
    },
    viewCity(city) {
      this.$router.push("city/" + city.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.cities {
  text-align: center;
  padding: 25px;
}

.welcome-text {
  position: absolute;
  top: 25%;
  left: 20%;
  transform: translate(-50%, -50%);
  font-size: 25pt;
  line-height: 2em;
  color: white;
}

@media only screen and (max-width: 425px) {
  .welcome-text {
    top: 20%;
    left: 40%;
    transform: translate(-50%, -50%);
    font-size: 18pt;
  }

  .cities {
    h1 {
      font-size: 15pt;
    }
  }
}

@media only screen and (max-width: 768px) and (min-width: 425px) {
  .welcome-text {
    top: 23%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 22pt;
  }
}

@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .welcome-text {
    top: 19%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 25pt;
  }
}
</style>
