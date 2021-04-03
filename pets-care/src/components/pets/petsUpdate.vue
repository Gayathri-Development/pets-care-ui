<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on" >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
    <!-- Form Design parts start here -->
        <div>
            <div class="form-group">
                <label for="petName"><b>Pet Name</b></label>&nbsp;&nbsp;
                <input type="text" id="name" class="form-control" style="width: 100%" />
            </div>

            <div class="form-group">
                <label for="petName"><b>Pet Name</b></label>&nbsp;&nbsp;
                <input type="text" id="name" class="form-control" style="width: 100%" />
            </div>
        </div>
        
    <!-- Form Design parts ends here -->

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
  export default {
    data: () => ({
      dialog: false,
      
    }),
  }
</script>