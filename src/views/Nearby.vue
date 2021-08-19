<template>
  <div style="height: 100vh">
    <v-navigation-drawer
      v-model="nav"
      width="410px"
      mobile-breakpoint
      app
      clipped
    >
      <v-list nav>
        <v-btn icon @click="$router.go(-1)"
          ><v-icon>mdi-arrow-left-thick</v-icon></v-btn
        >
        <v-list-item
          v-for="(place, i) in nearbyPlaces"
          :key="i"
          class="chat"
          router
          exact
          @click="viewVenue(place)"
        >
          <v-list-item-content style="display: flex">
            <v-list-item-title v-text="place.name" />
            <v-list-item-subtitle>{{
              formatAddress(place.location.formattedAddress)
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-icon style="float: right">mdi-directions</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <iframe
      width="100%"
      height="100%"
      style="border:0"
      loading="lazy"
      allowfullscreen
      :src="mapSrc"
    >
    </iframe>
  </div>
</template>
<script>
import { bus } from "../assets/js/bus.js";
export default {
  data: () => ({
    nearbyPlaces: [],
    city: "",
    nav: true
  }),
  computed: {
    CLIENT_ID() {
      return process.env.VUE_APP_FOURSQUARE_CLIENT_ID;
    },
    CLIENT_SECRET() {
      return process.env.VUE_APP_FOURSQUARE_CLIENT_SECRET;
    },
    mapSrc() {
      return (
        "https://www.google.com/maps/embed/v1/place?key=AIzaSyCyG9eulGcFHxnQNtehvntC9_MCac6hZO4&q=" +
        this.city +
        ",JP"
      );
    }
  },
  created() {
    this.city = this.$route.params.city;
    this.fetchPlaces();
    bus.$on("sidebar-open", value => {
      this.nav = value;
    });
  },
  methods: {
    fetchPlaces() {
      this.axios
        .get(
          "https://api.foursquare.com/v2/venues/search?client_id=" +
            this.CLIENT_ID +
            "&client_secret=" +
            this.CLIENT_SECRET +
            "&near=" +
            this.city +
            ",JP&categoryId=4deefb944765f83613cdba6e&v=20210818"
        )
        .then(result => {
          this.nearbyPlaces = result.data.response.venues;
        })
        .catch(err => {
          console.log(err.response.data);
        });
    },
    formatAddress(address) {
      return address[0] + " " + address[1] + ", " + address[2];
    },

    viewVenue(venue) {
      this.city = venue.location.city;
    }
  }
};
</script>
