<template>
  <v-app>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>HAPPY PETS CARE</span>&nbsp;
        <span class="font-weight-light">USER APPLICATION</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar> -->

    <div>
      <tobBar />
    </div>

    <div class="side-bar-menu">
      <Sidebar />
      <div class="content">
        <v-content>
          <!-- It will load the pages according to the routers set in the routers.js file -->
          <router-view></router-view>
        </v-content>
      </div>
    </div>

    <!-- <v-content>
      <router-view></router-view>
    </v-content> -->

  </v-app>
</template>

<script>
// import CallAPI from "./components/CallApi";
// import CallAPI from "./components/User/Users.vue";
// import Sidebar from "./components/menu/Sidebar.vue";
import Sidebar from "./components/menu/flex-sideBar.vue";
import tobBar from "./components/menu/Topbar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    tobBar
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.side-bar-menu {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: white;
  height: 100%;
  width: 100%;
}
</style>