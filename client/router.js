import Router from 'vue-router';

import Home from '@pages/Home.vue';

import Login from '@pages/Login.vue';

import Register from '@pages/Register.vue';

import ForgotPassword from '@pages/ForgotPassword.vue'

import ResetPassword from '@pages/ResetPassword.vue'

import EmailConfirm from '@pages/EmailConfirm.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth/login',
      component: Login
    },
    {
      path: '/auth/register',
      component: Register
    },
    {
      path: '/auth/password/reset',
      component: ForgotPassword
     
    },
    {
      path: '/auth/password/reset/:token',
      component: ResetPassword
     
    },
    {
      path: '/auth/email/confirm/:token',
      component: EmailConfirm
     
    },
    {
      path: '/',
      component: Home
    }
  ]
});
