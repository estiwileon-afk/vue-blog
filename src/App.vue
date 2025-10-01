<script setup>

import { RouterView } from "vue-router";

import HeaderComponent from "./components/HeaderComponent.vue";
import {  ref, watch } from "vue";
import FooterComponent from "./components/FooterComponent.vue";


function crearParticulas() {
  const body = document.body;
  let cantidad;
  if (window.innerWidth < 720) {
    cantidad = 15;
  } else {
    cantidad = 25;
  }
  for (let index = 0; index < cantidad; index++) {
    const particula = document.createElement("div");

    //Tamaño
    const tamaño = Math.floor(Math.random() * (12 - 8 + 1) + 8);

    particula.style.width = `${tamaño}px`;
    particula.style.height = `${tamaño}px`;
    //Posicion
    const posicionX = Math.floor(Math.random() * (96 - 2 + 1) + 2);
    const posicionY = Math.floor(Math.random() * (96 - 5 + 1) + 5);

    particula.style.top = `${posicionY}vh`;
    particula.style.left = `${posicionX}%`;
    body.style.position = "relative";
    particula.classList.add("particula");
    body.appendChild(particula);
  }
}

const abierto = ref(false);
function obtenerabierto(e) {
  abierto.value = e;
}
watch(abierto, (nuevoValor) => {
  if (window.innerWidth < 720) {
    document.body.style.overflowY = nuevoValor ? "hidden" : "";
  }
});
const router = useRouter()
crearParticulas();

import { useRouter } from "vue-router";
import { supabase } from "./utils/supabase";
import useDatabaseStore from "./stores/databaseStore";

  
</script>

<template>
  <HeaderComponent @abierto="obtenerabierto"></HeaderComponent>
  <main class="main">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </main>
  <FooterComponent></FooterComponent>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  opacity: 0;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.main {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.scroll {
  overflow-y: hidden;
}

.particula {
  background: linear-gradient(to bottom right, #11d622ce, #079b07ce);
  z-index: -1;
  border-radius: 100%;
  filter: brightness(1.6);
  position: absolute;
  box-shadow: 0 0px 6px 4px #0f9130;
  opacity: .6;
  animation: bounce 4s infinite ease-in-out;
}
@media (width < 768px) {
  .particula {
    scale: 0.8;
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0rem);
  }
  50% {
    transform: translateY(-1rem);
  }
}
</style>
