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
            <router-link to="#" tag="button" style="padding: 5px 10px 5px 850px;">
            <!-- <div class="link-container" style="font-size: 3rem;"><i class="fa fa-fw fa-home"></i></div> -->
                <div>
                    <i class="fa fa-plus-circle" aria-hidden="true" title="Add Pets" style="color: green;cursor: pointer;font-size: 1.5rem;"></i>
                </div>
            </router-link>
        </div>
        
        <div id="app" class="container">
            <b-row>
                <b-col>
                    <b-table ref="table" stacked="md" :items="posts" :fields="fields" class="table-style">
                    <!-- <template slot="petName" slot-scope="posts">
                        {{posts.petName}}
                    </template> -->
                    <template v-slot:cell(actions)="data">
                        <b-button ><i class="fa fa-eye" aria-hidden="true" title="View" style="color: DodgerBlue;;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                        <b-button ><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit" style="color: Orange;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
                        <b-button variant="danger" @click="deleteItem(data.item.id)"><i class="fa fa-trash" aria-hidden="true" title="Remove" style="color: red;cursor: pointer;"></i></b-button>&nbsp;&nbsp;
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
export default {
  name: "App",
  data() {
    return {
    //   filter: "",
      isBusy: false,
      fields: [
          {
            key: 'petName',
            label: 'Pet Name',
            //   sortable: true,
            //   sortDirection: 'desc'
          },
          {
            key: 'petType',
            label: 'Pet Type',
            //   sortable: true,
            //   sortDirection: 'desc'
          },
          {
            key: 'petFamily',
            label: 'Pet Family',
            //   sortable: true,
            //   sortDirection: 'desc'
          },
          {
            key: 'actions',
            label: 'Actions',
            //   sortable: true,
            //   sortDirection: 'desc'
          },
          ],
      posts: [
        {
            petProfile: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg',
            petName: 'Tommy',
            petType:'Dog',
            petFamily:'German Shepherd',
        },
        {
            petProfile: 'https://cdn.britannica.com/48/7148-004-6C88ACBC/Persian-cream-bicolour.jpg',
            petName: 'Tinnu',
            petType:'Cat',
            petFamily:'Longhair',
        },
        {
            petProfile: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mama%C3%AFta_%28landscape_format%29.jpg',
            petName: 'Luna',
            petType:'Cow',
            petFamily:'Cattle (Albera)',
        },
      ],
    };
  },

  

  methods: {
    deleteItem(id) {
        this.$confirm("Do you really want to delete?","",'warning').then(() => {
          const index = this.posts.indexOf((x) => x.id === id);
          this.posts.splice(index, 1);
        });
        // if(confirm("Do you really want to delete?")){
        //   const index = this.posts.indexOf((x) => x.id === id);
        //   this.posts.splice(index, 1);
        // }  
       
    },
  },
};
</script>

