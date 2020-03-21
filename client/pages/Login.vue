<template>
 <div class="content mx-auto">
    <div class="max-w-xs mx-auto h-12">
      <h2 class="text-center text-lg my-16 text-gold">Login</h2>
       <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
         
        <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(login)">
          
        <validation-provider name="email" v-slot="{errors}">
          <p class="text-center text-red-600 mb-3 text-sm" v-if="errors">{{ errors[0] }}</p>
            <text-input
                    name="email"

                    :value="model.email"

                    v-model="model.email"

                    placeholder="Email"

                    type="email"

           
         />
         </validation-provider>
         <validation-provider name="password">
            <text-input 
                    name="password"

                    :value="model.password"

                    v-model="model.password"

                    placeholder="Password"

                    type="password" 
       
         />
         </validation-provider>
         <div class="my-2"><router-link class="text-blue-600 text-left text-sm hover:underline" to="/auth/password/reset">Forgot password?</router-link></div>
         <btn 
            label="Sign In"
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
import { POST_LOGIN } from '@store/auth/actions'

import formMixin from '@mixins/form'
export default {
  mixins: [formMixin],
  data: () => { 
    return {
      model: {
        email: '',
        password: '',
      },
    }

     },
    methods: {
      login() {
      this.toogleLoading()
      this.$store.dispatch(POST_LOGIN, this.model).then( response =>{
          this.toogleLoading()
          this.flash('Sign in successful')
          this.setAuth(response.data)
      })
      .catch(error => {
        this.toogleLoading()

        Object.keys(error.response.data).forEach(field => {
          this.$refs.form.setErrors({
           email: error.response.data[field]
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