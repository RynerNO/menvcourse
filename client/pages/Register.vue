<template>
  <div class="content mx-auto">
    <div class="max-w-xs mx-auto h-12">
      <h2 class="text-center text-lg my-16 text-gold">Register</h2>
       <div class="w-full bg-white shadow mt-5 rounded-sm p-8">
        <validation-observer ref="form" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(register)">
         <validation-provider name="name" rules="required|min:3" v-slot="{errors}">
         <text-input 
                    name="name"

                    :value="model.name"

                    v-model="model.name"

                    placeholder="Nickname"
                    
                    :error="errors[0]"
       
         />
         </validation-provider>
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
         <validation-provider name="password" rules="required|min:6" v-slot="{errors}">
            <text-input 
                    name="password"

                    :value="model.password"

                    v-model="model.password"

                    placeholder="Password"

                    type="password" 

                    :error="errors[0]"           
         />
         </validation-provider>
         <btn 
            label="Sign Up"
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
import {POST_REGISTER} from '@store/auth/actions'



import formMixin from '@mixins/form'
export default {
  mixins: [formMixin],
  data: () => { 
    return {
      model: {
        name: '',
        email: '',
        password: '',
      }
    }

     },
    methods: {
      register() {
      this.toogleLoading()
      this.$store.dispatch(POST_REGISTER, this.model).then(response =>{
            this.toogleLoading()
            this.flash('Succesfully registered.')
            this.setAuth(response.data)
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