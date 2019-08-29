<template>
  <div>
    <nav>
        <button @click="registerForm">Create account</button>
      </nav>
    <div class="formLogin">
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
          {{ $store.state.loginMsg.success }}
        </b-toast>


        <button
        @click="$bvToast.show('example-toast')"
        >login</button>



        <a href="http://localhost:3000/ForgotPass">forgot password</a>
        </form>
    </div>
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
      console.log('the data of registerLogin ========== ', this.loginRegister)
      this.$store.dispatch('loginForm', { data: this.loginRegister, routerData: this.$router })
      console.log('--------- ****', this.$store.state.loginMsg.success)
      // this.msgText = this.$store.state.loginMsg
    },
    registerForm () {
      this.$router.push('/')
    },
    computed: {
      ...mapState({message: 'loginMsg'})
    }
  }
}
</script>
  
<style  lang="scss" scoped>
  $Color: red;
body {
  background-color: white;
}
div{
  margin: 10px 10px;
  font-size: 30px;
}
.formLogin{
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
