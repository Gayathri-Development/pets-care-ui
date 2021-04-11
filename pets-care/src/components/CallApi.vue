<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-alert
          type="warning"
          class="mb-3"
          :value="apiError"
          outline>There was an error calling the API</v-alert>

        <h1>Call an API</h1>
        <p>The purpose of this demo app is to show how cross-origin calls can be made to an API running on a different origin.</p>
        <p>Press the button below to call the API. Without CORS, this call will fail. With CORS correctly set up, a "Hello World" message should be displayed</p>
        <v-btn color="info" @click="callApi">Call API</v-btn>

        <div v-if="result" id="server-response">
          <h2>Result</h2>
          <pre>{{ JSON.stringify(result, {}, 2) }}</pre>
        </div>

        <v-btn color="info" :to="{ name: `Users` }">Users List</v-btn>

        <!-- <li :class="`${$options.name}__navItem`">
            <router-link
              :to="{ name: `Users` }"
              :class="`${$options.name}__navLink`"
              exact-active-class="is-active">UserList</router-link>
        </li> -->
      
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

        // console.log("test")
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

