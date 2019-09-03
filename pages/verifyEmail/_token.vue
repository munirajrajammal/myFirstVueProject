<template>
  <b-row class="d-flex justify-content-center background">
    <div class="col-8 d-flex justify-content-center firstMargin">
      <div class="row d-flex justify-content-center">
        <div class="loginForm">
            <p> Verification</p>
            <button v-if="backendMsg === 'activatedSuccess'">
              <nuxt-link class="button" to="/Login">Click this</nuxt-link>
            </button>
        </div>
      </div>
    </div>
  </b-row>
</template>

<script>
  import store from '../../store'
import { mapState } from 'vuex'

  export default {
    store,

    mounted () {
      let activetoken = this.$route.params.token
      console.log('veriable actived token ', activetoken)
      this.$store.dispatch('activedToken', activetoken)
    },
    computed: {
      ...mapState(['backendMsg'])
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
    margin: 6% 0%;
    .loginForm {
      height: 260px;
      border-radius: 20px;
      margin: 0px 42px;
      padding: 40px 75px;
      background-color: white;
      text-align: center;
      line-height: 35px;
      p {
        font-size: 80px;
        color: #9b9d9e;
      }
      button {
        margin-top: 65px;
        border-radius: 50px;
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