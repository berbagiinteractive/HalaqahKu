<template>
  <div class="text-gray-800 bg-white bg-opacity-50 border border-gray-300 rounded-xl p-4">
     <h1 class="font-bold text-xl">{{ content.name }}</h1>
     <p class="text-gray-500">{{ content.provider }}</p>
     <hr class="-mx-4 my-4">
     <p class="text-gray-500 mb-4 text-sm">{{ content.status }}</p>
     <div class="w-24 mx-auto bg-green-500 -mb-4 rounded-t-xl h-3 text-sm"></div>
  </div>
</template>

<script>
export default {
  props : {
    content : Object
  }

}
</script>

<style>

</style>