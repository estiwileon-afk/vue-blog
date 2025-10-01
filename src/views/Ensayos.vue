<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import PreviewEnsayos from "../components/PreviewEnsayos.vue";
import useEnsayoStore from "../stores/ensayoStore";

const activeBtn = ref("recent");

function setActive(type) {
  activeBtn.value = type;
}
const toggleButton = (e) => {
  const botones = document.querySelectorAll(".boton-ordenar");
  botones.forEach((boton) => {
    boton.classList.remove("active");
    e.currentTarget.classList.add("active");
  });
};
const ordenar = ref("recientes");
const ensayosStore = useEnsayoStore();

const ensayosOrdenados = computed(() => {
  return ordenarEnsayo();
});

function ordenarEnsayo() {
  return [...ensayosStore.ensayos].sort((a, b) => {
    return ordenar.value === "recientes"
      ? new Date(b.fecha) - new Date(a.fecha)
      : new Date(a.fecha) - new Date(b.fecha);
  });
}
ordenarEnsayo();
</script>
<template>
  <section class="ensayos">
    <div class="container-text">
      <h1 class="title">
        Nuestros
        <span class="title-span">Ensayos</span>
      </h1>
      <p class="text">
        Explora una colección diversa de ensayos académicos colaborativos que
        abordan temas importantes del curso de Negocios Electronicos desde
        perspectivas innovadoras y análisis profundos realizados por nuestro
        equipo de 5 estudiantes.
      </p>
    </div>
    <div class="ordenar">
      <p>
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
          class="icon icon-tabler icons-tabler-outline icon-tabler-calendar"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
          />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
          <path d="M11 15h1" />
          <path d="M12 15v3" />
        </svg>
        Ordenar por Fecha
      </p>
      <div class="botones-ordenar">
        <button
          @click="
            setActive('recent');
            ordenar = 'recientes';
          "
          class="boton-ordenar"
          :class="{ active: activeBtn === 'recent' }"
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
            />
            <path
              d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
            />
            <path d="M14 15l3 3l3 -3" />
            <path d="M17 18v-12" />
          </svg>
          Más Recientes
        </button>
        <button
          @click="
            setActive('oldest');
            ordenar = 'antiguos';
          "
          class="boton-ordenar"
          :class="{ active: activeBtn === 'oldest' }"
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-sort-ascending-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 9l3 -3l3 3" />
            <path
              d="M5 5m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
            />
            <path
              d="M5 14m0 .5a.5 .5 0 0 1 .5 -.5h4a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-4a.5 .5 0 0 1 -.5 -.5z"
            />
            <path d="M17 6v12" />
          </svg>
          Más Antiguos
        </button>
      </div>
    </div>
    <div class="contenedor-ensayos">
      <PreviewEnsayos
        :tendencia="ensayo.tendencia"
        :titulo="ensayo.titulo"
        :fecha="ensayo.fecha"
        :resumen="ensayo.resumen"
        :clave="ensayo.clave"
        :link="ensayo.id"
        v-for="ensayo in ensayosOrdenados"
        :key="ensayo.id"
      ></PreviewEnsayos>
    </div>
  </section>
</template>

<style scoped>
.ensayos {
  min-height: calc(100dvh - 4rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2rem 1rem;
  padding-bottom: 5rem;
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
.ordenar {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-radius: 0.6rem;
  padding: 2rem;
  font-weight: 600;
  align-items: center;
}
.ordenar p {
  font-size: 1.2rem;
  color: #81ec88;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.botones-ordenar {
  display: flex;
  gap: 2rem;
}
.boton-ordenar {
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  background-color: rgba(3, 72, 76, 0.733);
  color: rgba(255, 255, 255, 0.637);
  &:hover {
    background-color: rgba(33, 108, 112, 0.733);
    scale: 1;
    color: rgba(255, 255, 255, 0.753);
    box-shadow: 0px 5px 20px -5px #8fb394;
  }
}
.active {
  background-color: #16e424;
  color: #011602;
  scale: 1.1;
  &:hover {
    background-color: #16e424;
    scale: 1.1;
    color: #011602;
    box-shadow: 0px 5px 20px -5px #16e424;
  }
}

.contenedor-ensayos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (width < 1000px) {
  .contenedor-ensayos {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media (width < 768px) {
  .ordenar {
    flex-direction: column;
  }
  .botones-ordenar {
    flex-direction: column;
    text-align: center;
  }
  .contenedor-ensayos {
    width: 100%;
  }
  .boton-ordenar {
    font-size: 0.8rem;
  }
}
</style>
