<script setup>
import { ref } from 'vue';

defineProps({
  imagen: String,
  nombre: String,
  resumen: String,
  url: String,
});



const miElemento = ref(null)

function alerta(e) {
  if (miElemento.value.getAttribute("href") === "") {
    e.preventDefault();
    
    alert("No nos quizo pasar su Facebook XD")
  }
}
  
</script>
<template>
  <div class="card-person">
    <div class="imagen-container">
      <div class="imagen-fondo">
        <img
        class="imagen"
        height="150px"
        width="150px"
        :src="imagen"
        
      />
      </div>
      
      <h2 class="nombre">{{nombre}}</h2>
      <p class="semestre">8vo Semestre</p>
    </div>
    <div class="container-text">
      <div class="universidad">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
        <span>Universidad Nacional Daniel Alcides Carrión</span>
      </div>
      <p class="carrera">Administración</p>
      <p class="text">{{ resumen }}</p>
    </div>
    <div class="facebook">
      <a  @click="alerta" ref="miElemento" :href="url" target="_blank" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>
        </svg>
      </a>
    </div>
  </div>
</template>
<style scoped>
.card-person{
  background-color: #17835981;
  box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.445);
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 1.5rem;
  transition: all .4s ease-in-out;
  animation: fade both;
  animation-timeline: view();
  animation-range: entry 20% cover 40%;
  &:hover{
    transform: translateY(-.5rem);
    box-shadow: 0 0 10px 5px #3dd3449f;
  }
  &:hover .nombre{
    color: #03484c;
  }
}
@keyframes fade {
  0%{opacity: 0;transform: translateY(5rem);}
  100%{opacity: 1;transform: translateY(0%)}
}
.imagen-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
}
.imagen-fondo{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #41e04c;
  box-shadow: 0 0 8px 4px #87f18e98;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  & img{
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    scale: .9;
    border-radius: 100%;
  }
}
.nombre{
  color: white;
  transition: all .3s ease;
}
.semestre{
  background-color: #28ff5eaf;
  padding: .2rem .5rem;
  border-radius: 2rem;
  border: 1px solid #41e04c62;
  color: white;
  font-weight: 500;
  font-size: .9rem;
}

.container-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;
  margin-bottom: auto;
}
.universidad{
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
color: #41e04c;
gap: 3px;
justify-content: center;
& svg{
  width: 30px;
   height: 30px;
}
& span{
  text-align: center;
  font-size: .9rem;
  color: white;
  font-weight: 500;
}
}
.carrera{
  color: #044916;
  font-weight: 600;

}
.text{
  color: #bcffc1;
}
.facebook{
  width: 100%;
  display: flex;
  border-top: 2px solid #62e46a9a;
  padding-top: 1rem;
  justify-content: center;
  & a{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a8ffad81;
    border-radius: .6rem;
    padding: .3rem 2rem;
    border: 1px solid rgb(175, 255, 177);
    transition: all .2s ease;
    &:hover{
      background-color: #a8ffacc2;
      transform: scale(1.05);
    }
    
    &:active{
      scale: .9;
    }
  }
  & svg{
    transition: all .2s ease;
    color: #0a420e;
    width: 35px;
    height: 35px;
  }
}
@media(width < 768px){
  .universidad {
    & span{
      font-size: 1.2rem;
    }
    & svg {
      width: 40px;
      height: 40px;
    }
    
  }
  .card-person{
  
  &:hover{
    transform: none;
    box-shadow: none;
  }
  &:hover .nombre{
    color: white;
  }
}
}
</style>
