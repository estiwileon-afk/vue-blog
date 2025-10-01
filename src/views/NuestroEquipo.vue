<script setup>
import CardPerson from '../components/CardPerson.vue';
import mishaImg from '../assets/misha.jpg';
import estiffImg from '../assets/estiff.jpg';
import matiasImg from '../assets/matias.jpg';
import sharlotImg from '../assets/sharlot.jpg';
import kimiImg from '../assets/kimi.jpg';
</script>
<template>
  <section class="equipo">
    <div class="container-text">
      <h1 class="title">
        Nuestro
        <span class="title-span">Equipo</span>
      </h1>
      <p class="text">
        Conoce a los cinco estudiantes de octavo semestre de la Universidad
        Nacional Daniel Alcides Carrión que conforman este espacio de reflexión
        académica. Estamos iniciando nuestro camino en la publicación de ensayos
        universitarios, aportando perspectivas frescas desde diferentes áreas de
        los negocios electronicos
      </p>
    </div>
    <div class="grids">
      <div class="grid">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-book"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
          <path d="M3 6l0 13" />
          <path d="M12 6l0 13" />
          <path d="M21 6l0 13" />
        </svg>
        <span>5</span>
        <p>Estudiantes</p>
      </div>
      <div class="grid">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-award"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
          <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
          <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
        </svg>
        <span>Muchos</span>
        <p>Ensayos</p>
      </div>
      <div class="grid">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          <path
            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
          />
        </svg>
        <span>1</span>
        <p>Universidad</p>
      </div>
      <div class="grid">
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-school"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </svg>
        <span>8vo</span>
        <p>Semestre</p>
      </div>
    </div>
    <div class="nosotros">
      <CardPerson :imagen="mishaImg" nombre="Jordan Alejandro" resumen="Estudiante de administración dedicado y responsable, comprometido con su formación profesional. Se destaca por su disciplina, liderazgo y capacidad para trabajar en equipo, siempre buscando superarse y aportar soluciones eficaces tanto en el ámbito académico como en su vida personal." url="https://www.facebook.com/share/16ELem7Mm2/"></CardPerson>
      <CardPerson :imagen="estiffImg" nombre="Estiff León" resumen="Estudiante de administración apasionado por la tecnologia. En su tiempo libre explora el desarrollo web, buscando aplicar soluciones digitales innovadoras tanto en proyectos personales como en el ámbito administrativo." url="https://www.facebook.com/estiff.leon"></CardPerson>
      <CardPerson :imagen="matiasImg" nombre="Jair Matias" resumen="Estudiante de administración responsable con sus tareas y compromisos. Sabe cumplir con sus obligaciones y mantener un buen equilibrio entre sus estudios y su vida personal, destacando por su confiabilidad y actitud relajada frente a los desafíos." url=""></CardPerson>
      <CardPerson :imagen="sharlotImg" nombre="Sharlot Ramos" resumen="Estudiante de administración creativa y sociable, que nunca deja de cumplir con lo importante. Le gusta conectar con las personas, enfrentar los retos con una sonrisa y darle un toque único y espontáneo a todo lo que hace." url="https://www.facebook.com/share/14N8QqRseas/"></CardPerson>
      <CardPerson :imagen="kimiImg" nombre="Kimberly Suarez" resumen="Estudiante de administración entusiasta, apasionada por la organización y el diseño. Disfruta integrar su propio estilo en cada iniciativa, aportando creatividad y elegancia tanto a sus proyectos académicos como personales." url="https://www.facebook.com/share/16xYBP2MS4/"></CardPerson>
    </div>
  </section>
</template>
<style scoped>
.equipo {
  min-height: calc(100dvh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  padding-bottom: 5rem;
  overflow-x: clip;
}
.container-text {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  text-align: center;
}
.title {
  font-size: clamp(1.5rem, 5vw + 2rem, 6rem);
  text-align: center;
  display: flex;
  font-weight: 700;
  line-height: 1.3;
  color: white;
  flex-direction: column;
}
.title-span {
  background: linear-gradient(to right, #81ec88, #16e424);
  background-clip: text;
  color: transparent;
}
.text {
  font-size: clamp(0.6rem, 2vw + 0.8rem, 1.5rem);
  font-weight: 500;
  color: #8fb394;
}
.grids {
  width: 90%;
  margin-top: 3rem;
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: 1px solid #81ec889a;
  width: 100%;
  padding: 1rem;
  height: 10rem;
  border-radius: 0.5rem;
  text-align: center;
  background-color: #16e4243b;
  & svg {
    color: #16e424;
    height: 3rem;
    width: 3rem;
  }
  & span {
    font-size: 1.7rem;
    font-weight: 700;
    color: white;
  }
  & p {
    font-size: 1.2rem;
    font-weight: 500;
    color: #81ec88;
  }
}
@keyframes slide-1 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes slide-2 {
  0% {
    transform: translateX(120%);
  }
  100% {
    transform: translateX(0%);
  }
}
.nosotros{
  margin-top: 3rem;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
}

@media (width < 1000px) {
  .grids {
    grid-template-columns: repeat(2, 1fr);
  }
  .nosotros{
    grid-template-columns: repeat(2, 1fr);
  }

}
@media (width < 768px) {
  .grids {
    grid-template-columns: repeat(1, 1fr);
    & .grid:nth-child(1) {
      animation: slide-1 both;
      animation-timeline: view();
      animation-range: entry 0% cover 50%;
    }
    & .grid:nth-child(2) {
      animation: slide-1 both;
      animation-timeline: view();
      animation-range: entry 10% cover 50%;
    }
    & .grid:nth-child(3) {
      animation: slide-1 both;
      animation-timeline: view();
      animation-range: entry 10% cover 50%;
    }
    & .grid:nth-child(4) {
      animation: slide-1 both;
      animation-timeline: view();
      animation-range: entry 10% cover 40%;
    }
  }
  .grid {
    width: 70%;
    height: max-content;
    padding: 3rem 2rem;
  }
  .nosotros{
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
