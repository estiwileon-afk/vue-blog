<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import { supabase } from "../utils/supabase";
import useAuthStore from "../stores/authStore";

const ruta = useRoute();
const router = useRouter();
const authStore = useAuthStore();

onMounted(async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session?.user) {
    authStore.user = session.user;
  }
  const redirectTo = ruta.query.redirectTo;
  router.replace(redirectTo);
  if (!window.location.pathname.includes("redirectTo")) {
    router.replace('/');
  }
});
</script>

<template>
  <div>
    <Teleport to="body">
      <div class="overlay">
        <div class="loader"></div>
        <p class="mensaje">Validando sesión... 😎</p>
      </div>
    </Teleport>
  </div>
</template>
<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3rem;
  overflow-y: hidden;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  background: rgb(255, 255, 255);
}

.loader {
  width: 40px;
  height: 40px;
  position: relative;
  --c: no-repeat linear-gradient(#25b09b 0 0);
  background: var(--c) center/100% 10px, var(--c) center/10px 100%;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--c) 0 0, var(--c) 100% 0, var(--c) 0 100%, var(--c) 100% 100%;
  background-size: 15.5px 15.5px;
  animation: l16 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes l16 {
  33% {
    inset: -10px;
    transform: rotate(0deg);
  }
  66% {
    inset: -10px;
    transform: rotate(90deg);
  }
  100% {
    inset: 0;
    transform: rotate(90deg);
  }
}

.mensaje {
  font-size: 1.5rem;
  color: #00463b;
  font-weight: 500;
}
</style>
