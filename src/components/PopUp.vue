<script setup>
const emit = defineEmits(["cerrarPopup", "irComentarios"]);

function handleClick() {
  emit("cerrarPopup");          
  emit("irComentarios");   
}
function cerrarPop() {
  emit("cerrarPopup");            
}

</script>
<template>
  <div class="popup">
    <svg
      @click="cerrarPop"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-x cerrar"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
    <p>¡Por favor dejanos un comentario!</p>
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
      class="icon icon-tabler icons-tabler-outline icon-tabler-message mensaje"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
      <path
        d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
      />
    </svg>
    <span @click="handleClick" >Ir a Comentar</span>
  </div>
</template>
<style scoped>
@keyframes wobble-ver-left {
  0%,
  100% {
    transform: translateY(0) rotate(0);
    transform-origin: 50% 50%;
  }
  15% {
    transform: translateY(-15px) rotate(-6deg);
  }
  30% {
    transform: translateY(10px) rotate(6deg);
  }
  45% {
    transform: translateY(-10px) rotate(-3.6deg);
  }
  60% {
    transform: translateY(5px) rotate(2.4deg);
  }
  75% {
    transform: translateY(-6px) rotate(-1.2deg);
  }
}
.popup {
  position: fixed;
  height: max-content;
  inset: 0;
  margin: auto auto 2rem auto;
  display: flex;
 

  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 25%;
  padding: 2rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, #287fb9, #07cf54);
  backdrop-filter: blur(5px);
  z-index: 2;
  & .cerrar {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    
    &:active {
      scale: 0.9;
    }
  }
  & p {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    color: black;
  }
  & .mensaje {
     animation: wobble-ver-left 1.1s infinite;
    width: 60px;
    height: 60px;
    color: #6dff7a;
  }
  & span {
    color: #ffffff;
    font-weight: 600;
    background-color: #13cc13;
    border-radius: 0.7rem;
    padding: 0.6rem 1rem;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    &:hover {
      background-color: #10a010;
    }
  }
}
@media(width < 768px){
  .popup{
    width: 60%;
    padding: 2rem 1rem 1rem 1rem;
  }
}
</style>
