<template>
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
    }
  },
  computed: {
    ...mapGetters([
      'errorPass'
    ]),
    ...mapState(['msg'])
  }
}




// console.log('state array length ', state.stateErrData[state.stateErrData.length - 1])
      // let statelen = state.stateErrData.length - 1
      // console.log('state length value -1 of data', statelen)
      // console.log('success result in payload************', payload)
      // if (payload === 'Register Success') {
      //   state.stateErrData.push(payload)
      // }


//   console.log('error result in payload********', payload)
    //   // console.log('success data in payload', state.stateErrData)
    //   // if (payload === 'success') {
    //   //   if (state.stateErrData <= 1) {
    //   //     state.stateErrData.push(payload)
    //   //   }
    //   // } else {
    //   console.log('state array length ', state.stateErrData[state.stateErrData.length - 1])
    //   if (payload === 'user already exist') {
    //     state.stateErrData.push(payload)
    //   }
    //   // }











// errorPass () {
//   return this.$store.state.stateErrData
// },
// getTemp () {
//   return this.store.getters.errorPass()
// }
</script>

<style lang="scss" scoped>
$Color: red;
body {
  background-color: white;
}
div {
  display: flex;
  justify-content: center;
  font-size: 30px;
  input {
    margin-left: 10px;
  }
  #name {
    margin-left: 190px;
  }
  #email {
    margin-left: 193px;
  }
  #password {
    margin-left: 137px;
  }
  h1 {
    color: $Color;
  }
  label {
    color: green;
  }
  button {
    height: 45px;
    width: 150px;
  }
}
</style>

