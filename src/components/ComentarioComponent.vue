<script setup>
defineProps({
  avatar: String,
  nickname: String,
  content: String,
});
</script>
<template>
  <div class="comentario-container">
    <div class="header">
      <img class="imagen" :src="avatar" alt="" srcset="" />
      <span class="nombre">{{ nickname }}</span>
    </div>

    <p class="text">{{ content }}</p>
  </div>
</template>
<style scoped>
.comentario-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2rem;
  border-radius: 0.8rem;
  background-color: #32b1383a;
  border: 1px solid #59c95f49;
  gap: 1rem;
}
.header {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #32b1383a;
}
.imagen {
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 100%;
  object-fit: cover;
}
.nombre {
  font-weight: 600;
  font-size: clamp(1rem, 2vw + .4rem ,1.2rem);
  background: linear-gradient(to right, #0ea115,#1f95da);
  color: transparent;
  background-clip: text;
}
.text {
    margin-top:.4rem;
  display: flex;
  font-weight: 400;
  font-size: clamp(.8rem, 2vw + .3rem ,1rem);
}
@media(width < 768px){
  .comentario-container{
    padding: 1rem;
  }
}
</style>
