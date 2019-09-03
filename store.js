import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from 'vue-router'
Vue.use(Vuex)
Vue.use(axios)
Vue.use(router)
// const namespaced = true
export default new Vuex.Store({
  // namespaced,
  state: {
    Reg: [],
    stateErrData: [],
    msg: '',
    backendMsg: '',
    loginMsg: '',
    passMsg: '',
    DataPassMsg: '',
    jwtMsg: ''
  },
  mutations: {
    inserted (state, payload) {
      console.log('iiiiiinsert', payload)
      state.Reg.push(payload)
    },
    successDataFunction (state, payload) {
      console.log('result success of payload ---- >>>>', payload)
      // alert(payload)
      state.msg = payload
    },
    // errDataFun (state, payload) {
    //   // alert(payload)
    //   state.msg = payload
    // },
    activeTokenSuccessMutation (state, payload) {
      console.log('the back end payload message .....', payload)
      state.backendMsg = payload
    },
    loginFormMsg (state, payload) {
      console.log('the login form message payload ======******---- >>> ', payload)
      state.loginMsg = payload
    },
    PassWordMutation (state, payload) {
      state.passMsg = payload
    },
    rePassWordMutation (state, payload) {
      state.DataPassMsg = payload
    },
    jwtToken (state, payload) {
      console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', payload)
      state.jwtMsg = payload
    }
  },
  getters: {
    errorPass (state) {
      // console.log('state array length getters .......', state.stateErrData[state.stateErrData.length - 1])
      let arrraylengthvalue = state.stateErrData[state.stateErrData.length - 1]
      console.log('before return ', arrraylengthvalue)
      // return arrraylengthvalue
    }
  },
  actions: {
    inserted ({ commit }, data) {
      console.log('data is the front end', data)
      let res = {
        msg: ''
      }
      axios.post('http://localhost:4000/register', data)
        .then(indata => {
        // console.log('Inserted', indata.data.data)
          // if (indata.data.data === 'Register Success') {
          commit('inserted', data)
          res.msg = indata.data.data
          commit('successDataFunction', res.msg)
          console.log('backend data success', res.msg)
          // console.log(this.state.Reg)
          // } else {
          //   console.log('error is backend', indata.data.data)
          //   // var errdata = indata.data.data
          //   res.msg = indata.data.data
          //   commit('errDataFun', res.msg)
          // }
        }).catch(err => {
          console.log('error is backend', err)
          // var errdata = indata.data.data
          res.msg = err
          commit('successDataFunction', res.msg)
        })
    },
    activedToken ({commit}, data) {
      let resbackend = {
        backendMsg: ''
      }
      console.log('active token front end data ......', data)
      axios.post('http://localhost:4000/activeToken', { activationToken: data })
        .then(indatas => {
          // console.log('the back end activated success message ........', indatas.data.data)
          // if (indatas.data.data === 'activatedSuccess') {
          resbackend.backendMsg = indatas.data.data
          console.log('the back end responce of assign data........', resbackend.backendMsg)
          commit('activeTokenSuccessMutation', resbackend.backendMsg)
          // } else {
          // console.log('backend activated error', indatas.data.data)
          // resbackend.backendMsg = indatas.data.data
          // commit('activeTokenSuccessMutation', resbackend.backendMsg)
          // }
        }).catch(err => {
          console.log('backend activated error', err)
          resbackend.backendMsg = err
          commit('activeTokenSuccessMutation', resbackend.backendMsg)
        })
    },
    loginForm ({commit}, {data, routerData}) {
      let loginMessage = {
        loginMsg: ''
      }
      console.log('front end login data .... ', data)
      console.log('the front end router data============', routerData)
      axios.post('http://localhost:4000/loginFormData', data)
        .then(indataLogin => {
          console.log('the data login back end ===============', indataLogin.data.data)
          // console.log('the token of jwt=======', indataLogin.data.data.JwtToken)
          loginMessage.loginMsg = indataLogin.data.data
          localStorage.setItem('userToken', indataLogin.data.data.JwtToken)
          if (indataLogin.data.data.success === 'Login Success') {
            routerData.push('/welcome')
          }
          commit('loginFormMsg', loginMessage.loginMsg)
          console.log('========================', loginMessage.loginMsg)
        }).catch(err => {
          console.log('the error data of back end ;;;;;;;;;;;;;;;;;', err.data.data)
          loginMessage.loginMsg = err.data.data
          commit('loginFormMsg', loginMessage.loginMsg)
        })
    },
    forgotPassData ({commit}, data) {
      let passMess = {
        passMsg: ''
      }
      console.log('the front end data of forgot password', data)
      axios.post('http://localhost:4000/forgetPassForm', data)
        .then(passData => {
          console.log('the back end data==============', passData.data.data)
          passMess.passMsg = passData.data.data
          commit('PassWordMutation', passMess.passMsg)
        }).catch(err => {
          passMess.passMsg = err
          console.log('the back end err data ;;;;;;;;;;;;;;;;', err)
          commit('PassWordMutation', passMess.passMsg)
        })
    },
    repasswordstore ({commit}, data) {
      let dataMess = {
        DataPassMsg: ''
      }
      console.log('the front end data repassword ', data)
      axios.post('http://localhost:4000/rePasswordData', data)
        .then(rePassData => {
          console.log('the back end data', rePassData.data.data)
          dataMess.DataPassMsg = rePassData.data.data
          commit('rePassWordMutation', dataMess.DataPassMsg)
        }).catch(err => {
          dataMess.DataPassMsg = err
          console.log('the back end err data', err)
          commit('rePassWordMutation', dataMess.DataPassMsg)
        })
    },
    verificationData ({commit}, data) {
      // console.log('the front end data of verification/', data.)
      let config = {
        headers: {
          authorization: localStorage.getItem('userToken')
        }
      }
      axios.get('http://localhost:4000/verificationData', config)
        .then(backendData => {
          console.log(' jjjjjjjjjjjjjjjjjjjjjjj', backendData.data.msg)
          commit('jwtToken', backendData.data.msg)
        }).catch(err => {
          console.log('', err)
        })
    }
  }
})
