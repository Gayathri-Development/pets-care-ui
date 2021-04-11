<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700px" >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" >
          Open Dialog
        </v-btn>
      </template> -->
      <v-card>
        <v-card-title>
          <span class="headline"><b>Add New Pets</b></span>
        </v-card-title>
        <v-card-text>

    <!-- Form Design parts start here -->
     
     <!-- <v-btn color="info" @click="getPetDetails">Pets</v-btn> -->
    <!-- {{result}}
    {{response}} -->

        <div>
            <div class="form-group">
                <label for="petName"><b>Pet Name</b></label>
                <input type="text" id="name" class="form-control" style="width: 100%" v-model="data.petName" />
            </div>

            <div class="custom-file mb-3">
                <label><b>Upload your pet's Profile picture</b></label>
                <input type="file" style="width: 100%" @change="previewFiles"/> <br>
            </div>
            <br><br>

            <div class="form-group">
                <label for="petType"><b>Pets Type</b></label> 
                <input type="text" id="name" class="form-control" style="width: 100%" v-model="data.petType"  />
            </div>

            <div class="form-group">
                <label for="petFamily"><b>Pets Family</b></label> 
                <input type="text" id="name" class="form-control" style="width: 100%" v-model="data.petFamily"  />
            </div>

                <!-- <label for="petType"><b>Pets Type</b></label> -->
                <!-- <v-container fluid>
                    <v-row align="center">
                        <v-col class="d-flex" cols="12" sm="6" >
                            <v-select :items="items"></v-select>
                        </v-col>
                    </v-row>
                </v-container> -->
                <!-- <input type="text" id="name" class="form-control" style="width: 100%" /> -->
                
        </div>
    <!-- Form Design parts ends here -->

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <router-link to="/Pets" tag="button" title="Save" color="blue darken-1" text @click="dialog = false" ><i class="fa fa-check-circle" aria-hidden="true" style="color: green;cursor: pointer;font-size: 3.5rem;"></i></router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/Pets" tag="button" title="Close" color="blue darken-1" text @click="dialog = false" ><i class="fa fa-times-circle-o" aria-hidden="true" style="color: red;cursor: pointer;font-size: 3.5rem;"></i></router-link>&nbsp;&nbsp;&nbsp;&nbsp; -->
          <v-btn color="success" @click="addNewPets">Save</v-btn>&nbsp;&nbsp;&nbsp;&nbsp;
          <!-- <v-btn color="info" @click="getPetDetails">Pets</v-btn> -->
          <!-- <v-btn color="blue darken-1" text @click="dialog = false" >Save</v-btn> --> 
          <!-- && dialog = false -->
        </v-card-actions>
        <!-- <br><br> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  import axios from 'axios';

  export default {
    data: () => ({
      dialog: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      data:{
        petName: '',
        petProfile:'',
        petType:'',
        petdob: '',
        petColor:'',
        petFamily:'',
        petGender: '',
        petHeight:'',
        petWeight:'',
      },
      resp:{},
      apiError: false,
      result: ""
      // response:""
    }),

    // created() {
    //     this.apiError = false;
    //     this.result = null;
    //   },

    methods: {
  
      //add pets
      addNewPets(){
        this.dialog = false;
        const url = "http://localhost:5000/pets";
        return axios.post(url,this.data)
      },

      //read pets profile
      previewFiles(event) {
        this.data.petProfile = event.target.files[0]
        console.log(this.data.petProfile);
        this.fileToDataURI(this.data.petProfile);
        // console.log("dataURI to file");
        // var fileIcon = this.dataURItoFile('base64DataIage','cat.jpeg');
        // console.log(fileIcon);
      },
      
      //File to data url
      fileToDataURI (imgFile) {
        var reader = new FileReader()
        reader.readAsDataURL(imgFile)
        reader.onload = () => {
          console.log('file to DataURI result:' + reader.result)
          this.data.petProfile = reader.result
        }
      },

      //DataURI to file conversion
      dataURItoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
      },
      
    }
    
  }

</script>

