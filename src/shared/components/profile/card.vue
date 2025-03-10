<template>
  <div class="flex flex-col gap-10 items-center cursor-pointer" @click="clickHandler">
    <div v-if="image" class="w-56 h-56 rounded-lg overflow-hidden">
      <img :src="image"  class="w-full h-full" >
    </div>
    <span v-if="name" class="text-xl font-bold text-white">
      {{ name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{ 
  name: string; 
  img: string;
  id: number;
}>();

const image = computed(() => 
  props.img === 'teste' 
    ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' 
    : props.img
);

const clickHandler = () => {
  localStorage.setItem('profile', props.id.toString());

  router.push('/menu');
}
</script>