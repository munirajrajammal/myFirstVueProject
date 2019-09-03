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
        padding-left: 0px;
      }
      input {
        outline: none;
        padding-left: 25px;
        border:solid 1px #ccc;
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
        background-image: linear-gradient(to right, #e1010b, #dc4d00, #d47000, #c98d00, #bea603);
      }

    }
    .ontherForm {
      text-align: center;
      margin: 0px 85px;
      padding: 25px 60px 15px 60px;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      background-image: linear-gradient(to right, #e1010b, #dc4d00, #d47000, #c98d00, #bea603);  
      line-height: 35px;
      b-p {
        font-size: 30px;
        color: #ffffff;
      }
      button {
        color: #e23d25;
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
</style>
