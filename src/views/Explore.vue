<template>
  <v-container>
    <section class="explore">
      <h1 class="my-8">Explore some of the cities in japan</h1>

      <v-row>
        <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
          <v-img
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
<script>
export default {
  created() {
    this.fetchPlaces();
  },

  methods: {
    fetchPlaces() {
      this.axios
        .get(
          "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=GDHZ2IUIPYMEUFUN3QUXHGDOKXG5A44S4QQFRWHQTSQXAXXG&client_secret=FT5EUL2MOIXSDXVEIQ413WPPZ0NUYUEFC5H5APSWHKQ2FKKO&v=20210817"
        )
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.explore {
  text-align: center;
}
</style>
