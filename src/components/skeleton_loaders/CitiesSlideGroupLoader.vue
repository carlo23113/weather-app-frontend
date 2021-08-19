<template>
  <v-slide-group class="pa-4" active-class="success" show-arrows>
    <v-slide-item v-for="n in 7" :key="n" class="mx-4">
      <v-skeleton-loader
        class="mx-4"
        width="350"
        height="450px"
        type="image"
      />
    </v-slide-item>
  </v-slide-group>
</template>
