<template>
<div class="mb-3"> 
 <input 
         class="w-full py-3 focus:outline-none text-brown px-2 p-3 text-xs bg-brown-lightest" 
         :placeholder='placeholder'
         :type='type'
         :name='name'
         @focus="$emit('focus')"
         @blur="$emit('blur')"
         @change="$emit('change')"
         :value:="value"
         @input="$emit('input', $event.target.value)"
         >
         <span v-if='error' class="text-xs text-red-600">{{ error }}</span>

</div>
 
</template>

<script>
export default {
 props: {
     placeholder: {
        type: String,
        required: true
     },
     type: {
         type: String,
         required: false,
         default: "text"
     },
     value: {
         type: String,
         required: false,
         default: ""
     },
     name: {
         type: String,
         required: true
     },
     error: {
         type: String,
         required: false
     }
 }
}
</script>

<style>

</style>