<template>
  <div class="w-full h-screen flex justify-center bg-gray-900 items-center gap-10 flex-col">
    <h1 class="text-orange-400 text-5xl font-bold">Desafio Watch Brasil</h1>
    <h2 class="text-white text-3xl font-bold">Login</h2>

    <div class="w-72 h-auto rounded-lg border-2 p-8 shadow-lg shadow-gray-400 bg-white"> 
      <loginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
  import loginForm from '../shared/components/form/login-form.vue';
</script>