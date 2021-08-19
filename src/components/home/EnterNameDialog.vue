<template>
  <v-dialog v-model="dialog" fullscreen>
    <v-card class="introduction">
      <div>
        <h4>
          Hi, Please tell us how you want us to call you.
        </h4>
        <v-text-field v-model="name" color="black" width="100px"></v-text-field>
        <v-btn
          class="mt-4"
          outlined
          width="50%"
          height="55px"
          @click="enterName"
          >Enter</v-btn
        >
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
import { bus } from "../../assets/js/bus.js";

export default {
  data: () => ({
    dialog: false,
    name: ""
  }),
  created() {
    bus.$on("enter-name", () => {
      this.dialog = true;
    });
  },
  methods: {
    enterName() {
      window.localStorage.setItem("name", this.name);
      this.$store.commit("home/setName", this.name);
      this.dialog = false;
    }
  }
};
</script>
<style scoped>
.introduction {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25pt;
  text-align: center;
}
</style>