<script setup>
import useAuthStore from "../stores/authStore";

const login = useAuthStore().login;
</script>
<template>
  <p @click="login" class="login">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-tabler icons-tabler-filled icon-tabler-brand-google"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"
      />
    </svg>
    Iniciar Sesión
  </p>
</template>
<style scoped>
.login {
  display: flex;
  width: 100%;
  height: 100%;
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
@media (width < 768px) {
  .login {
    background-color: #0d7a8d;
    color: white;
    &:active {
      scale: 1.05;
      filter: brightness(1.2);
    }
  }
}
</style>
