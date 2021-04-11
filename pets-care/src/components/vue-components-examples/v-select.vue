<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        
        <!-- <v-btn color="info" @click="callApi">Alerts</v-btn>
        {{config}} -->
        <!-- <vue-dropdown @setSelectedOption="myLocalSetterFunction($event)" :config="config"></vue-dropdown>

        <dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown> -->
        

        <section>

        <b-dropdown aria-role="list">
            <template #trigger="{ active }">
                <b-button
                    label="Click me!"
                    type="is-primary"
                    :icon-right="active ? 'menu-up' : 'menu-down'" />
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>

        <b-dropdown :triggers="['hover']" aria-role="list">
            <template #trigger>
                <b-button
                    label="Hover me!"
                    type="is-info"
                    icon-right="menu-down" />
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>

        <b-dropdown disabled aria-role="list">
            <template #trigger>
                <b-button
                    label="Disabled"
                    icon-right="menu-down" />
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>

        <b-dropdown aria-role="list">
            <template #trigger>
                <p
                    class="tag is-success"
                    role="button">
                    Custom trigger
                </p>
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>

        <b-dropdown :triggers="['contextmenu']" aria-role="list">
            <template #trigger>
                <b-button
                    type="is-link"
                    label="Right click" />
            </template>


            <b-dropdown-item aria-role="listitem">Action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Another action</b-dropdown-item>
            <b-dropdown-item aria-role="listitem">Something else</b-dropdown-item>
        </b-dropdown>
    </section>


        
          <b-col md="2" style="padding-right:0px;" class="my-1">
            <select v-model="petType" class="form-control">
              <option default selected value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="cow">Cow</option>
              <option value="hen">Hen</option>
            </select>
        </b-col>

      <v-col >
        <v-select :items="options"></v-select>
      </v-col>

      <b-col md="2" style="padding-right:0px;" class="my-1">
        <div id="app">
          <h3>Pet Type</h3>
          <select v-model="petType" class="form-control">
              <!-- <option>--- Select Category ---</option> -->
              <option value="" default selected disabled>Choose</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="cow">Cow</option>
              <option value="hen">Hen</option>
          </select>
        </div>
      </b-col>

        <div>
            <vue-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
                <options>First Action</options>
                <b-dropdown-item>Second Action</b-dropdown-item>
                <b-dropdown-item>Third Action</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item active>Active action</b-dropdown-item>
                <b-dropdown-item disabled>Disabled action</b-dropdown-item>
            </vue-dropdown>
        </div>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import 'vue-select/dist/vue-select.css';

// import Vue from 'vue'

// const app = new Vue()
// app.$mount('#app')

export default {
  name: "sales",
  data() {
    return {
        options: [
          'foo',
          'bar',
          'baz'
        ],
        arrayOfObjects: [
        ],
            object: {
              name: 'Object Name',
            },

        config: {
            options: [
                {
                    value: "option A"
                },
                {
                    value: "option B"
                },
                {
                    value: "option C"
                },
            ],
            prefix: "The",
            backgroundColor: "green"
        }

    };
  },

  methods: {
          methodToRunOnSelect(payload) {
            this.object = payload;
          }
        }

};

//https://stackoverflow.com/questions/49272539/how-to-pass-value-in-v-select-in-vue
//https://renatello.com/get-selected-value-on-change-in-vuejs/
//https://buefy.org/documentation/dropdown/
</script>

<style scoped>

.tag {
        cursor: pointer;
    }

body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

h1 {
  font-size: 26px;
  font-weight: 600;
  color: #2c3e5099;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
</style>
