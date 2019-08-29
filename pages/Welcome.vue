<template>
  <b-div v-if="jwtMsg === 'welcome this page'">
    <button @click="logout">logout</button>
    <b-div class="con">
      <b-p><a href="">Welcome</a></b-p>
    </b-div>
  </b-div>
  <b-div v-else>
    <p>Do not use this page</p>
  </b-div>
</template>

<script>
import store from '../store'
import { mapState } from 'vuex'
// import { mapState } from 'vuex'
export default {
  store,
  mounted () {
    // const auth = {
    //   headers: {Authorization: localStorage.getItem('userToken')}
    // }
    let retrievedObject = localStorage.getItem('userToken')
    console.log('gggggggggggggggggggg', retrievedObject)
    // console.log('jjjjjjjjjjjjjjjjjjj', auth.headers.Authorization)
    this.$store.dispatch('verificationData', retrievedObject)
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({pageopen: 'loginMsg', jwtMsg: 'jwtMsg'})
  }
}
</script>

<style lang="scss" scoped>
  $Color: red;
body {
  background-color: white;
}
button{
  margin: 20px 20px;
  font-size: 25px;
}
.con {
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 50px;
  a{
    margin-left: 50px;
    justify-content: end;
    font-size: 50px;
    color: blue;
  }
}
p{
  font-size: 50px;
}

</style>