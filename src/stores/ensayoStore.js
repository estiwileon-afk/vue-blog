import { defineStore } from "pinia";
import { reactive } from "vue";

export const useEnsayoStore = defineStore("useEnsayoStore", () => {
  const ensayos = reactive([
    {
      id: "Tendencias Ecommerce",
      ruta: "Ensayo1",
      tendencia: "Tendencias E-Commerce",
      clave: "Tendencia",
      titulo:
        "Las Tendencias Ecommerce en 2025: ¿Qué Podemos Esperar del Comercio Electrónico en el Futuro?",
      fecha: "2025-09-17",
      resumen:
        "El ecommerce del futuro en 2025 estará marcado por la inteligencia artificial, personalización, experiencias inmersivas, compras por voz y móvil, y un enfoque en la sostenibilidad y la confianza del cliente.",
    },
    {
      id: "Estado Comercio Electronico",
      ruta: "Ensayo2",
      tendencia: "E-Commerce en 2025",
      clave: "Realidad",
      titulo:
        "El Estado del Comercio Electrónico Global en 2025: Datos, Claves, Tendencias y Previsiones",
      fecha: "2025-09-17",
      resumen:
        "El comercio electrónico en 2025 se ha consolidado como pilar de la economía global, impulsado por el auge del comercio móvil, la inteligencia artificial, la realidad aumentada y el comercio social. China y Estados Unidos lideran el mercado, mientras que países emergentes como Perú muestran gran crecimiento.",
    },
    {
      id: "Propuesta Normativa",
      ruta: "Ensayo3",
      tendencia: "Propuesta Normativa",
      clave: "Regulamiento",
      titulo:
        "Propuesta Normativa Del Indecopi Para Regular El Comercio Electrónico En El Perú",
      fecha: "2025-10-15",
      resumen:
        "El comercio electrónico en el Perú ha experimentado un crecimiento sin precedentes, impulsado por la pandemia de COVID-19, que aceleró cinco años de desarrollo en tan solo seis meses.",
    },
    {
      id: "Riesgos Legales",
      ruta: "Ensayo4",
      tendencia: "Riesgos Legales",
      clave: "Riesgos",
      titulo: "Riesgos Legales En El Comercio Electrónico En El Perú",
      fecha: "2025-10-15",
      resumen:
        "El comercio electrónico ha surgido como un componente clave de la economía peruana, especialmente tras la pandemia de COVID-19, que aceleró cinco años de crecimiento en tan solo seis meses.",
    },
    
    {
      id: "Requisitos Legales",
      ruta: "Ensayo5",
      tendencia: "Requisitos Legales",
      clave: "Requisitos",
      titulo: "Requisitos Legales Para Establecer Un E-Commerce En El Perú",
      fecha: "2025-10-15",
      resumen:
        "El comercio electrónico mantiene un crecimiento sostenido en el Perú, con proyecciones que superan los US$ 20 000 millones en ventas durante campañas estacionales, según la Cámara de Comercio de Lima. Esta dinámica ofrece una oportunidad única para que emprendedores y empresas amplíen su mercado y optimicen sus ingresos.",
    },
  ]);
  function getTitle(titulo) {
    return ensayos.find((ensayo) => ensayo.titulo === titulo);
  }
  return {
    ensayos,
    getTitle,
  };
});

export default useEnsayoStore;
