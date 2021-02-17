<template>
  <div>
     <div class="blur fixed inset-0" style="z-index: -20"></div>
     <div class="base fixed inset-0" style="z-index: -91"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.blur {
  background: rgba(255, 255, 255, 0.9);
}
.base {
  background: url(https://images.unsplash.com/photo-1590075865003-e48277faa558?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(50px);
}
</style>