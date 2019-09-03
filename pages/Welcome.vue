<template>
  <b-row class="d-flex justify-content-center background">
    <div class="col-8 d-flex justify-content-center firstMargin">
      <div class="row d-flex justify-content-center">
        <div class="loginForm">
            <div v-if="jwtMsg === 'welcome this page'">
                <button @click="logout"
                class="rounded-pill btn btn-primary"
                >logout</button>
                <h1>Welcome</h1>
            </div>
            <div v-else>
              <p>Do not use this page</p>
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
  methods: {
    logout () {
      console.log('llllllllllllllllllloooooooooooo', this.localStorage)
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted () {
    let retrievedObject = localStorage.getItem('userToken')
    console.log('gggggggggggggggggggg', retrievedObject)
    this.$store.dispatch('verificationData', retrievedObject)
  },
  computed: {
    ...mapState({pageopen: 'loginMsg', jwtMsg: 'jwtMsg'})
  }
}
</script>

<style lang="scss" scoped>
.background {
  height: 100vh;
  margin: 0px;
  font: initial;
  .firstMargin {
    margin: 6% 0%;
    .loginForm {
      background-color: white;
      height: 260px;
      padding: 40px 75px;
      border-radius: 20px;
      text-align: center;
      line-height: 35px;
    }
    button {
      margin: 10px;
      margin-top: 35px;
      border-radius: 50px;
      text-transform: capitalize;
      font-size: larger;
      font-size: 30px;
      background-image: linear-gradient(to right, #e1010b, #dc4d00, #d47000, #c98d00, #bea603);
    }
  }
}
</style>