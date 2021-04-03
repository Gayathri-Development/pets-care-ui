import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const UserList = () => import(`./components/User/Users.vue`);

import PageHome from './components/CallApi.vue';
import UserList from './components/User/Users.vue';
import UserCreate from './components/User/UserCreate.vue';
import UserUpdate from './components/User/UserUpdate.vue';
import petsProfile from './components/pets/petsRead.vue';
import petsCreate from './components/pets/petsCreate.vue';
import petsAdd from './components/pets/addPets.vue';
import petsList from './components/pets/pets.vue';
import petsUpdate from './components/pets/petsUpdate.vue';

export default new VueRouter({ 
  routes: [
    {
      name: `home`,
      path: `/`,
      component: PageHome,
    },
    {
      name: `UserCreate`,
      path: `/User/Create`,
      component: UserCreate,
    },
    {
      name: `UserUpdate`,
      path: `/User/Edit`,
      component: UserUpdate,
    },
    {
      name: `Users`,
      path: `/Users`,
      component: UserList,
    },
    {
      name: `Pets`,
      path: `/Pets`,
      component: petsList,
    },
    {
      name: `readPets`,
      path: `/Pets/Profiles`,
      component: petsProfile,
    },
    {
      name: `createPets`,
      path: `/Pets/Create`,
      component: petsCreate,
    },
    {
      name: `addPets`,
      path: `/Pets/Add`,
      component: petsAdd,
    },
    {
      name: `updatePets`,
      path: `/Pets/Edit`,
      component: petsUpdate,
    },
  ],
  mode: `history`,
});

// https://www.digitalocean.com/community/tutorials/vuejs-grid-component#pagination