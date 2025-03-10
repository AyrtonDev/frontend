import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { postLogin } from '../services/post-login';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any | null>(null);
  const router= useRouter();

  
  const login = async (email: string, password: string) => {
    const response = await postLogin(email, password);

    console.log(response)

    localStorage.setItem('token', response.token);

    router.push('/perfis');
  };

 
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };


  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  }

  return { user, login, logout, isAuthenticated };
});