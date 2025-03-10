<template>
  <div class="w-full flex justify-end py-10">
    <Popover>
      <PopoverTrigger>
        <div class="w-12 h-12 rounded-full overflow-hidden">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" class="w-full h-full"/>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Button variant="ghost" class="w-full" @click="logout">Logout</Button>
      </PopoverContent>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from './ui/popover'
import { Button } from './ui/button';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
}
</script>