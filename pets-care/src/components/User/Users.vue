<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1>User List</h1>
        <br />
        <v-data-table height="100%" :headers="headers" :items="usersinfo" :items-per-page="5" class="elevation-1"></v-data-table>
        
        <div id="server-response">
          <h2>Result</h2>
          <pre>{{ JSON.stringify(usersinfo, {}, 2) }}</pre>
        </div>

        <!-- <v-btn color="info" @click="callApi">Test</v-btn>

        <div v-if="result" id="server-response">
          <h2>Result</h2>
          <pre>{{ JSON.stringify(result, {}, 2) }}</pre>
        </div>-->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      headers: [
        { text: "User's Name", value: "name" },
        { text: "Age", value: "age" }
      ],
      usersinfo: [
        { name: "Gayathri", age: "22" },
        { name: "Anu", age: "22" }
      ],
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
      fetch("http://localhost:8085/UserService/User/")
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

