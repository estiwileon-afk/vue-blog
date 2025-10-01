<script setup>
import mishaImg from "../assets/misha.jpg";
import estiffImg from "../assets/estiff.jpg";
import matiasImg from "../assets/matias.jpg";
import sharlotImg from "../assets/sharlot.jpg";
import kimiImg from "../assets/kimi.jpg";
import { useRoute } from "vue-router";
import useEnsayosTexto from "../stores/ensayosTextoStore";
import ButtonLogin from "../components/ButtonLogin.vue";
import { onMounted, ref } from "vue";
import router from "../router";
import PopUp from "../components/PopUp.vue";
import useAuthStore from "../stores/authStore";
import { storeToRefs } from "pinia";
import ComentarioComponent from "../components/ComentarioComponent.vue";
import useDatabaseStore from "../stores/databaseStore";

const route = useRoute();
const ensayosTexto = useEnsayosTexto();
const rutaEnsayo = route.params.id;
const ensayo = ensayosTexto.obtenerEnsayo(rutaEnsayo);
const section2 = ref(null);
const isOpen = ref(false);
const databaseStore = useDatabaseStore();

onMounted(() => {
  databaseStore.getTodos(ensayo.tabla);
  setTimeout(() => {
    isOpen.value = true;
  }, 15000);
});

function cerrarPopup(e) {
  isOpen.value = e;
}

function irComentarios() {
  section2.value.scrollIntoView({ behavior: "smooth" });
}

const { isSession } = storeToRefs(useAuthStore());
const { avatarUrl } = storeToRefs(useAuthStore());
const { fullName } = storeToRefs(useAuthStore());
const comentario = ref("");
const { todos } = storeToRefs(databaseStore);
</script>
<template>
  <section class="ensayos">
    <Teleport to="body">
      <transition name="slide" mode="out-in">
        <PopUp
          @ir-comentarios="irComentarios"
          @cerrar-popup="cerrarPopup"
          v-if="isOpen"
        ></PopUp>
      </transition>
    </Teleport>
    <div @click="router.push('/Ensayos')" class="volver">
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
        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 14l-4 -4l4 -4" />
        <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
      </svg>
      <p>Volver Atras</p>
    </div>
    <div class="header-ensayos">
      <h1 class="title-ensayo">{{ ensayo.titulo }}</h1>
      <div class="header-sub">
        <p class="academico">
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
            class="icon icon-tabler icons-tabler-outline icon-tabler-clipboard-text"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
            />
            <path
              d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
            />
            <path d="M9 12h6" />
            <path d="M9 16h6" />
          </svg>
          Ensayo Academico
        </p>
        <p class="fecha-ensayo">
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
          {{ ensayo.fecha }}
        </p>
      </div>
    </div>
    <div class="colab-container">
      <h2 class="autores-title">Conoce a los Autores</h2>
      <div class="colab-contenedor">
        <div class="colab">
          <img
            width="50px"
            height="50px"
            class="imagen-autor"
            :src="mishaImg"
            alt=""
          />
          <p class="nombre-autor">Jordan Alejandro Chavez</p>
        </div>
        <div class="colab">
          <img
            width="50px"
            height="50px"
            class="imagen-autor"
            :src="estiffImg"
            alt=""
          />
          <p class="nombre-autor">Estiff León Yalico</p>
        </div>
        <div class="colab">
          <img
            width="50px"
            height="50px"
            class="imagen-autor"
            :src="matiasImg"
            alt=""
          />
          <p class="nombre-autor">Jair Matias Capcha</p>
        </div>
        <div class="colab">
          <img
            width="50px"
            height="50px"
            class="imagen-autor"
            :src="sharlotImg"
            alt=""
          />
          <p class="nombre-autor">Sharlot Ramos Arzapalo</p>
        </div>
        <div class="colab">
          <img
            width="50px"
            height="50px"
            class="imagen-autor"
            :src="kimiImg"
            alt=""
          />
          <p class="nombre-autor">Kimberly Suarez Davila</p>
        </div>
      </div>
    </div>
    <div class="ensayo-container">
      <h2 class="ensayo-titulo1">INTRODUCCIÓN</h2>
      <p class="ensayo-text">{{ ensayo.introduccion }}</p>
      <p class="ensayo-text">{{ ensayo.texto }}</p>
      <h3 class="ensayo-titulo1">CONCLUSIÓN</h3>
      <p class="ensayo-text">{{ ensayo.conclusion }}</p>
    </div>
    <div ref="section2" class="comentarios-container">
      <div v-if="isSession" class="unete comment">
        <div class="comment">
          <div class="usuario">
            <img
              height="40px"
              width="40px"
              class="imagen-usuario"
              :src="avatarUrl"
              alt=""
            />
            <span class="nombre-usuario">{{ fullName }}</span>
          </div>
          <div class="form">
            <textarea
              class="text-area"
              name="comment"
              id="comment-area"
              cols="100"
              rows="5"
              v-model="comentario"
              placeholder="Comparte tu opinion con todos sobre este ensayo..."
            ></textarea>
            <button
              @click.prevent="
                databaseStore.addComment(
                  ensayo.tabla,
                  fullName,
                  avatarUrl,
                  comentario
                )
              "
              :class="comentario.length > 0 ? 'active' : 'inactive'"
              class="comentar-button"
            >
              Publicar Comentario
            </button>
          </div>
        </div>
      </div>
      <div v-else class="unete">
        <div class="unete-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-login-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2"
            />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
          </svg>
        </div>
        <h4 class="unete-title">¡Únete a la conversación!</h4>
        <p class="unete-texto">
          Inicia sesión para compartir tu opinión y ser parte de este ensayo.
        </p>
        <ButtonLogin class="coment-login"></ButtonLogin>
      </div>
    </div>
    <div class="comentarios-realizados">
      <h3 class="comentario-contador">Comentarios ({{ todos.length }})</h3>
      <ComentarioComponent
        v-for="persona in todos"
        :key="persona.id"
        :avatar="persona.avatar_url"
        :nickname="persona.nickname"
        :content="persona.content"
      ></ComentarioComponent>
    </div>
  </section>
