import { defineStore } from "pinia";
import { reactive } from "vue";

const useEnsayosTexto = defineStore("ensayosTexto", () => {
  const ensayosTexto = reactive([
    {
      id: "Tendencias Ecommerce",
      tabla: "comments",
      titulo:
        "Las Tendencias Ecommerce en 2025: ¿Qué Podemos Esperar del Comercio Electrónico en el Futuro?",
      fecha: "17/09/2025",
      introduccion: `El comercio electrónico ha pasado de ser un canal marginal de transacciones en línea a convertirse en uno de los pilares fundamentales de la economía contemporánea. Durante las dos últimas décadas, la digitalización, la masificación del internet y el auge de los dispositivos móviles han transformado radicalmente los hábitos de consumo, abriendo la puerta a un mercado global donde las fronteras físicas se difuminan. De acuerdo con la Conferencia de las Naciones Unidas sobre Comercio y Desarrollo (UNCTAD, 2023), el e-commerce mundial superó los 5,5 billones de dólares en 2022 y continúa creciendo a tasas sostenidas, consolidándose como un motor de innovación y competitividad.
En el caso latinoamericano, y particularmente en el Perú, la pandemia de COVID-19 aceleró la adopción de plataformas digitales de manera exponencial. El confinamiento y las restricciones de movilidad llevaron a miles de pequeñas y medianas empresas (pymes) a abrir canales de venta en línea como única alternativa de subsistencia. Según el Instituto Nacional de Estadística e Informática (INEI, 2024), más del 40% de los comercios minoristas peruanos realizaron por primera vez ventas digitales durante la emergencia sanitaria, marcando un punto de inflexión en la evolución del sector. Así, lo que inicialmente fue una respuesta coyuntural se consolidó como un hábito de consumo en la pospandemia.
En 2025, el comercio electrónico no solo es un mecanismo para adquirir productos, sino un ecosistema donde convergen múltiples dimensiones: la inteligencia artificial (IA) que permite personalizar la experiencia del usuario, la realidad aumentada (AR) que ofrece nuevas formas de interacción con los productos, las billeteras digitales que amplían la inclusión financiera y la sostenibilidad como criterio central en la cadena logística. Al mismo tiempo, la regulación y la gestión ética de los datos personales se convierten en condiciones esenciales para sostener la confianza de los consumidores en un mercado cada vez más competitivo y vigilado.
Este ensayo plantea como tesis que el éxito del comercio electrónico en 2025 dependerá de la capacidad de las empresas para integrar tres ejes estratégicos: la innovación tecnológica, la sostenibilidad logística y la transparencia en la gestión de datos personales. Aquellas organizaciones que logren equilibrar estos componentes no solo serán más competitivas, sino que también estarán mejor posicionadas para responder a las crecientes demandas sociales y ambientales de un consumidor más informado, crítico y exigente.`,
      texto: `1. Innovación tecnológica como motor del e-commerce en 2025

La tecnología constituye la base sobre la cual se sostiene el crecimiento del comercio electrónico. En 2025, las empresas que lideran el mercado global han convertido la inteligencia artificial (IA), el big data y la realidad aumentada en aliados estratégicos para diferenciarse y fidelizar a los clientes. Por ejemplo, plataformas como Amazon o Alibaba utilizan algoritmos de IA que analizan patrones de compra y comportamiento digital para ofrecer recomendaciones altamente personalizadas, lo que incrementa las probabilidades de conversión.
En el contexto peruano, si bien el nivel de sofisticación tecnológica no alcanza los estándares de estas grandes corporaciones, se han dado avances significativos. Empresas como Platanitos y Falabella Perú han implementado chatbots inteligentes que permiten resolver dudas de los consumidores en tiempo real, mejorando la experiencia del usuario y reduciendo costos de atención. Asimismo, se observa un crecimiento en el uso de realidad aumentada en rubros como la moda y el mobiliario: algunas tiendas ya permiten que los usuarios “prueben” virtualmente cómo luciría una prenda o un mueble en sus hogares antes de realizar la compra.
Este fenómeno responde a un cambio en las expectativas del consumidor digital, quien ya no se conforma con una transacción funcional, sino que busca experiencias interactivas, rápidas y seguras. Según Shopify (2025), las marcas que incorporan experiencias inmersivas en sus plataformas registran un 20% más de retención de clientes en comparación con aquellas que ofrecen servicios tradicionales.

2. Inclusión financiera y nuevos métodos de pago

Otro eje clave del desarrollo del e-commerce es la diversificación de los métodos de pago. En países desarrollados, las billeteras digitales como Apple Pay, Google Wallet o PayPal son estándar; sin embargo, en América Latina aún existe un reto en la inclusión financiera. El Perú, por ejemplo, cuenta con una tasa de bancarización cercana al 52% en 2024 (Banco Central de Reserva del Perú), lo cual significa que casi la mitad de la población adulta no accede a servicios financieros tradicionales.
Ante esta limitación, han surgido soluciones innovadoras como Yape y Plin, aplicaciones de pago móvil que no requieren necesariamente una tarjeta de crédito, sino que funcionan con una cuenta bancaria básica o incluso con recargas en efectivo. Estas plataformas han democratizado el acceso al comercio electrónico, permitiendo que microemprendedores y consumidores de distintos niveles socioeconómicos participen del mercado digital.
Un ejemplo concreto es el sector gastronómico: numerosos restaurantes pequeños, que antes dependían de ventas presenciales, ahora reciben pedidos en línea a través de aplicaciones de delivery que integran pagos por Yape o Plin. Esto ha ampliado su alcance y los ha hecho competitivos frente a cadenas más grandes.

3. Logística y sostenibilidad: el nuevo desafío competitivo

La rapidez y la eficiencia en la entrega constituyen hoy uno de los factores más valorados por los consumidores digitales. Sin embargo, la presión por cumplir con plazos cada vez más cortos ha generado un aumento en el impacto ambiental de las cadenas logísticas. En 2025, se observa una tendencia hacia la logística verde, que busca equilibrar eficiencia con sostenibilidad.
Empresas globales como DHL y FedEx han comenzado a implementar vehículos eléctricos y a optimizar rutas con software de IA para reducir emisiones de carbono. En América Latina, Mercado Libre anunció en 2024 la incorporación de más de 150 vehículos eléctricos en su flota de distribución regional.
En el Perú, la situación aún es incipiente, pero existen señales de cambio. El startup Chazki, especializada en última milla, ha introducido bicicletas eléctricas para entregas en Lima Metropolitana, lo cual contribuye a descongestionar el tránsito y reducir la huella de carbono. Estos esfuerzos no solo generan beneficios ambientales, sino que también responden a un consumidor más consciente, que valora la responsabilidad social de las marcas. De hecho, un estudio de Kantar (2023) indica que el 65% de los consumidores peruanos prefieren comprar en empresas que demuestran prácticas sostenibles.

4. Confianza digital y gestión ética de los datos


El crecimiento del e-commerce depende en gran medida de la confianza del consumidor. La seguridad en las transacciones y la protección de datos personales se han convertido en prioridades ineludibles. En 2025, la regulación internacional avanza hacia marcos más estrictos de privacidad, como el Reglamento General de Protección de Datos (GDPR) en Europa, que ha servido de referencia para legislaciones en América Latina.
En Perú, la Ley de Protección de Datos Personales (Ley N.° 29733) regula el uso de la información privada de los usuarios, aunque su aplicación enfrenta limitaciones en materia de supervisión y cumplimiento. Casos de ciberataques y fraudes electrónicos han puesto en evidencia la necesidad de invertir en sistemas de ciberseguridad más robustos.
Frente a este contexto, las empresas que apuestan por la transparencia en sus políticas de manejo de datos logran diferenciarse. Por ejemplo, la fintech Culqi ha desarrollado protocolos de encriptación avanzada que permiten a los usuarios realizar pagos digitales de manera segura, lo que incrementa la confianza y, en consecuencia, la fidelidad hacia la marca.

5. El consumidor del futuro: exigente, informado y crítico

Finalmente, el perfil del consumidor digital en 2025 se caracteriza por un mayor nivel de información y exigencia. Este consumidor no solo busca precios competitivos, sino también experiencias personalizadas, opciones de pago flexibles, rapidez en la entrega y compromiso ambiental de las empresas. Además, las redes sociales han potenciado su poder de influencia: una mala experiencia puede viralizarse y afectar la reputación de una marca en cuestión de horas.
En el Perú, esta realidad se refleja en la expansión del comercio electrónico en provincias. Según la Cámara Peruana de Comercio Electrónico (CAPECE, 2024), las regiones de Arequipa, Trujillo y Cusco han mostrado un crecimiento sostenido en compras digitales, impulsado por jóvenes emprendedores que aprovechan redes como Instagram y TikTok para comercializar productos locales.`,
      conclusion: `El comercio electrónico en 2025 se consolida como un fenómeno transformador de la economía global y regional. Más allá de ser un simple canal de ventas, se ha convertido en un ecosistema complejo donde confluyen la tecnología, la logística, la inclusión financiera y la ética digital. El análisis desarrollado permite sostener la tesis central de este ensayo: el éxito de las empresas en el e-commerce dependerá de su capacidad para integrar innovación tecnológica, sostenibilidad en la cadena logística y transparencia en la gestión de datos personales.
Las tendencias actuales demuestran que la innovación no es opcional, sino condición para la supervivencia. La adopción de inteligencia artificial, realidad aumentada y big data redefine las experiencias de consumo, al mismo tiempo que plantea desafíos en términos de inversión y adaptación para las pequeñas y medianas empresas. En el caso peruano, plataformas como Yape, Plin o Culqi evidencian que la creatividad local puede responder a problemáticas estructurales como la baja bancarización, generando oportunidades de acceso a un mayor número de consumidores. Del mismo modo, la sostenibilidad se ha posicionado como un criterio de competitividad. La incorporación de prácticas logísticas más limpias, como el uso de vehículos eléctricos o la optimización de rutas, no solo reduce costos operativos a largo plazo, sino que fortalece la reputación de las marcas ante consumidores cada vez más críticos y conscientes de su impacto ambiental. Esta dimensión resulta especialmente relevante en el Perú, donde los problemas de contaminación urbana y la congestión vehicular exigen soluciones innovadoras en la distribución de última milla.

Asimismo, la confianza digital constituye un pilar indispensable para sostener el crecimiento del comercio electrónico. Las empresas que invierten en sistemas de ciberseguridad robustos y promueven políticas claras sobre el manejo de datos personales logran diferenciarse en un entorno marcado por la desconfianza y el riesgo de fraudes electrónicos. El caso de fintechs peruanas como Culqi demuestra que la transparencia no solo protege al consumidor, sino que también construye fidelidad a largo plazo.
En este contexto, el consumidor del futuro no es pasivo, sino un actor protagónico que exige rapidez, personalización y sostenibilidad, y que utiliza las redes sociales como mecanismo de fiscalización y de poder. Para las empresas, esto implica un cambio de paradigma: ya no basta con competir en precios, sino que resulta imprescindible ofrecer experiencias completas, coherentes y responsables.
En síntesis, el comercio electrónico en 2025 representa una oportunidad histórica para transformar la economía peruana y regional hacia modelos más innovadores, inclusivos y sostenibles. Sin embargo, su consolidación dependerá de la capacidad de empresas, gobiernos y consumidores de construir un ecosistema digital basado en la confianza, la responsabilidad y la innovación continua. Solo de este modo será posible que el e-commerce deje de ser un privilegio de unos pocos y se convierta en un verdadero motor de desarrollo económico y social.`,
    },
    {
      id: "Estado Comercio Electronico",
      tabla:"comments-2",
      titulo:
        "El Estado del Comercio Electrónico Global en 2025: Datos, Claves, Tendencias y Previsiones",
      fecha: "17/09/2025",
      introduccion: `El comercio electrónico mundial ha experimentado una evolución extraordinaria que ha transformado radicalmente la forma en que las empresas operan y los consumidores realizan sus compras. En 2025, nos encontramos ante un panorama digital que supera todas las proyecciones previas y que ha establecido nuevos paradigmas comerciales que definen el futuro de la economía global. Esta transformación no representa simplemente una digitalización de procesos tradicionales, sino una completa reimaginación de las relaciones comerciales que integra tecnologías emergentes, nuevos comportamientos de consumo y modelos de negocio innovadores.
El presente ensayo examina de manera integral los elementos que configuran el comercio electrónico global en 2025, analizando desde las tendencias tecnológicas más disruptivas hasta los cambios estructurales en el comportamiento del consumidor, con el objetivo de proporcionar una comprensión profunda de un fenómeno que continúa redefiniendo las reglas del juego comercial a escala planetaria.`,
      texto: `El Panorama Actual

El comercio electrónico mundial se encuentra en una fase de transformación extraordinaria, con ventas globales que alcanzarán los 6.86 billones de dólares en 2025, registrando un crecimiento interanual del 8.3%. El número de compradores en línea ha alcanzado los 2.77 mil millones de usuarios, representando aproximadamente el 34% de la población mundial, lo que demuestra que las compras digitales se han convertido en una práctica comercial mainstream.

Las ventas en línea representan aproximadamente el 22.6% del total de ventas minoristas globales, con proyecciones que indican que esta cifra alcanzará cerca del 24% para 2026. Esta evolución refleja un cambio estructural permanente en los hábitos de consumo que se consolidó durante la pandemia y continúa expandiéndose.

China y Estados Unidos: Los Gigantes que Dominan el Mercado Global

El liderazgo del comercio electrónico mundial sigue concentrado en dos potencias económicas que han desarrollado ecosistemas digitales altamente sofisticados. China mantiene su posición dominante con ventas online que alcanzaron los 1.26 billones de dólares en 2023, mientras que Estados Unidos se consolida como el segundo mercado más importante. Juntos, estos países representaron más de 2.32 billones de dólares en ventas combinadas, evidenciando la concentración geográfica del poder económico digital.

La Revolución Móvil y la Inteligencia Artificial

El comercio móvil se ha consolidado como el motor principal del crecimiento del ecommerce, con ventas proyectadas de 2.52 billones de dólares en 2025, representando aproximadamente el 75% de las ventas totales de comercio electrónico. Más del 70% del tráfico en tiendas online proviene de dispositivos móviles, obligando a las empresas a adoptar estrategias mobile-first como requisito fundamental para la supervivencia en el mercado digital.

La inteligencia artificial tambien ha emergido como la tecnología más disruptiva en el comercio electrónico de 2025. Las empresas que implementan IA experimentan un aumento promedio de ingresos entre el 10% y 12%, mientras que el mercado de IA aplicada al ecommerce alcanzará los 8.65 mil millones de dólares en 2025. Los algoritmos de personalización predictiva han evolucionado hasta crear experiencias hiperpersonalizadas basadas en historial de navegación, clima local y disponibilidad logística.

La implementación de chatbots impulsados por IA ha revolucionado el servicio al cliente, con el 70% de las conversaciones en línea gestionadas por estos sistemas automatizados. Gartner estima que para 2025, el 80% de las interacciones de servicio al cliente serán gestionadas por IA.

Realidad Aumentada

La realidad aumentada está revolucionando la experiencia de compra online, con un mercado proyectado de 50 mil millones de dólares en 2024. Los productos que incorporan experiencias de realidad aumentada tienen un 94% más de tasa de conversión comparado con aquellos que no la utilizan. Marcas como IKEA han reducido significativamente sus tasas de devolución mediante herramientas que permiten visualizar productos en espacios reales antes de la compra.


El comercio social ha experimentado un crecimiento explosivo, con ventas a través de redes sociales representando más del 17% de las ventas en línea en 2025. TikTok se ha consolidado como líder con tendencias como #TikTokMadeMeBuyIt impulsando compras mediante recomendaciones auténticas. Charlotte Tilbury ejemplifica este potencial al lograr un aumento del 200% en ventas en 48 horas a través de TikTok Shop.

Instagram mantiene su posición como "el rey del visual commerce" con herramientas avanzadas de compra directa y funciones de realidad aumentada integradas.


Revolución en los Métodos de Pago

Las billeteras digitales han experimentado adopción masiva, con proyecciones que indican que el 53% de las compras online se realizarán a través de estas plataformas en 2025. PayPal lidera con 77% de preferencia, seguido por Venmo (37%), Apple Pay (36%) y Google Pay (32%).

El modelo "Compra ahora, paga después" (BNPL) experimenta crecimiento excepcional del 24% anual, superando los 450 mil millones de dólares en transacciones globales para 2026, democratizando el acceso a productos de mayor valor especialmente entre generaciones más jóvenes.

Sostenibilidad

La sostenibilidad se ha convertido en factor determinante en las decisiones de compra, con el 73% de los millennials dispuestos a gastar más en productos sostenibles. El mercado de productos sostenibles está proyectado para alcanzar 40.75 mil millones de dólares para 2030. Las empresas integran prácticas sostenibles en toda su cadena de valor, donde el embalaje sostenible ya no es preferencia sino expectativa del mercado.

El Caso Específico de Perú

Perú se ha posicionado como uno de los mercados de ecommerce más dinámicos de Latinoamérica, registrando crecimiento anual promedio del 35% entre 2023 y 2026, con proyecciones de alcanzar 63.100 millones de dólares. El crecimiento está impulsado por dispositivos móviles, con más del 70% de compras realizándose desde smartphones.

El ecosistema de pagos digitales peruano ha evolucionado notablemente, con la interoperabilidad entre Yape y Plin generando más de 80 millones de transacciones adicionales hasta agosto de 2024.

Desafíos y Perspectivas Futuras

El comercio electrónico enfrenta desafíos significativos como la tasa de abandono de carritos del 70.19%, requiriendo optimización constante de experiencia de usuario. Las proyecciones indican crecimiento sostenido hacia los 8.09 billones de dólares en 2028, con incremento del 57.7% respecto a 2022.

La integración de tecnologías emergentes continuará profundizándose, con IA, realidad aumentada y blockchain convergiendo para crear experiencias más inmersivas. El futuro será caracterizado por la eliminación de fricciones entre descubrimiento, evaluación, compra y entrega, evolucionando hacia experiencias seamless donde la distinción entre online y offline se desvanecerá completamente.`,
      conclusion: `El análisis del comercio electrónico global en 2025 revela una industria que ha alcanzado madurez y sofisticación excepcionales, consolidándose como la columna vertebral de la economía digital contemporánea. La convergencia de tecnologías emergentes ha creado un ecosistema que trasciende las limitaciones tradicionales del comercio, generando experiencias hiperpersonalizadas y eliminando barreras geográficas y temporales.

El dominio del comercio móvil, la integración de inteligencia artificial, el auge del comercio social y la importancia creciente de la sostenibilidad confirman una transformación irreversible que ha redefinido las reglas del juego comercial. Los mercados emergentes como Perú ilustran el potencial de expansión que aún existe, mientras que los desafíos identificados representan oportunidades para empresas que sepan adaptarse eficazmente.

En definitiva, el estado del comercio electrónico global en 2025 confirma que estamos presenciando la consolidación de un nuevo modelo económico que continuará evolucionando. Las empresas que comprendan esta transformación como un proceso continuo de adaptación e innovación estarán mejor posicionadas para capitalizar las oportunidades de un futuro comercial más digital, personalizado y globalmente integrado. La revolución del comercio electrónico no ha culminado; estamos en las etapas iniciales de una transformación que establecerá el comercio digital como la forma dominante de intercambio comercial del siglo XXI.`,
    },
  ]);

  function obtenerEnsayo(id) {
    return ensayosTexto.find((ensayo) => ensayo.id === id);
  }
  return {
    ensayosTexto,
    obtenerEnsayo,
  };
});
export default useEnsayosTexto;
