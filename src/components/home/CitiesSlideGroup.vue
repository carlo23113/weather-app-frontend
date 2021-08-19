<template>
  <v-slide-group class="pa-4 slide-group" active-class="success" show-arrows>
    <v-slide-item v-for="(city, i) in cities" :key="i" class="mx-4">
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }+' card'"
          @click="$emit('selected', city)"
        >
          <v-img :src="city.image_url" height="100%" />
          <div class="text">
            <h1 :class="{ 'show-btns': hover }">
              {{ city.name }}
            </h1>
          </div>
        </v-card>
      </v-hover>
    </v-slide-item>
  </v-slide-group>
</template>
<script>
export default {
  props: {
    cities: {
      type: Array,
      required: true
    },
    apiUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-weight: bold;
}
.card {
  height: 450px;
  width: 350px;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.6;
}
.show-btns {
  color: rgb(0, 0, 0) !important;
}

@media only screen and (max-width: 425px) {
  .card {
    height: 250px;
    width: 150px;
  }
}

@media only screen and (max-width: 768px) and (min-width: 425px) {
  .card {
    height: 320px;
    width: 200px;
  }
}
</style>
