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
        <div>
            <div class="form-group">
                <label for="petName"><b>Pet Name</b></label>
                <input type="text" id="name" class="form-control" style="width: 100%" />
            </div>

            <div class="custom-file mb-3">
                <label><b>Upload your pet's Profile picture</b></label>
                <!-- <b-form-file accept="image/*" style="width: 100%" ></b-form-file> -->
                <input type="file" style="width: 100%"  /> <br>
                <!-- <v-file-input truncate-length="15"></v-file-input> -->
            </div>
            <br><br>

            <div class="form-group">
                <label for="petType"><b>Pets Type</b></label> 
                <input type="text" id="name" class="form-control" style="width: 100%" />
            </div>

            <div class="form-group">
                <label for="petFamily"><b>Pets Family</b></label> 
                <input type="text" id="name" class="form-control" style="width: 100%" />
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
          <router-link to="/Pets" tag="button" title="Save" color="blue darken-1" text @click="dialog = false" ><i class="fa fa-check-circle" aria-hidden="true" style="color: green;cursor: pointer;font-size: 3.5rem;"></i></router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/Pets" tag="button" title="Close" color="blue darken-1" text @click="dialog = false" ><i class="fa fa-times-circle-o" aria-hidden="true" style="color: red;cursor: pointer;font-size: 3.5rem;"></i></router-link>&nbsp;&nbsp;&nbsp;&nbsp;
          <!-- <v-btn color="blue darken-1" text @click="dialog = false" >Save</v-btn> -->
        </v-card-actions>
        <!-- <br><br> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>

  export default {
    data: () => ({
      dialog: true,
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
    
  }

</script>

