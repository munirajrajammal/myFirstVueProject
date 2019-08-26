<template>
  <div>
    <form @submit.prevent="rePassword">
      <b-p> PASSWORD </b-p>
      <br>
      <br>
      <b-label for>Password</b-label>
      <b-input
        id="password"
        type="password"
        minlength="3"
        maxlength="12"
        v-model="rePass.password"
        name="password"
        placeholder="Enter password"
        required
      />
      <br/>

      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
        {{ DataPassMsg }}
      </b-toast>

      <button id="butt"
      @click="$bvToast.show('example-toast')"
      name="login">
      login
      </button>

    </form>
  </div>
</template>

<script>
  import store from '../../store'
import { mapState } from 'vuex'
  export default {
    store,
    data () {
      return {
        token: '',
        rePass: {
          password: ''
        }
      }
    },
    methods: {
      rePassword () {
        // console.log('the password token ', this.$route.params.token)
        console.log('the rePassword data in front --- >> ', this.rePass)
        console.log('the tokon for passowrd data', this.$route.params.passwordToken)
        let data = { password: this.rePass.password, token: this.token }
        console.log('==>', data)
        this.$store.dispatch('repasswordstore', data)
      }
    },
    mounted () {
      console.log('the password token ', this.$route.params.passwordToken)
      this.token = this.$route.params.passwordToken
      // this.$store.dispatch('repasswordstore', passToken)
    },
    computed: {
      ...mapState(['DataPassMsg'])
    }
  }
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
} 
</style>