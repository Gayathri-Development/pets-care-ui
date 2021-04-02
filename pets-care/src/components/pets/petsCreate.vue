<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <!-- <v-alert type="warning" class="mb-3" :value="apiError" outline>There was an error calling the API</v-alert> -->

        <h1>Add Pet Details</h1>
        <br />
        <div class="form-group">
          <label for="petName"><b>Pet Name</b></label>&nbsp;&nbsp;
          <br />
          <input type="text" id="name" class="form-control" v-model="userData.name" />
        </div>

        <div class="form-group">
          <label for="age">Enter your Age</label>&nbsp;&nbsp;
          <br />
          <input
            min="1"
            max="100"
            type="number"
            id="age"
            class="form-control"
            v-model.number="userData.age"
          />
        </div>

        <div class="form-group">
          <label for="message">Your Message</label>&nbsp;&nbsp;
          <br />
          <textarea
            id="message"
            type="textarea"
            rows="5"
            class="form-control"
            v-model="userData.message"
          ></textarea>
        </div>

        <v-btn color="success" @click="createUser">Create</v-btn>

        <div v-if="result" id="server-response">
          <h2>Result</h2>
          <pre>{{ JSON.stringify(result, {}, 2) }}</pre>
        </div>

        <!-- <v-alert dense border="left" type="success">
          I'm a dense alert with the
          <strong>border</strong> prop and a
          <strong>type</strong> of success
        </v-alert> -->

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "UserCreate",
  data() {
    return {
      result: String,
      userData: {
        name: "",
        age: "",
        message: "Describe your review..."
      }
    };
  },
  created() {
    this.result = null;
  },
  methods: {
    createUser() {
      this.result = this.userData;
    }
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
  /* width: auto; */
  width: 50%;
  display: inline-block;
  border-radius: 5px;
  box-shadow: 0px 3px 1px 1px #efefef;
}

input[type="text"],
[type="number"],
[type="textarea"] {
  width: 50%;
  padding: 8px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  outline: none;
}

input[type="text"],
[type="number"],
[type="textarea"]:focus {
  border: 1px solid #ccc;
}

label {
  color: black;
  padding: 8px;
  font-family: Arial;
  font-weight: bold;
}
</style>

