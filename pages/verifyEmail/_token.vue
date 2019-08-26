<template>
  <div>
    <h1> verification  </h1>
    <button v-if="backendMsg === 'activatedSuccess'">
      <nuxt-link class="button" to="/Login">Click this</nuxt-link>
      </button>
  </div>
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
    // methods: {
    // insert () {
    //   console.log(this.activetoken)
    // }
    // },
  }
</script>

<style lang="scss" scoped>

</style>