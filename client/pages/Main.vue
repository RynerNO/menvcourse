<template >

  <div class="font-primary">
    <flash/>
    <div v-if="auth.status && !auth.user.emailConfirmedAt">
      <div class="w-full h-12 text-brown bg-gold-lightest flex items-center justify-center">
         Please confirm your account. Didn't receive an email? <span @click="resendEmailConfirmation" class="border-b-2 border-brown ml-2 hover:text-brown-darkest cursor-pointer"> Click here to resend email</span></div>
    </div>
    <div class="h-2 w-full bg-gold"></div>
    <div class="py-5 mx-10 flex items-center justify-between px-6">
      <router-link class="text-brown no-underline" to='/'>Mevn</router-link>  
      <div v-if="!auth.status">
      <router-link  class='text-brown no-underline' to='/auth/login'>Login</router-link>
      <router-link class='text-brown no-underline border-2 px-3 py-2 rounded-full border-brown hover:text-brown-darkest hover:border-brown-darkest ml-3' to='/auth/register'>Register</router-link>
      
    </div>
    <div v-else> <span class="cursor-pointer text-brown hover:text-brown-darkest" @click="unsetAuth">Logout</span> </div>  
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Flash from '@components/Flash.vue'
export default {
components: {
  Flash
}
}
</script>

<style>

</style>