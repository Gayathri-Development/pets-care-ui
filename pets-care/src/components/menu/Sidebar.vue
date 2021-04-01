<template>
  <div class="sidebar">
    <!-- <div class="title">Simple Sidebar</div> -->
    <div class="menu-items">
      <router-link to="/" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Home</div>
      </router-link>
      <router-link to="/Users" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Owners</div>
      </router-link>
      <router-link to="/User/Create" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Health Care</div>
      </router-link>
      <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Shopping</div>
      </router-link>
      <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Food</div>
      </router-link>
      <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Grooming</div>
      </router-link>
      <router-link to="/User/Edit" active-class="active" tag="button" exact class="side-btn">
        <div class="link-container">Pets Sales</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  color:black;
  font-size: 24px;
  margin-top: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 6px;
}
.menu-items > * {
  margin-top: 60px;
}
.side-btn {
  border: none;
  /* text-align: left;
  justify-content: left;
  align-items: left; */
  padding: 0px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: teal;
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
</style>