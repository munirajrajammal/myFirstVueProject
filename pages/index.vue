<template>
<b-row class="d-flex justify-content-center background">
    <div class="col-8 d-flex justify-content-center firstMargin">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <div class="registerForm"> 
            <form @submit.prevent="insert" class="formForm">
              <b-p>Registration</b-p>
              <br>
              <input id="name" 
              type="text" 
              v-model="register.name" 
              name="name" 
              placeholder="Enter name" 
              required />
              <br/>

              <input
                id="email"
                type="email"
                v-model="register.email"
                name="email"
                placeholder="Enter email"
                required
              />
              <br/>

              <input
                id="password"
                type="password"
                minlength="3"
                maxlength="12"
                v-model="register.password"
                name="password"
                placeholder="Enter password"
                required
              />
              <br />

              <input
                id="conformPassword"
                type="password"
                minlength="3"
                maxlength="12"
                v-model="register.confirmPassword"
                name="conform password"
                placeholder="Enter conform password"
                required
              />
              <br />

              <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
                {{ msg }}
              </b-toast>

              <button 
              class="rounded-pill btn btn-primary"
              @click="$bvToast.show('example-toast')"
              :disabled='register.password !== register.confirmPassword'
              >Submit</button>
            </form>
          </div>
        </div>
        <div class="col-8">
          <div class="ontherForm">
            <b-p id="newAccount">Are you create account already?</b-p>
            <br>
            <b-button pill variant="primary" @click="loginbutton">login</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-row>
<!-- <div>
  <button @click="loginbutton">login</button>
  <div class="formreg">
    <form @submit.prevent="insert">
      <h1>Register Form</h1>
      <label for>Name :</label>
      <input id="name" 
      type="text" 
      v-model="register.name" 
      name="name" 
      placeholder="Enter name" 
      required />
      <br/>
      <br/>


      <label for>Email :</label>
      <input
        id="email"
        type="email"
        v-model="register.email"
        name="email"
        placeholder="Enter email"
        required
      />
      <br/>
      <br/>


      <label for>Password :</label>
      <input
        id="password"
        type="password"
        minlength="3"
        maxlength="12"
        v-model="register.password"
        name="password"
        placeholder="Enter password"
        required
      />
      <br />
      <br />


      <label for>Conform Password :</label>
      <input
        id="conformPassword"
        type="password"
        minlength="3"
        maxlength="12"
        v-model="register.confirmPassword"
        name="conform password"
        placeholder="Enter conform password"
        required
      />
      <br />
      <br />


      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
        {{ msg }}
      </b-toast>


      <button id="butt"
      name="login" 
      @click="$bvToast.show('example-toast')"
      :disabled='register.password !== register.confirmPassword'
      >Submit</button>

    </form>
  </div>
</div> -->
</template>

<script>

import store from '../store'
import { mapGetters, mapState } from 'vuex'
export default {
  store,
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    insert () {
      console.log(this.register)
      this.$store.dispatch('inserted', this.register)
    },
    loginbutton () {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'errorPass'
    ]),
    ...mapState(['msg'])
  }
}
// import axios from '~/plugins/axios'

// export default {
//   async asyncData () {
//     let { data } = await axios.get('/api/users')
//     return { users: data }
//   },
//   head () {
//     return {
//       title: 'Users'
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.background {
  margin: 0px;
  height: 100vh;
  font: initial;
  .firstMargin {
    font: initial;
    margin: 3.2% 0%;
    .registerForm {
      border-radius: 20px;
      margin: 0px 42px;
      padding: 40px 75px;
      background-color: white;
      text-align: center;
      line-height: 35px;
      .formForm {
        line-height: 75px;
      }
      b-p {
        font-size: 80px;
        color: #9b9d9e;
      }
      ::placeholder{
        padding-left: 6px;
      }
      input {
        outline: none;
        border:solid 1px #ccc;
        // border: none; 
        border-radius: 50px;
        width: 100%;
        height: 50px;
        font-size: 25px;
      }
      button {
        margin-bottom: 25px;
        text-transform: capitalize;
        font-size: larger;
        width: 100%;
        font-size: 30px;
        background: linear-gradient(90deg, #514cb2 50%  , #6f4eb3 100%);
      }
      a {
        color: #007bff;
        font-size: 30px;
      }
    }
    .ontherForm {
      text-align: center;
      margin: 0px 85px;
      padding: 25px 60px 15px 60px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      background: linear-gradient(90deg, #514cb2 50%  , #6f4eb3 100%);     
      line-height: 35px;
      b-p {
        font-size: 30px;
        color: #ffffff;
      }
      button {
        color: #694db3;
        font-size: 30px;
        background-color: #ffffff !important;
        margin-top: 30px;
        margin-bottom: 25px;
        text-transform: capitalize;
        font-size: larger;
        width: 100%;
        font-size: 30px;
      }
    }
  }
}

// $Color: red;
// body {
//   background-color: white;
// }
// div{
//   margin:  10px 10px;
//   font-size: 30px;
// }
// .formreg {
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
//   input {
//     margin-left: 10px;
//   }
//   #name {
//     margin-left: 190px;
//   }
//   #email {
//     margin-left: 193px;
//   }
//   #password {
//     margin-left: 137px;
//   }
//   h1 {
//     color: $Color;
//   }
//   label {
//     color: green;
//   }
//   button {
//     height: 45px;
//     width: 150px;
//   }
// }
/* .title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
} */
</style>
