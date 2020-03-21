<template>
<div>
      <div v-for='message in flashMessages' :key='message.id' :class="{
       'bg-green-400': message.type === 'success',

       'bg-red-400': message.type === 'error'}"
       class="w-full h-12 text-white flex items-center justify-center" >
       {{ message.message }}
       </div>
</div>
</template>



<script>
export default {

}
</script>

<style>

</style>