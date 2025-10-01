<script setup>
import { useEnsayoStore } from "../stores/ensayoStore";

defineProps({
  tendencia: String,
  fecha: String,
  titulo: String,
  resumen: String,
  clave: String,
  link: String,
});
</script>
<template>
  <div class="ensayo">
    <div class="ensayo-header">
      <span>{{ tendencia }}</span>
      <div class="fecha">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="icon icon-tabler icons-tabler-filled icon-tabler-calendar-week"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 2c.183 0 .355 .05 .502 .135l.033 .02c.28 .177 .465 .49 .465 .845v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 .514 -.874l.093 -.046l.066 -.025l.1 -.029l.107 -.019l.12 -.007q .083 0 .161 .013l.122 .029l.04 .012l.06 .023c.328 .135 .568 .44 .61 .806l.007 .117v1h6v-1a1 1 0 0 1 1 -1m3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16z"
          />
          <path
            d="M9.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
          />
          <path
            d="M13.015 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
          />
          <path
            d="M17.02 13a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
          />
          <path d="M12.02 15a1 1 0 0 1 0 2a1.001 1.001 0 1 1 -.005 -2z" />
          <path
            d="M9.015 16a1 1 0 0 1 -1 1a1.001 1.001 0 1 1 -.005 -2c.557 0 1.005 .448 1.005 1"
          />
        </svg>
        <p>{{ fecha }}</p>
      </div>
    </div>
    <div class="ensayo-content">
      <h2>
        {{ titulo }}
      </h2>
      <p class="resumen">
        {{ resumen }}
      </p>
    </div>
    <div class="keys">
      <p class="key">E-commerce</p>
      <p class="key">Digital</p>
      <p class="key">{{ clave }}</p>
    </div>
    <router-link
      :to="{ name: 'LeerEnsayo', params: { id: link } }"
      class="ensayo-completo"
    >
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
        class="icon icon-tabler icons-tabler-outline icon-tabler-book-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
        <path d="M19 16h-12a2 2 0 0 0 -2 2" />
        <path d="M9 8h6" />
      </svg>
      Leer Ensayo Completo
    </router-link>
  </div>
</template>
<style scoped>
.ensayo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  border: 1px solid #81ec88be;
  border-radius: 0.5rem;
  background-color: #0f684a6b;
  backdrop-filter: blur(7px);
  padding: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover .ensayo-content h2 {
    color: #16e424;
  }
  &:hover {
    transform: translateY(-0.3rem);
  }
}
.ensayo-header {
  display: flex;
  color: #81ec88;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  & span {
    font-weight: 600;
    border: 1px solid #81ec88;
    border-radius: 1rem;
    padding: 0.3rem 0.8rem;
    font-size: clamp(0.1rem, 1vw + 0.3rem, 0.7rem);
    background-color: #01160270;
  }
}
.fecha {
  display: flex;
  align-items: end;
  gap: 0.3rem;
  & p {
    font-size: clamp(0.3rem, 2vw + 0.3rem, 1rem);
  }
}
.ensayo-content {
  margin-bottom: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  & h2 {
    transition: all 0.2s ease;
    color: white;
    font-size: clamp(1rem, 2vw + 0.9rem, 1.7rem);
  }
}
.resumen {
  font-weight: 500;
  color: #8fb394;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.keys {
  display: flex;
  gap: 0.3rem;
}
.key {
  background-color: #0f684b;
  border-radius: 0.6rem;
  border: 1px solid #8fb394;
  padding: 0.2rem 0.5rem;
  font-weight: 500;
  color: white;
  font-size: 0.7rem;
}
.ensayo-completo {
  color: white;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: #16e424;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  width: 50%;
  font-size: 1.2rem;
  text-align: center;
  align-self: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #011602;
    color: #16e424;
  }
}
@media (width < 768px) {
  .ensayo {
    padding: 1rem;
  }
  .ensayo-completo {
    width: 100%;
    font-size: 1rem;
    &:active {
      scale: 1.05;
      filter: brightness(1.2);
    }
  }
}
</style>
