<script setup> 
import { ref, watch } from "vue";
import ButtonLogin from "./ButtonLogin.vue";
import useAuthStore from "../stores/authStore";
import ButtonLogout from "./ButtonLogout.vue";
import { storeToRefs } from "pinia";

let isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const emit = defineEmits(["abierto"]);

emit("abierto", isOpen.value);

watch(isOpen, () => {
  emit("abierto", isOpen.value);
});

//SUPABASE
const authStore = useAuthStore();
const { isSession } = storeToRefs(authStore);
const {isAuthReady} = storeToRefs(useAuthStore())

</script>
<template>
  <header class="header">
    <div class="title">
      <img height="40px" src="/icon.png" alt="" srcset="" />
      <p>BlogUndac</p>
    </div>
    <nav class="nav-container" :class="{ active: isOpen }">
      <RouterLink @click="toggleMenu" class="link" to="/">Inicio</RouterLink>

      <RouterLink
        @click="toggleMenu"
        :class="{ 'router-link-active': $route.path.includes('Ensayos') }"
        class="link"
        to="/Ensayos"
        >Ensayos</RouterLink
      >
      <RouterLink @click="toggleMenu" class="link" to="/NuestroEquipo"
        >Nuestro Equipo</RouterLink
      >

      <ButtonLogout v-if="isSession" class="login-movil"></ButtonLogout>
      <ButtonLogin v-else class="login-movil"></ButtonLogin>
    </nav>
    <div class="contenedor-botones">
      <div class="sesion" v-if="!isAuthReady" >
        <div class="skeleton-img"></div>
        <div class="skeleton-login"></div>
      </div>
      <div class="sesion-container" v-else>
        <ButtonLogout v-if="isSession" class="login-desk"></ButtonLogout>
        <ButtonLogin v-else class="login-desk"></ButtonLogin>
      </div>
    </div>

    <div @click="toggleMenu" class="menu">
      <svg
        v-if="isOpen"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-x"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6l16 0" />
        <path d="M4 12l16 0" />
        <path d="M4 18l16 0" />
      </svg>
    </div>
  </header>
</template>
<style scoped>
.skeleton-img,
.skeleton-login {
  position: relative;
  overflow: hidden;
}

.skeleton-img::after,
.skeleton-login::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(128, 128, 128, 0.336),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 1s infinite;
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
.skeleton-img {
  width: 24px;
  height: 24px;
  background-color: rgba(211, 211, 211, 0.568);
  border-radius: 100%;
}
.skeleton-login {
  width: calc(100% - 24px);
  height: 24px;
  background-color: rgba(211, 211, 211, 0.568);
  border-radius: 0.4rem;
}

.contenedor-botones {
  display: flex;
  height: 100%;
  width: 15%;
}
.sesion-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.sesion{
  background-color: #0d7a8d;
  width: 100%;
  padding: 0 1.1rem;
  gap: .5rem;
  align-items: center;
  border-radius: .8rem;
 display: flex;
  height: 100%;
}
.header {
  display: flex;
  padding: 0.5rem 2rem;
  height: 4rem;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  justify-content: space-between;
  gap: 1rem;
  animation: bg-change both;
  animation-timeline: scroll();
  animation-range: 0 500px;
}
@keyframes bg-change {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: rgba(3, 63, 6, 0.24);

    backdrop-filter: blur(12px);
  }
}
.title {
  color: white;
  font-weight: 700;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.nav-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.link {
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: rgba(136, 202, 127, 0.877);
  }
}

.link.router-link-active {
  color: #41e04c;
}
.login-movil {
  display: none;
}
.login-desk {
  display: flex;
}
.menu {
  display: none;
  color: white;
}

@media (width < 768px) {
  .title {
    font-size: 1.5rem;
    & img {
      width: 30px;
      height: 30px;
    }
  }
  .menu {
    display: flex;
    z-index: 2;
    transition: all 0.2s ease;
    &:active {
      scale: 0.7;
    }
  }
  .nav-container {
    position: absolute;
    background-color: #011602;
    align-items: center;
    top: 0;
    left: 0;
    padding: 3rem;
    padding-bottom: 2rem;
    flex-direction: column;
    width: 100%;
    transform: translateY(-100%);
    transition: all 0.3s ease-out;
    z-index: 1;
  }
  .link {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #41e04c;
    transition: all 0.2s ease;
    &:active {
      scale: 1.1;
    }
  }
  .active {
    transform: translateY(0%);
  }

  .login-desk {
    display: none;
  }
  .login-movil {
    display: flex;
    &:hover {
      background-color: #0d7a8d;
      color: white;
    }
  }
  .header {
    padding: 0 1.5rem;
  }
  .sesion {
    display: none;
  }
}
</style>
