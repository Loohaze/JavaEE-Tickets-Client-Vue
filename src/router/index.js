import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/user/Login.vue'
import UserRegister from '../components/user/UserRegister.vue'
import VenueRegister from '../components/venue/VenueRegister.vue'
import VerifyEmail from '../components/user/Verify.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/user-register',
      name: 'UserRegister',
      component: UserRegister
    },
    {
      path: '/user/verifyEmail/:username/:token',
      name: 'VerifyEmail',
      component: VerifyEmail
    },
    {
      path:'/venue-register',
      name: 'VenueRegister',
      component: VenueRegister
    }
  ]
})
