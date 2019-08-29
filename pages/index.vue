<template>
<div>
  
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
</div>
  <!-- <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </section> -->
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

$Color: red;
body {
  background-color: white;
}
div{
  margin:  10px 10px;
  font-size: 30px;
}
.formreg {
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
