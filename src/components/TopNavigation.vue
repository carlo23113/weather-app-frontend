<template>
  <v-app-bar class="app-bar" hide-on-scroll fixed app clipped-left>
    <v-container class="py-0 fill-height">
      <div
        v-if="$route.name === 'Nearby'"
        :class="open ? 'burger-menu open' : 'burger-menu'"
        @click="openSideBar()"
      >
        <div class="line" />
      </div>
      <v-spacer></v-spacer>
      <v-img
        max-width="50px"
        height="50px"
        style="cursor: pointer"
        :src="logo"
        @click="$router.push('/')"
      />
      <v-spacer></v-spacer>
      <v-btn @click="toggleDarkMode()" icon>
        <v-icon>mdi-brightness-6</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import { bus } from "../assets/js/bus.js";
import logo from "../assets/images/logo.png";
export default {
  data: () => ({
    logo,
    open: true,
    items: [
      {
        text: "HOME",
        href: "#home",
        color: null,
        light: false
      },
      {
        text: "ABOUT ME",
        href: "#about-me",
        color: null,
        light: false
      },
      {
        text: "EXPERIENCE",
        href: "#experience",
        color: null,
        light: false
      },
      {
        text: "SKILLS & EDUCATION",
        href: "#skills-education",
        color: null,
        light: false
      },
      {
        text: "PORTFOLIO",
        href: "#portfolio",
        color: null,
        light: false
      },
      {
        text: "CONTACT",
        href: "#contact",
        color: null,
        light: false
      }
    ]
  }),

  methods: {
    navigation(name) {
      this.open = false;
      for (const item of this.items) {
        item.color = null;
        item.light = false;

        if (item.text === name) {
          item.color = "#ffab00";
          item.light = true;
        }
      }
    },
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    openSideBar() {
      this.open = !this.open;
      bus.$emit("sidebar-open", this.open);
    }
  }
};
</script>
<style scoped>
.items {
  font-size: 210pt;
}
.list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  text-align: center;
}
.burger-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}
.line {
  width: 30px;
  height: 2px;
  background: rgb(0, 0, 0);
  animation: mymove 5s infinite;
  transition: all 0.5s ease-in-out;
}

.line::before,
.line::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 2px;
  background: rgb(0, 0, 0);
  transition: all 0.5s ease-in-out;
}

.line::before {
  transform: translateY(-9px);
}
.line::after {
  transform: translateY(9px);
}

.burger-menu.open .line {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.burger-menu.open .line::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.burger-menu.open .line::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>
