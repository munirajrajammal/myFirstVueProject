<template>
  <b-row class="d-flex justify-content-center background">
    <div class="col-8 d-flex justify-content-center firstMargin">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <div class="loginForm"> 
            <form @submit.prevent="loginInsert">
              <b-p> Login </b-p>
              <br>
              <b-input
                class="firstInput"
                id="email"
                type="email"
                v-model="loginRegister.email"
                name="email"
                placeholder="Enter email"
                required
              />
              <br>
              <b-input
                id="passwordData"
                type="password"
                minlength="3"
                maxlength="12"
                v-model="loginRegister.password"
                name="password"
                placeholder="Enter password"
                required
                />
              <br/>
              <input type="checkbox" @click="checkBoxData" id="showPass"/>
              <br>
              <label>Show password</label>
              <br>
              <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
                {{ $store.state.loginMsg.success }}
              </b-toast>
              
              <button
              class="rounded-pill btn btn-primary"
              @click="$bvToast.show('example-toast')"
              >login</button>
              <br>
              <a href="http://localhost:3000/ForgotPass">forgot your password</a>
            </form>
          </div>
        </div>
        <div class="col-8">
          <div class="registerForm">
            <b-p id="newAccount">Are you new account here?</b-p>
            <br>
            <b-button pill variant="primary" @click="registerForm">Create on Account</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'
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
    },
    registerForm () {
      this.$router.push('/')
    },
    checkBoxData () {
      var checkData = document.querySelector('#passwordData')
      if (checkData.getAttribute('type') === 'password') {
        checkData.setAttribute('type', 'text')
      } else {
        checkData.setAttribute('type', 'password')
      }
      this.passwordFaild = this.passwordFaild === 'password' ? 'password' : 'text'
    },
    computed: {
      ...mapState({message: 'loginMsg'})
    }
  }
}
</script>
  
<style  lang="scss" scoped>
.background {
  margin: 0px 0px;
  height: 100%;
  font: initial;
  .firstMargin {
    font: initial;
    margin: 3% 0%;
    .loginForm {
      border-radius: 20px;
      margin: 0px 42px;
      padding: 40px 75px;
      background-color: white;
      text-align: center;
      line-height: 35px;
      b-p {
        font-size: 80px;
        color: #9b9d9e;
      }
      .firstInput{
          margin-top: 31px;
      }
      ::placeholder {
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
      #showPass {
        margin-top: 0px;
        width: 20px !important;
      }
      button {
        margin-bottom: 25px;
        text-transform: capitalize;
        font-size: larger;
        width: 100%;
        font-size: 30px;
        background-image: linear-gradient(to right, #e1010b, #dc4d00, #d47000, #c98d00, #bea603);
      }
      a {
        color: #c09f24;
        font-size: 30px;
      }
    }
    .registerForm {
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
