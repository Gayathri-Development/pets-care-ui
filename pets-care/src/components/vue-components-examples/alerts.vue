<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        
        <v-btn color="info" @click="callApi">Alerts</v-btn>
        <br><br>
        <h3><b>Outlined</b> type alerts</h3><br>

        <!-- Alerts For Warning -->
        <v-alert type="warning" class="mb-3" :value="apiError" outline>I'm a dense alert with the <strong>border</strong> prop and a <strong>type</strong> of warning</v-alert>
        <!-- Alerts For info -->
        <v-alert type="info" class="mb-3" :value="apiError" outline>I'm a dense alert with a <strong>type</strong> of info</v-alert>
        <!-- Alerts For success -->
        <v-alert type="success" class="mb-3" :value="apiError" outline>I'm a dense alert with a <strong>type</strong> of success</v-alert>
        <!-- Alerts For error -->
        <v-alert type="error" class="mb-3" :value="apiError" outline>I'm a dense alert with a <strong>type</strong> of error</v-alert>
        

        <!-- Alerts For Warning -->
        <v-alert type="warning" class="mb-3" :value="apiError" >I'm a dense alert with the <strong>border</strong> prop and a <strong>type</strong> of warning</v-alert>
        <!-- Alerts For info -->
        <v-alert type="info" class="mb-3" :value="apiError" >I'm a dense alert with a <strong>type</strong> of info</v-alert>
        <!-- Alerts For success -->
        <v-alert type="success" class="mb-3" :value="apiError" >I'm a dense alert with a <strong>type</strong> of success</v-alert>
        <!-- Alerts For error -->
        <v-alert type="error" class="mb-3" :value="apiError" >I'm a dense alert with a <strong>type</strong> of error</v-alert>
        
        <div>
    <v-alert
      border="left"
      colored-border
      type="success"
      color="deep-purple accent-4"
      elevation="2" :value="apiError"
      
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>
    <v-alert
      border="top"
      colored-border
      type="info"
      elevation="2" :value="apiError"
    >
      Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
    </v-alert>
    <v-alert
      border="bottom"
      colored-border
      type="warning"
      elevation="2" :value="apiError"
    >
      Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
    </v-alert>
    <v-alert
      border="right"
      colored-border
      type="error"
      elevation="2" :value="apiError"
    >
      Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
    </v-alert>
  </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import users from './components/User/Users.vue';
export default {
  name: "CallAPI",
  data() {
    return {
      apiError: Boolean,
      result: String
    };
  },
  created() {
    this.apiError = false;
    this.result = null;
  },
  methods: {
    callApi() {
      fetch("http://localhost:8085/UserService/User/Gayathri.R")
        .then(async response => {
          if (response.ok) {
            this.apiError = false;
            this.result = await response.json();
          } else {
            this.apiError = true;
          }
        })
        .catch(() => (this.apiError = true));
    }
    //call api ends

    // postApi() {
    //   fetch("http://localhost:8085/UserService/User", {
    //     // Adding method type
    //     method: "POST",
    //     // Adding body or contents to send
    //     body: JSON.stringify({
    //       name: "Gayu",
    //       age: "22"
    //       // userId: 1
    //     }),
    //     // Adding headers to the request
    //     headers: {
    //       "Content-type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Headers": "origin, content-type, accept, authorization",
    //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    //       "Access-Control-Allow-Credentials": "true"
    //     }
    //   })
    //     // Converting to JSON
    //     .then(response => response.json())
    //     this.result = response.json()
    //     // Displaying results to console
    //     .then(json => console.log(json));
    // }
    //postApi ends
  }
};
</script>

<style>
#server-response {
  margin-top: 2rem;
}

#server-response pre {
  padding: 20px;
  border: 1px solid #cdcdcd;
  width: auto;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 3px 1px 1px #efefef;
}
</style>

