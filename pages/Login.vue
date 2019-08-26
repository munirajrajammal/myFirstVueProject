<template>
  <div>
    <form @submit.prevent="loginInsert">
      <b-p> LOGIN FORM </b-p>
      <br>
      <br>
      <b-label for>Email</b-label>
      <b-input
        id="email"
        type="email"
        v-model="loginRegister.email"
        name="email"
        placeholder="Enter email"
        required
      />
      <br/>
      <b-label for>Password</b-label>
      <b-input
        id="password"
        type="password"
        minlength="3"
        maxlength="12"
        v-model="loginRegister.password"
        name="password"
        placeholder="Enter password"
        required
      />
      <br/>


      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
        {{ loginMsg }}
      </b-toast>

      <button id="butt"
      @click="$bvToast.show('example-toast')"
      name="login">
        login
      </button>



      <a href="http://localhost:3000/ForgotPass">forgot password</a>
      </form>
  </div>
</template>

<script>
import store from '../store'
// import Vue from 'vue'
import { mapState } from 'vuex'
// import axios from 'axios'
export default {
  store,
  data () {
    return {
      loginRegister: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginInsert () {
      console.log('the data of registerLogin ', this.loginRegister)
      this.$store.dispatch('loginForm', { data: this.loginRegister, routerData: this.$router })
      // let messagedata = {
      //   loginmessage: ''
      // }
      // axios.post('http://localhost:4000/loginFormData', { userData: this.loginRegister, Router: this.$router })
      //   .then(indatass => {
      //     console.log('the back end data =========', indatass.data.data)
      //     messagedata.loginmessage = indatass.data.data.success
      // localStorage.setItem('userToken', indatass.data.data.JwtToken)
      // let retrievedObject = localStorage.getItem('userToken')
      // console.log('mmmmmmmmmmmmmmm', retrievedObject)
      // axios.interceptors.request.use((config) => {
      //   let token = localStorage.getItem('userToken')
      //   if (token) {
      //     config.headers['Authorization'] = `Bearer ${token}`
      //   }
      //   return config
      // })
      // if (indatass.data.data.success === 'Login Success') {
      //   this.$router.push('/welcome')
      // }
      // }).catch(err => {
      //   console.log('the err data ========', err)
      // })
    },
    computed: {
      ...mapState(['loginMsg'])
    }
  }
}
</script>
  
<style  lang="scss" scoped>
  $Color: red;
body {
  background-color: white;
}
div {
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
  b-p{
    font-size: 40px;
    color: $Color;
    font: bold;
  }
  b-label{
    color: green;
  }
  button{
    font-size: 20px;
  }
  a{
    margin-left: 50px;
    justify-content: end;
    font-size: 20px;
    color: blue;
  }
}

</style>
