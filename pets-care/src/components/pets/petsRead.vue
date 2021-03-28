<template>

    <div id="profile" >
      
      <div class="row">
          <div class="column" style="width: 100%;">
            <v-container class="grey lighten-5 mb-6" >
              <v-row no-gutters style="height: 150px; width: 500px" >
                  <v-card class="pa-2" outlined tile >
                    <div>
                      <img v-bind:src="petProfile" :alt="`${petName}`" :class="petGender" width="60" height="60"/>
                    </div>            
                  </v-card>
              </v-row>
            </v-container>

            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b> {{petName}} </b>
                  </v-card>
                </v-col>
              </v-row>
              <v-responsive></v-responsive>
            </v-container>
          </div>  
        </div>
        <div class="row">
          
          <div class="column">
            <h2><b>Pet Details</b></h2><br>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Pet Type: </b> {{petType}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Pet Color: </b> {{petColor}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Pet Age: </b> {{5}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Pet Family: </b> {{petFamily}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>

          <div class="column">
          <h2><b>Owner Details</b></h2><br>
          <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Owner Name: </b> {{ownerName}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Owner Mobile: </b> {{ownerMob}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Owner Address: </b> {{ownerAddress}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>

            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Owner EmailID: </b> {{ownerEmail}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>

        </div>

        <div class="row">
          <div class="column" style="width: 100%;">
          <h2>Pet's Physical and Health Details</h2><br>
          <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Height: </b> {{petHeight}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Weight: </b> {{petWeight}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Vaccination Details: </b> {{petVaccinationDetails}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-container class="grey lighten-5">
              <v-row no-gutters >
                <v-col >
                  <v-card class="pa-2" outlined tile >
                    <b>Health Issues: </b> {{petHealthIssuesDescribe}}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
          <!-- <div class="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
          </div> -->
        </div>

  </div>
</template>

<script>
export default {
  name: 'readPets',
  data() {
    return {
        petName: 'Tommy',
        petType:'Dog',
        petdob: '10-10-2020',
        petColor:'Brown',
        petFamily:'German Shepherd',
        petGender: 'male',
        petHeight:'25 cm',
        petWeight:'70 Kg',
        petVaccinationDetails:'DHPP, Rabies, Canine Influenza, Lyme Disease taken by 4 years before',
        isPetHealthIssues:false,
        petHealthIssuesDescribe:'NA',
        petProfile: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12213218/German-Shepherd-on-White-00.jpg',
        ownerName: 'Gayathri R',
        ownerMob:'8657866540',
        ownerAddress:'Bangalore',
        ownerEmail: 'gayathri@gmail.com',
       
        alignments: [
          'start',
          'center',
          'end',
      ],
    }
  },
  // methods: {
  //   async getUser() {
  //     const res = await fetch('https://randomuser.me/api')
  //     const { results } = await res.json()

  //     // console.log(results)

  //     this.firstName = results[0].name.first
  //     this.lastName = results[0].name.last
  //     this.email = results[0].email
  //     this.gender = results[0].gender
  //     this.picture = results[0].picture.large
  //   },
  // },

}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  width: 400px;
  height: 100vh;
  margin: auto;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
}
.profile-cls{
  border-style: inset;
}
#profile {
  /* width: 50px;
  height: 100px; */
  /* margin: auto; */
  /* text-align: left; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: left; */
  align-items: left;
}
h1,
h3 {
  margin-bottom: 1rem;
  font-weight: normal;
}

img {
  border-radius: 50%;
  border: 1px #333 solid;
  margin-bottom: 1rem;
  text-align: right;
  justify-content: right;
  align-items: right;
}

.male {
  border-color: steelblue;
  background-color: steelblue;
}

.female {
  border-color: pink;
  background-color: pink;
  color: #333;
}

button {
  cursor: pointer;
  display: inline-block;
  background: #333;
  color: white;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
}

button:focus {
  outline: none;
}

button:hover {
  transform: scale(0.98);
}

* {
  box-sizing: border-box;
}

/* Create four equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 900px) {
  .column  {
    width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column  {
    width: 100%;
  }
}

</style>