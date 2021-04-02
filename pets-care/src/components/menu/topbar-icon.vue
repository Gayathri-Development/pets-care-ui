<template>
  <div >

    <!-- <div class="navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
      <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
      <a href="#"><i class="fa fa-fw fa-user" style="font-size: 1.5rem;"></i></a>
    </div> -->

    <div class="navbar">
      <a href="#"><i class="fa fa-fw fa-user" style="font-size: 1.5rem;"></i></a>
    </div>
  </div>
</template>

<script>
//https://itnext.io/build-a-vue-js-drop-down-profile-menu-component-97be8a3d2424
//https://mdbootstrap.com/docs/vue/navigation/navbar/#docsTabsOverview
//https://www.tutorialrepublic.com/codelab.php?topic=bootstrap&file=beautiful-navbar-with-menu-icons

  export default {
    name: 'top-bar',
    data() {
    return {
      petProfile: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg',
    }
    },
    // methods: {
    //   toggleNav () {
    //     this.$eventHub.$emit('toggle-nav')
    //   },
    //   toggleAside () {
    //     this.$eventHub.$emit('toggle-aside')
    //   }
    // }
  }
</script>

<style scoped>
  body {font-family: Arial, Helvetica, sans-serif;}

.navbar {
  width: 100%;
  /* height: 100px; */
  /* background-color: #555; */
  background-color: gray;
  overflow: auto;
}

.navbar a {
  float: right;
  padding: 40px;
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.navbar a:hover {
  background-color: #000;
}

.active {
  background-color: #4CAF50;
}

@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
</style>