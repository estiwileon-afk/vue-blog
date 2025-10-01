<script setup>

import { storeToRefs } from 'pinia';
import useAuthStore from '../stores/authStore';


const authStore = useAuthStore()

const logOut = authStore.logOut
const {avatarUrl} = storeToRefs(authStore)


</script>
<template>
  <p @click="logOut" class="login">
    <img class="imagen" height="24px" width="24px" :src="avatarUrl"  alt="">
    Cerrar Sesión
  </p>
</template>
<style scoped>
.login {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  background-color: #0d7a8d;
  color: white;
  padding: 0.8rem 1rem;
  line-height: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1em;
  border-radius: 0.8rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: white;
    color: #035707;
  }
}
.imagen{
  border-radius: 100%;
}
@media (width < 768px) {
  .login {
    background-color: #0d7a8d;
    color: white;
    &:active {
      scale: 1.05;
      filter: brightness(.8);
    }
    
  }
}
</style>
