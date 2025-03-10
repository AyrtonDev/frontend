<template>
  <form class="flex flex-col justify-between gap-14" @submit="onSubmit">
    <div class="flex flex-col gap-5">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>E-mail</FormLabel>
          <FormControl>
            <Input type="text" placeholder="admin@admin.com" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="teste1234" v-bind="componentField"/>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <Button type="submit">Login</Button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'

import { useAuthStore } from '@/shared/stores/auth'

const authStore = useAuthStore()

const formSchema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string().min(8),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  authStore.login(values.email, values.password)
})
</script>