<template>
  <div class="w-full h-screen flex justify-center bg-gray-900 items-center gap-20 flex-col">
    <div class="flex flex-col gap-10 items-center">
      <h1 class="text-orange-400 text-5xl font-bold">Seja bem vindo {{ account.name }}</h1>
      <h3 class="text-white text-2xl font-bold">Escolha o perfil para contnuar</h3>
    </div>

    <div v-if="account">
      <div v-for="v in account.profiles" :key="v.id" >
        <Card :name="v.name" :img="v.photo" :id="v.id" />
      </div>
    </div>

    <p v-else>Carregando...</p> 
  </div>
</template>

<script setup lang="ts">
import { getAccount } from '@/shared/services/get-account';
import Card from '@/shared/components/profile/card.vue';
import { ref } from 'vue';

const account = ref<any>(null);

const token = localStorage.getItem('token') as string;
const accountData = getAccount(token)

const request = async () => {
  const response = await getAccount(token)

  account.value = response
}

request()

account.value = accountData
</script>