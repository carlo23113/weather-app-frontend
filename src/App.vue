<template>
  <v-app>
    <top-navigation />
    <v-main>
      <router-view />
    </v-main>
    <name-dialog />
  </v-app>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue';
export default {
  components: { TopNavigation },
  name: "App",
  data: () => ({
    loading: false
  }),
  
};
</script>
