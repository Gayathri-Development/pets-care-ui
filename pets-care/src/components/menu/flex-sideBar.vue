<template>
  <div >
    <!-- <div class="navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a> 
      <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
      <a href="#"><i class="fa fa-fw fa-user"></i></a>
    </div> -->

    <div class="menu-items" >
        <router-link to="/" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-fw fa-home"></i></div>
        </router-link>
        <router-link to="/Pets/Create" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-user" aria-hidden="true"></i></div>
        </router-link>
        <router-link to="/Pets" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-paw" aria-hidden="true"></i></div>
        </router-link>
        <router-link to="/Doctors" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-user-md"></i></div>
        </router-link>
        <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-shopping-basket" aria-hidden="true"></i></div>
        </router-link>
        <router-link to="#" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class='fas fa-drumstick-bite'></i></div>
        </router-link>
        <!-- <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;">Pets Grooming</div>
        </router-link> -->
        <router-link to="#" active-class="active" tag="button" exact class="side-btn">
          <div class="link-container" style="font-size: 3rem;"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
        </router-link>
    </div>

    <!-- <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div> -->


  </div>
</template>

<script>

  export default {
    name: 'top-bar',
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
 body {
  font-family: "Lato", sans-serif;
}
/* menu items class definitions starts */
.title {
  color:black;
  font-size: 24px;
  margin-top: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 3px;
  
}
/* .menu-items > * {
  margin-top: 60px;
} */
.side-btn {
  border: none;
  margin-top: 20px;
  margin-left: 3px;
  margin-right: 30px;
  /* text-align: left;
  justify-content: left;
  align-items: left; */
  padding: 0px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: teal;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: blue;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: white;
}
/* menu items class definitions ends */
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  margin-top: 105px;
  background-color: white;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: black;
  display: block;
}

.sidenav a:hover {
  color: blue;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>