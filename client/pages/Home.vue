<template>
   <div class="my-32">
        <h1 class="text-center text-brown" v-if="!auth.status">Auth</h1>
       <h1 class="text-center text-brown"  v-else>
           Welcome, {{ auth.user.name }}
       </h1>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>