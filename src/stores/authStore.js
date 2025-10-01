import { defineStore } from "pinia";
import { supabase } from "../utils/supabase";
import { computed, ref } from "vue";

const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isSession = ref(false);
  const isAuthReady = ref(null)
  const avatarUrl = computed(() => user.value?.user_metadata?.avatar_url);
  const fullName = computed(() => user.value?.user_metadata?.full_name);
  async function login() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.href,
      },
    });

    return { data, error };
  }

  async function logOut() {
    const { data } = await supabase.auth.signOut();
  }

  supabase.auth.onAuthStateChange((event, session) => {
    isSession.value = session?.user;
    user.value = session?.user;
   
   
    isAuthReady.value = true; 
  
   
  });

  return {
    user,
    login,
    logOut,
    isSession,
    avatarUrl,
    fullName,
    isAuthReady
  };
});
export default useAuthStore;
