<template>
  <b-row class="d-flex justify-content-center">
    <div class="col-8 d-flex justify-content-center firstMargin">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <div class="loginForm"> 
            <form @submit.prevent="loginInsert">
              <b-p> Login </b-p>
              <br>
              <br>
              <b-input
                id="email"
                type="email"
                v-model="loginRegister.email"
                name="email"
                placeholder="Enter email"
                required
              />
              <br>
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
            <b-p id="newAccount">Are you new account</b-p>
            <br>
            <b-button pill variant="primary" @click="registerForm">Create on Account</b-button>
          </div>
        </div>
      </div>
    </div>
  </b-row>
  <!-- <b-row class="common">
    <div class="firstdiv">
      <b-row class="d-flex justify-content-center firstRow">
        
        <form @submit.prevent="loginInsert">
            <b-p> Login </b-p>
            <br>
            <br>
            <b-input
              id="email"
              type="email"
              v-model="loginRegister.email"
              name="email"
              placeholder="Enter email"
              required
            />
            <br>
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
            class="rounded-pill btn btn-primary"
            @click="$bvToast.show('example-toast')"
            >login</button>
            <br>
            <a href="http://localhost:3000/ForgotPass">forgot your password</a>
          </form>
      </b-row>
      <b-row class="d-flex justify-content-center secondRow" >
        <div>
          <b-p id="newAccount">Are you new account</b-p>
          <br>
          <b-button pill variant="primary" @click="registerForm">Create on Account</b-button>
        </div>     
      </b-row>
    </div>
  </b-row> -->
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
.firstMargin {
  margin: 5% 0%;
  .loginForm {
    background-color: blue;
    text-align: center;
    line-height: 35px;
    b-p {
      font-size: 50px;
    }
    input {
      border: none; 
      border-radius: 50px;
      width: 100%;
      height: 50px;
    }
    button {
      text-transform: capitalize;
      font-size: larger;
    }
    a {
      font-size: 20px;
    }
  }
  .registerForm {
    text-align: center;
  }
}

//   $Color: rgb(120, 78, 199);
// body {
//   background-color: white;
// }
// .common {
//   background-color: aqua;
//   margin: 5% 10%;
//   display: flex;
//   justify-content: center;
//   .firstdiv {
//     // float: left;
//     // background-color: $Color;
//     // display: flex;
//     // align-items: center;
//     margin: 2% 10%;
//     input {
//       border: none; 
//       border-radius: 50px;
//       width: 100%;
//       height: 40px;
//       }
//     .firstRow {
//       align-items: center;
//       background-color: purple;
//       b-p {
//         font-size: 50px;
//       }
//       button{
//         font-size: 18px;
//         text-transform: capitalize;
//       }
//       a{
//         font-size: 18px;
//       }
//     }
//     .secondRow {
//       margin: 0px 60px;
//       background-color: yellowgreen;
//       b-p{
//         font-size: 20px;
//       }
//     }   
//   }
// }







// div{
//   margin: 10px 10px;
//   font-size: 30px;
// }
// .formLogin{
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
//   margin-top: 50px;
//   b-p{
//     font-size: 40px;
//     color: $Color;
//     font: bold;
//   }
//   b-label{
//     color: green;
//   }
//   b-input{
//   }
  
  
// }

</style>
