<script setup>




</script>
<template>
  <div class="popup">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check-icon lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>
    <p>¡Gracias por tu Comentario!</p>
    
    
  </div>
</template>
<style scoped>

.popup {
  position: fixed;
  height: max-content;
  inset: 0;
  margin: auto auto 2rem auto;
  display: flex;
 

  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  width: 30%;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.753);
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
  
}
svg{
    color: #15801e;
}
@media(width < 768px){
  .popup{
    width: 60%;
    padding: 2rem 1rem 1rem 1rem;
  }
}
</style>
