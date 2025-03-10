<template>
  <div class="bg-gray-900 w-full min-h-screen flex items-center flex-col">
    <div class="max-w-6xl w-full h-auto flex flex-col">
      <Header />

      <div class="flex justify-between gap-30 py-20" v-if="movie">
        <div class="rounded-lg overflow-hidden w-96 h-96">
          <img src="https://img.freepik.com/fotos-premium/carretel-de-filme-de-oculos-3d-de-pipoca-voadora-e-ripa-em-fundo-amarelo-conceito-de-filme-de-cinema-3d_989822-1302.jpg?semt=ais_hybrid" alt="imagem ilustrativa" class="w-full h-full">
        </div>
        <div class="flex flex-col gap-10 w-1/2">
          <h2 class="text-4xl font-bold text-orange-500">{{ movie.title }}</h2>

          <span class="text-2xl font-bold text-orange-500">{{ movie.describe }}</span>

          <span class="text-2xl font-bold text-orange-500">Lançamento {{ movie.year }}</span>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/shared/components/header.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { getMovieById } from '@/shared/services/get-movie-by-id';

const route = useRoute();
const id = route.params.id
const movie = ref<any>(null);

const request = async () => {
  const token = localStorage.getItem('token') as string;

  const response = await getMovieById(id as string, token)

  movie.value = response
}

onMounted(() => {
  request()
});

</script>