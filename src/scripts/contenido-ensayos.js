export const ensayosContenido = [
  {
    ruta:"Ensayo1",
    tendencia: "Tendencias E-Commerce",
    clave: "Tendencia",
    titulo:
      "Las Tendencias Ecommerce en 2025: ¿Qué Podemos Esperar del Comercio Electrónico en el Futuro?",
    fecha: "2025-09-17",
    resumen:
      "El ecommerce del futuro en 2025 estará marcado por la inteligencia artificial, personalización, experiencias inmersivas, compras por voz y móvil, y un enfoque en la sostenibilidad y la confianza del cliente.",
  },
  {
    ruta:"Ensayo2",
    tendencia: "E-Commerce en 2025",
    clave: "Realidad",
    titulo:
      "El Estado del Comercio Electrónico Global en 2025: Datos, Claves, Tendencias y Previsiones",
    fecha: "2025-09-17",
    resumen:
      "El comercio electrónico en 2025 se ha consolidado como pilar de la economía global, impulsado por el auge del comercio móvil, la inteligencia artificial, la realidad aumentada y el comercio social. China y Estados Unidos lideran el mercado, mientras que países emergentes como Perú muestran gran crecimiento.",
  },
];
export function getTitle(titulo) {
  return ensayosContenido.find((ensayo) => ensayo.titulo === titulo);
}
