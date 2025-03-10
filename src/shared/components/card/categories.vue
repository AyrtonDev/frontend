<template>
  <div>
    <h2 class="text-2xl font-bold text-orange-500 py-20">Categorias</h2>

    <div v-if="props.categories" class="flex justify-between">
      <div v-for="v in categories" :key="v.id" class="px-8 py-4 border-2 border-white rounded-lg">
        <span class="text-orange-400 text-lg font-bold">{{ v.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ 
  categories: any;
}>();
</script>