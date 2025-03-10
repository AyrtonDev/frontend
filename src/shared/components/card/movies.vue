<template>
  <div>
    <h2 class="text-2xl font-bold text-orange-500 py-20">Filmes</h2>

    <div v-if="movies" class="grid grid-cols-3 gap-10">
      <div v-for="v in movies" :key="v.id" class="px-8 py-4 rounded-lg flex flex-col gap-10 items-center cursor-pointer" @click="clickHandler(v.id)">
        <div class="rounded-lg overflow-hidden w-48 h-48">
          <img src="https://img.freepik.com/fotos-premium/carretel-de-filme-de-oculos-3d-de-pipoca-voadora-e-ripa-em-fundo-amarelo-conceito-de-filme-de-cinema-3d_989822-1302.jpg?semt=ais_hybrid" class="w-full h-full" />
        </div>
        <span class="text-orange-400 text-lg font-bold">{{ v.title}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{ 
  movies: any;
}>();

const clickHandler = (id: number) => router.push('/filme/' + id);
</script>