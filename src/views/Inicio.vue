<script setup>

</script>
<template>
  <section class="inicio">
    <div class="container-text">
      <h1 class="title">
        <span class="title-span">Negocios</span>
        Electronicos
      </h1>
      <p class="text">
        Un espacio colaborativo donde cinco estudiantes universitarios comparten
        sus reflexiones, análisis y ensayos sobre los negocios electronicos
      </p>
    </div>
    <div class="buttons">
      <router-link to="/Ensayos" class="button left">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-file-invoice"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path
            d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
          />
          <path d="M9 7l1 0" />
          <path d="M9 13l6 0" />
          <path d="M13 17l2 0" />
        </svg>
        Explorar Ensayos</router-link
      >
      <router-link to="/NuestroEquipo" class="button right">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
        </svg>
        Conocer al Equipo
      </router-link>
    </div>
    <div class="down">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-to-arc"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3v12" />
        <path d="M16 11l-4 4l-4 -4" />
        <path d="M3 12a9 9 0 0 0 18 0" />
      </svg>
    </div>
    <div class="container-numbers">
      <div class="numbers">
        <span>Cinco</span>
        <p>Estudiantes</p>
      </div>
      <div class="numbers">
        <span>1 Curso</span>
        <p>Varias Ideas</p>
      </div>
      <div class="numbers">
        <span>Muchos</span>
        <p>Ensayos</p>
      </div>
    </div>

    <div class="porque">
      <div class="porque-text-container">
        <h2 class="porque-title">¿Por Qué BlogUndac?</h2>
        <p class="porque-text">
          Descubre las ventajas de explorar el mundo de los negocios
          electrónicos con nosotros
        </p>
      </div>
      <div class="porque-grid">
        <div class="porque-card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="90"
            height="90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-target"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          <h3>Análisis Profundo</h3>
          <p>
            Investigaciones detalladas y análisis críticos sobre las últimas
            tendencias en negocios digitales
          </p>
        </div>
        <div class="porque-card">
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-bulb"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
            <path
              d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"
            />
            <path d="M9.7 17l4.6 0" />
          </svg>
          <h3>Nueva Perspectiva</h3>
          <p>
            Enfoques innovadores desde la perspectiva de estudiantes
            universitarios
          </p>
        </div>
        <div class="porque-card">
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-chart-bar"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
            <path
              d="M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
            <path
              d="M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            />
            <path d="M4 20h14" />
          </svg>
          <h3>Casos Reales</h3>
          <p>
            Estudios de casos prácticos y ejemplos del mundo real para aplicar
            conocimientos
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.inicio {
  min-height: calc(100dvh - 4rem);
  padding: 2rem 1rem;
  padding-bottom: 5rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow-x: clip;
 
}
.container-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.title {
  
  font-size: clamp(2rem, 5vw + 1.5rem, 6rem);
  text-align: center;
  display: flex;
  font-weight: 700;
  background: linear-gradient(to right, #81ec88, #16e424);
  background-clip: text;
  color: transparent;
  flex-direction: column;
  line-height: 1.1;
}
.title-span {
  color: white;
}
.text {
  width: 50%;
  text-align: center;
  font-size: clamp(0.8rem, 2vw + 0.6rem, 1.6rem);
  color: #8fb394;
  font-weight: 500;
}
.buttons {
  width: max-content;
  display: flex;

  justify-content: center;
  gap: 2rem;
}

.button {
  padding: 1rem 2rem;
  border: 1px solid rgba(177, 177, 177, 0.24);
  border-radius: 1.1rem;
  font-weight: 500;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  font-size: 1.2rem;
}
.left {
  color: #011602;
  background-color: #41e04c;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.05;
    box-shadow: 0 19px 30px -7px #16e424;
    background-color: #81ec88;
  }
}
.right {
  background-color: rgba(59, 59, 59, 0.527);
  color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(177, 177, 177, 0.24);
    color: #011602;
    scale: 1.05;
  }
}
.down {
  color: white;
  margin-top: 0.5rem;
  animation: bounce 1.2s infinite ease-in-out;
  filter: drop-shadow(0 0 7px white) brightness(1.3);
}
.container-numbers {
  display: grid;
  width: 70%;
  justify-items: center;
  gap: 0rem;
  grid-template-columns: repeat(3, 1fr);
  animation: fade both;
  animation-timeline: view();
  animation-range: entry 30% cover 40%;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(10rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0rem);
  }
}
.numbers {
  width: max-content;
  text-align: center;
  display: flex;

  flex-direction: column;
  align-items: center;

  & span {
    font-weight: 700;
    font-size: clamp(1.5rem, 2vw + 1.5rem, 4rem);
  }
  & p {
    color: #011602;
    font-weight: 500;
    font-size: clamp(0.6rem, 2vw + 1rem, 1.3rem);
  }
}
.numbers:nth-child(1) span,
.numbers:nth-child(3) span {
  color: #41e04c;
}
.numbers:nth-child(2) span {
  color: white;
}
.porque {
  width: 100%;
  margin-top: 3rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 4rem;
}
.porque-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}
.porque-title {
  font-size: clamp(2rem, 3vw + 1rem, 2.5rem);
  color: white;
}
.porque-text {
  font-size: clamp(1.2rem, 2vw + 0.6rem, 1.6rem);
  color: #81ec88;
}
.porque-grid {
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  & .porque-card:nth-child(1) {
   
    animation: slide both;
    animation-timeline: view();
    animation-range: entry 10% cover 40%;
  }
  & .porque-card:nth-child(2) {
    scale: 0.95;
    animation: fade both;
    animation-timeline: view();
    animation-range: entry 30% cover 40%;
  }
  & .porque-card:nth-child(3) {
    animation: slide-inverse both;
    animation-timeline: view();
    animation-range: entry 10% cover 40%;
  }
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: perspective(500px) rotateY(10deg);
  }
}
@keyframes slide-inverse {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    transform: perspective(500px) rotateY(-10deg) translateX(0%);
  }
}
.porque-card {
  gap: 2rem;
  border-radius: 1rem;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  border: 1px solid #81ec88be;
  border-radius: 0.5rem;
  background-color: #0f683ca2;
  border: 2px solid rgba(130, 255, 113, 0.3);

  & svg {
    background: rgba(160, 226, 160, 0.3);
    color: #011602;
    background: linear-gradient(to right, #81ec88, #05ca12);
    border-radius: 0.8rem;
    box-shadow: 0 0 10px 5px #41e04c;
    width: 90px;
    height: 90px;
    
  }
  & h3 {
    font-size: 1.7rem;
    margin-bottom: auto;
  }
  & p {
    color: #81ec88;
    font-size: 1.1rem;
  }
}

@media (width < 768px) {
  
  .title {
    padding: 0 2rem;
  }
  .text {
    width: 80%;
  }
  .container-numbers {
    width: 90%;
    gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
  }

  .buttons {
    flex-direction: column;
  }
  .button {
    font-size: 1rem;
    padding: 0.7rem 1rem;
  }
  .porque-grid {
    gap: 3rem;
    grid-template-columns: repeat(1, 1fr);
    & .porque-card:nth-child(2) {
      transform: perspective(500px) rotateY(10deg);
      animation: slide both;
      animation-timeline: view();
      animation-range: entry 10% cover 40%;
    }
    & .porque-card:nth-child(3) {
      transform: perspective(500px) rotateY(10deg);
      animation: slide both;
      animation-timeline: view();
      animation-range: entry 10% cover 40%;
    }
  }
}
@media (height > 900px) {
  .container-numbers {
    animation: none;
  }
}
</style>
