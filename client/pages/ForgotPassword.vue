<template>
 <div class="content mx-auto">
    <div class="max-w-xs mx-auto h-12">
      <h2 class="text-center text-lg my-16 text-gold">Reset Password</h2>
       <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(forgotPassword)">
        <validation-provider name="email" rules="required|email" v-slot="{errors}">
            <text-input
                    name="email"

                    :value="model.email"

                    v-model="model.email"

                    placeholder="Email"

                    type="email"

                    :error="errors[0]"
           
         />
         </validation-provider>
         <btn 
            label="Send Reset Link"
            :disabled='loading'
            :loading='loading'
            type="submit"
         />
         </form>
         </validation-observer>
    </div>
   

    </div>
  </div>
</template>

<script>
import { POST_FORGOT_PASSWORD } from '@store/auth/actions'

import formMixin from '@mixins/form'
export default {
  mixins: [formMixin],
  data: () => { 
    return {
      model: {
        email: ''
      },
    }

     },
    methods: {
      forgotPassword() {
      this.toogleLoading()
      this.$store.dispatch(POST_FORGOT_PASSWORD, this.model).then( response =>{
          this.toogleLoading()
          this.flash('Password reset link sent. It expires in 5 minutes')
          this.$router.push('/')
      })
      .catch(error => {
        this.toogleLoading()

        Object.keys(error.response.data).forEach(field => {
          this.$refs.form.setErrors({
            [field]: error.response.data[field]
          })
        })
      })
      },
    }
  }

</script>

<style>

</style>