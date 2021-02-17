<template>
  <div class="p-2 my-2 md:my-12">
    <ul class="flex md:block overflow-scroll rounded">

      <li class="font-bold text-lg my-3" v-for="menu in menus" :key="menu.name">
        <NuxtLink class="px-4 py-3 block w-full rounded-lg text-gray-500 leading-none" :to="menu.link">
              {{ menu.name }}
        </NuxtLink>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
         { name: '🏠 Home', link : '/dashboard/' },
         { name: '😄 Profile', link : '/dashboard/profile' },
         { name: '📖 Halaqah', link : '/dashboard/halaqah' },
         { name: '🏛 Belajar', link : '/dashboard/belajar' },
         { name: '🤝 Komunitas', link : '/dashboard/komunitas' },
      ],
    };
  },
};
</script>

<style>
.nuxt-link-exact-active {
   @apply bg-gray-400;
   @apply bg-opacity-25;
   @apply border;
   @apply border-gray-400;
   @apply border-opacity-25;
   @apply text-gray-800;
}
</style>