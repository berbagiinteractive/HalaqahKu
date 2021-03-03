<template>
  <div
    class="text-gray-800 bg-white bg-opacity-50 border border-gray-300 rounded-xl p-4"
  >
    <div>
      <slot></slot>
    </div>
    <div>
      <ul class="text-gray-600 text-sm">
        <li v-for="element in list" :key="element">
          <hr class="-mx-4 my-4" />
          <div>{{ element.title }}</div>
        </li>
      </ul>
      <div v-if="config.moreButton">
         <hr class="-mx-4 my-4" />
         <Button class="w-full">Selengkapnya</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../Button.vue';
export default {
  components: { Button },
  props: {
    config : Object,
    list: Array,
  },
};
</script>

<style>
</style>