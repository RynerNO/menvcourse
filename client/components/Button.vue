<template>

  <button class="w-full  text-white rounded-sm focus:outline-none hover:bg-emarald-light text-sm" :class="{ 'bg-emerald py-4': !loading, 'bg-emarald-light cursor-not-allowed py-2': loading }">
      <loader v-if="loading"/>
      <span v-else> {{ label }}</span>
  </button>
    
</template>

<script>
export default {
 props: {
     label: {
         type: String,
         required: true
     },
     loading: {
         type: Boolean,
         required: false,
         default: false
     },
     disabled: {
         type: Boolean,
         required: false,
         default: false
     }
 }
}
</script>

<style>

</style>