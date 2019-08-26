<template>
  <div>
    <form @submit.prevent="forgotPass">
      <b-p> FORGOT PASSWORD </b-p>
      <br>
      <br>
      <b-label for>Email</b-label>
      <b-input
        id="email"
        type="email"
        v-model="forgotForm.email"
        name="email"
        placeholder="Enter email"
        required
      />
      <br/>

      <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
        {{ passMsg }}
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
  import store from '../store'
  import { mapState } from 'vuex'
  export default {
    store,
    data () {
      return {
        forgotForm: {
          email: ''
        }
      }
    },
    methods: {
      forgotPass () {
        console.log('the front end forget pass data ----->>>', this.forgotForm)
        this.$store.dispatch('forgotPassData', this.forgotForm)
      }
    },
    computed: {
      ...mapState(['passMsg'])
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