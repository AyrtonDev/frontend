<template>
  <div class="bg-gray-900 w-full min-h-screen flex items-center flex-col">
    <div class="max-w-6xl w-full h-auto flex flex-col">
      <Header />
      <div>
        <h2 class="text-4xl font-bold text-orange-500">Todos os filmes em um so lugar</h2>
        <categoriesCard :categories="categories" />
        <moviesCard :movies="movies" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCategories } from '@/shared/services/get-categories';
import { getMovies } from '@/shared/services/get-movies';
import categoriesCard from '@/shared/components/card/categories.vue';
import moviesCard from '@/shared/components/card/movies.vue';
import Header from '@/shared/components/header.vue';
import { ref } from 'vue';

const categories = ref<any>(null);
const movies = ref<any>(null);

const token = localStorage.getItem('token') as string;

const request = async () => {
  const resCategories = await getCategories(token)
  const restMovies = await getMovies(token)

  categories.value = resCategories
  movies.value = restMovies
}

request()

</script>

