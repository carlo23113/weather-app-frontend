<template>
  <v-row>
    <v-col>
      <v-row>
        <v-col
          v-for="(gallery, i) in imageGallery"
          :key="i"
          class="d-flex child-flex img-item"
          cols="12" sm="3"
        >
          <v-img
            :src="gallery.image_url"
            :lazy-src="gallery.image_url"
            aspect-ratio="1"
            class="grey lighten-2 img"
            @click="index = i"
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
    </v-col>

        <vue-gallery-slideshow
        :images="images"
        :index="index"
        @close="index = null"
        ></vue-gallery-slideshow>

    <v-dialog v-model="imageViewer" width="80%">
      <v-card style="overflow: hidden">
        <v-img :src="imageSrc" :lazy-src="imageSrc" aspect-ratio="1" />
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  props: {
    imageGallery: {
      type: Array,
      required: true
    }
  },

  components: { VueGallerySlideshow },

  data: () => ({
    imageViewer: false,
    imageSrc: "",
    images: [],
    index: null
  }),

  mounted() {
    this.imageGallery.map(gallery => {
      this.images.push(gallery.image_url);
    });
  },

  methods: {
    viewImage(imageSrc) {
      this.imageSrc = imageSrc;
      this.imageViewer = true;
    }
  }
};
</script>
<style scoped>
.img-item {
  overflow: hidden;
}

.img {
  display: block;
  transition: all 1s ease;
}

.img:hover {
  cursor: pointer;
  -webkit-transform: scale(1.05);
}
</style>
