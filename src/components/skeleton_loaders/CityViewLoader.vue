<template>
  <v-container>
    <div>
      <v-row>
        <v-col>
          <v-skeleton-loader type="image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-skeleton-loader max-height="60vh" type="image" />
        </v-col>
        <v-col cols="4">
          <v-skeleton-loader type="image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-skeleton-loader height="55px" type="image" />
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="n in 8" :key="n" cols="3">
          <v-skeleton-loader max-height="60vh" type="image" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<style scoped>

.v-skeleton-loader__image.v-skeleton-loader__bone { height: 100%; }
</style>
