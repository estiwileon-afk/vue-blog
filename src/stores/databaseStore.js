import { defineStore } from "pinia";
import { supabase } from "../utils/supabase";
import { ref } from "vue";

const useDatabaseStore = defineStore("useDatabaseStore", () => {
  const todos = ref([]);
  const comentario = ref("");
  async function getTodos(tabla) {
    const { data } = await supabase
    .from(tabla )
    .select('*')
    .order(
      'created_at',
      {ascending: false}
    )
    todos.value = data || [];
  }
  async function addComment(tabla,nombre,avatar,comentario) {
    const { data } = await supabase.from(tabla).insert([
      {
      nickname: nombre,
      avatar_url: avatar,
      content: comentario
    }
    ]);
    
    getTodos(tabla)

  }
  return {
    todos,
    getTodos,
    addComment,
    comentario
  };
});

export default useDatabaseStore;
