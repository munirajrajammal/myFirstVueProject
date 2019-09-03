<template>
  <b-row class="d-flex justify-content-center background">
    <div class="col-8 d-flex justify-content-center firstMargin">
        <div class="registerForm"> 
          <form @submit.prevent="forgotPass">
            <b-p>Email</b-p>
            <br>
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
              class="rounded-pill btn btn-primary"
              @click="$bvToast.show('example-toast')"
              name="login">
              login
            </button>
          </form>
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


.background {
  margin: 0px;
  height: 100vh;
  font: initial;
  .firstMargin {
    font: initial;
    margin: 3.2% 0%;
    margin-bottom: 340px;
    .registerForm {
      margin: 72px 0px;
      border-radius: 20px;
      padding: 40px 75px;
      background-color: white;
      text-align: center;
      width: 750px;
      b-p {
        font-size: 70px;
        color: #9b9d9e;
      }
      ::placeholder{
        padding-left: 0px;
      }
      input {
        padding-left: 25px;
        outline: none;
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
  }
}

</style>