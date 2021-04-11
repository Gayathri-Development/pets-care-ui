<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        
        <!-- <div id="app" class="container">
            <b-row>
                <b-col>
                    <b-table :items="posts" :fields="fields" >
                    <template v-slot:cell(actions)="data">
                        <b-button ><i class="fa fa-eye" aria-hidden="true" title="View" style="color: green;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                        <b-button ><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit" style="color: orange;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                        <b-button variant="danger" @click="deleteItem(data.item.id)"><i class="fa fa-trash" aria-hidden="true" title="Remove" style="color: red;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                    </template>
                    </b-table>
                </b-col>
            </b-row>
        </div> -->

<!-- <i class="fa fa-plus-circle" aria-hidden="true"></i> -->
        
        <!-- <div class="input-group-btn">
          <input type="text" id="name" class="form-control" placeholder="Search here..." />
        </div> -->
        <h2>Pets Info</h2>
        <div>
            <router-link to="/Pets/Add" tag="button" style="padding: 5px 10px 5px 850px;">
            <!-- <div class="link-container" style="font-size: 3rem;"><i class="fa fa-fw fa-home"></i></div> -->
                <div>
                    <i class="fa fa-plus-circle" aria-hidden="true" title="Add Pets" style="color: green;cursor: pointer;font-size: 1.5rem;"></i>
                </div>
            </router-link>
        </div>
        
        <div id="app" class="container">
            <b-row>
                <b-col>
                    <b-table ref="table" stacked="md" :items="resp" :fields="fields" class="table-style">
                  
                    <template v-slot:cell(petProfile)="resp">
                      <div>
                        <img v-bind:src="resp.item.petProfile" width="60" height="60"/>
                      </div>  
                      <!-- {{posts.item.petProfile}} -->
                    </template>

                    <template v-slot:cell(petName)="resp">
                      {{resp.item.petName}}
                    </template>

                    <template v-slot:cell(petType)="resp">
                      {{resp.item.petType}}
                    </template>

                    <template v-slot:cell(petFamily)="resp">
                      {{resp.item.petFamily}}
                    </template>

                    <template v-slot:cell(actions)="resp">
                        <b-button ><i class="fa fa-eye" aria-hidden="true" title="View" style="color: DodgerBlue;;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                        <router-link to="/Pets/Edit" tag="button" ><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit" style="color: Orange;cursor: pointer;"></i></router-link>&nbsp;&nbsp;
                        <b-button variant="danger" @click="deletePets(resp.item.id)"><i class="fa fa-trash" aria-hidden="true" title="Remove" style="color: red;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                    </template>
          
                    </b-table>
                </b-col>
            </b-row>
        </div>

      

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

// import petsAdd from './addPets.vue';
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
    //   filter: "",
      apiError: false,
      result: "",
      response:"",
      isBusy: false,
      resp:[],
      data:{},
      fields: [
          {
            key: 'petProfile',
            label: 'Pet Profile'
          },
          {
            key: 'petName',
            label: 'Pet Name'
          },
          {
            key: 'petType',
            label: 'Pet Type'
          },
          {
            key: 'petFamily',
            label: 'Pet Family'
          },
          {
            key: 'actions',
            label: 'Actions'
          },
          ],
    };
  },

  methods: {
    
    //remove pets from db
    deletePets(id){
      this.$confirm("Do you really want to delete?","",'warning').then(() => {
      const url = "http://localhost:5000/pets/" + id;
      return axios.delete(url);
      });
      // const index = this.pets.indexOf((x) => x.id === id);
      // this.pets.splice(index, 1);
    },

    //list pets
    async getPetDetails(){
        const res = await fetch('http://localhost:5000/pets');
        const respData = await res.json();
        this.resp = respData;
    },

    getPets(id){
      const url = 'http://localhost:5000/pets' + id;
      axios.get(url)
        .then((response) => {
            if (response.data.length === 0) { // Lets check if response contains any items
              // Do Your 'no items found' logic here
              console.log('No items found')
              return
            } else { // We have items, handle them here!
              // We have some items, lets log them
              console.log(response.data)
            }
        }).catch((error) => {
            // Catch and handle any errors here
            console.log(error)
        })
    },
    

  },
  mounted(){
    this.getPetDetails();
  }

};
</script>

