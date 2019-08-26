<template>
  <div>
    <b-p><a href="">Welcome</a></b-p>
  </div>
</template>

<script>
import store from '../store'
// import { mapState } from 'vuex'
export default {
  store,
  mounted () {
    let retrievedObject = localStorage.getItem('userToken')
    console.log('gggggggggggggggggggg', retrievedObject)
    this.$store.dispatch('verificationData', retrievedObject)
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
  a{
    margin-left: 50px;
    justify-content: end;
    font-size: 50px;
    color: blue;
  }
}

</style>