</template>
<style scoped>
.active {
  opacity: 1;
}
.inactive {
  opacity: 0.4;
  pointer-events: none;
}
.slide-leave-active,
.slide-enter-active {
  transition: all 0.6s;
}
.slide-enter-from {
  transform: translateX(100vw);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}
.ensayos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  padding: 2rem;
  padding-bottom: 5rem;
}
.volver {
  width: max-content;
  border-radius: 0.6rem;
  padding: 0.4rem 1rem;
  background-color: white;
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #16d31f;
  }
}
.header-ensayos {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  padding: 2.5rem;
  gap: 1.5rem;
}
.title-ensayo {
  font-size: clamp(1.5rem, 5vw + 0.8rem, 3rem);
  display: flex;
  font-weight: 700;
  line-height: 1.3;
  color: #011602;
  flex-direction: column;
  animation: none;
}
.header-sub {
  display: flex;
  gap: 4rem;
  font-weight: 600;
  color: #08750e;
  font-size: 1.1rem;
}
.academico {
  display: flex;
  align-items: center;
  gap: 0.3em;
  color: #1cb324;
}
.fecha-ensayo {
  display: flex;
  align-items: center;
  gap: 0.3em;
  color: #1cb324;
}
.autores-title {
  font-size: 2.6rem;
  color: #054709;
  font-weight: 800;
}
.colab-container {
  display: flex;
  border-radius: 1rem;
  background-color: white;
  padding: 3rem 2rem;
  align-items: center;
  gap: 2rem;
  flex-direction: column;
}
.colab-contenedor {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.colab {
  border: 1px solid #0c53066c;
  border-radius: 0.5rem;
  padding: 0.8rem;
  display: flex;
  background-color: #31ee0b31;
  box-shadow: 2px 2px 5px -2px rgba(10, 85, 3, 0.692);
  align-items: center;
  gap: 0.5rem;
  & img {
    aspect-ratio: 1/1;
    border-radius: 100%;

    object-fit: cover;
  }
}
.nombre-autor {
  font-weight: 600;
  font-size: 1.2rem;
  background: linear-gradient(to right, #08750e, #16d31f);
  color: transparent;
  background-clip: text;
}
.ensayo-text {
  white-space: pre-line;
  text-align: justify;
}
.ensayo-container {
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 1rem;
}
.comentarios-container {
  display: flex;
  background-color: white;
  padding: 3rem;
  border-radius: 1rem;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  align-items: center;
}
.comentario-contador {
  font-size: 1.7rem;
  margin-right: auto;
}
.unete {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #32b1383a;
  padding: 2rem;
  border: 1px solid #59c95f49;
  border-radius: 0.8rem;
  width: 100%;
}
.unete-title {
  font-size: clamp(1rem, 2vw + 0.8rem, 1.7rem);
  text-align: center;
}
.unete-texto {
  font-size: clamp(0.7rem, 2vw + 0.5rem, 1.2rem);
  text-align: center;
}
.unete-icon {
  display: flex;
  border-radius: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right bottom, #16d31f, #23cf87);
}
.coment-login {
  margin-top: 1rem;
  width: fit-content;
  background-color: #16d31f;

  color: #054709;
  &:hover {
    background-color: #043d07;
    color: white;
  }
}
.comment {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.usuario {
  display: flex;
  gap: 0.7rem;
  align-items: center;
}
.imagen-usuario {
  border-radius: 100%;
}
.nombre-usuario {
  font-weight: 600;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.text-area {
  background-color: transparent;
  border-radius: 0.8rem;
  border: 2px solid #1a881f59;
  resize: none;
  padding: 1rem;
  font-size: 1rem;
  width: 100%;
  outline-color: #15cf22;
}
.comentar-button {
  width: max-content;
  background: linear-gradient(to right, #16d31f, #23cf87);
  border: none;
  border-radius: 0.7rem;
  padding: 0.7rem 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  margin-left: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: linear-gradient(to right, #0f8f15, #189460);
  }
}
.comentarios-realizados {
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 3rem;
  gap: 1rem;
}

@media(width < 768px) {
  .ensayos {
    width: 90%;
    padding: 1rem;
    padding-inline: 0rem;
    padding-bottom: 5rem;
  }
  .header-ensayos {
    padding: 1.5rem;
  }
  .header-sub {
    flex-direction: column;
    gap: 1rem;
  }
  .autores-title {
    text-align: center;
  }
  .colab-container {
    padding: 1.5rem;
  }
  .colab-contenedor {
    grid-template-columns: repeat(1, 1fr);
  }
  .ensayo-container {
    padding: 1.5rem;
  }
  .comentarios-container {
    padding: 1.5rem;
  }
  .unete {
    gap: 0.5rem;
  }
  .comentarios-realizados{
    padding: 1.5rem;
  }
  .coment-login {
    margin-top: 0.5rem;
    width: fit-content;
    display: flex;
    padding: 0.7rem;
    justify-content: center;
    align-items: center;
  }
  .unete-icon {
    padding: 0.5rem;
    & svg {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
