<template>
 <div class="content mx-auto">
    <div class="max-w-xs mx-auto h-12">
      <h2 class="text-center text-lg my-16 text-gold">Reset Password</h2>
       <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
         
        <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(resetPassword)">

         <validation-provider name="password"  v-slot="{errors}">
            <text-input 
                    name="password"

                    :value="model.password"

                    v-model="model.password"

                    placeholder="New Password"

                    type="password" 

                    :error="errors[0]"
       
         />
         </validation-provider>
         <btn 
            label="Reset Password"
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
import { POST_RESET_PASSWORD } from '@store/auth/actions'

import formMixin from '@mixins/form'
export default {
  mixins: [formMixin],
  data: () => { 
    return {
      model: {
        password: '',
      },
    }

     },
    methods: {
      resetPassword() {
      this.toogleLoading()
      this.$store.dispatch(POST_RESET_PASSWORD, {
      ...this.model,
      token: this.$route.params.token
      }).then( response =>{
          this.toogleLoading()
          this.flash('You have reset your password')
          this.$router.push('/')
      })
      .catch(error => {
        this.toogleLoading()
        console.error(error)
        Object.keys(error.response.data).forEach(field => {
          this.$refs.form.setErrors({
           password: error.response.data[field]
          }
          )
        })
      })
      },
    }
  }

</script>

<style>

</style>