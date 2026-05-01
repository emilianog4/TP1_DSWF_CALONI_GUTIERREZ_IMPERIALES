# EQUIPO 7 TP1

## Proyecto Web en Equipo

**Link al proyecto desplegado:** https://tp1dswf.vercel.app/

## Descripción del Proyecto

Este trabajo práctico consiste en el desarrollo de un sitio web estático para el **IFTS N.°29**. El objetivo es demostrar habilidades en la organización de archivos, diseño responsive mediante Media Queries y la implementación de interactividad básica con JavaScript. El sitio incluye una portada grupal estilo arcade con pantalla de selección de personaje, páginas individuales para cada integrante y una bitácora de desarrollo detallada.

## Integrantes

- **Caloni, Adriano** - https://github.com/AdrianoJere
- **Gutierrez, Emiliano** - https://github.com/emilianog4
- **Imperiales, Jeremias** - https://github.com/imperialesjeremias

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica del sitio.
- **CSS3:** Estilos prolijos y Responsive Design con breakpoints en 400px, 900px y 1200px. Incluye `clip-path`, `repeating-linear-gradient` para scanlines CRT y `@keyframes` para animaciones.
- **JavaScript (Vanilla):** Funciones dinámicas para mejorar la experiencia de usuario.
- **Google Fonts:** Press Start 2P (títulos pixel) y VT323 (cuerpo retro).
- **Vercel:** Hosting y despliegue del proyecto.

## Estructura de Archivos

El proyecto sigue las buenas prácticas de organización de archivos solicitadas:

- `/` (Raíz): Contiene los archivos `.html` (index, bitacora y perfiles) y el `README.md`.
- `/css`: Contiene el archivo `styles.css` con la guía de estilos unificada.
- `/js`: Contiene los scripts de interactividad `script.js` y `script-perfil.js`.
- `/img`: Almacena los avatares generados por IA y recursos visuales.

## Guía de Estilos

- **Paleta de Colores:**
  - **Fondo:** `#020408`
  - **Acento P1 (Caloni):** `#00ffff` — cyan
  - **Acento P2 (Gutierrez):** `#ff00ff` — magenta
  - **Acento P3 (Imperiales):** `#ffff00` — amarillo
  - **Texto Principal:** `#e0e0e0`
  - **Texto Secundario:** `#888888`
- **Tipografías:**
  - **Títulos:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) — pixel font
  - **Cuerpo:** [VT323](https://fonts.google.com/specimen/VT323) — fuente retro monoespaciada
- **Iconografía:** Se utilizaron avatares generados con IA estilo pixel-art para garantizar la privacidad de los integrantes.

## JavaScript e Interactividad

- **Portada (index.html):** Se implementó una función que detecta la hora del sistema para mostrar un saludo de bienvenida dinámico en estilo terminal.
- **Páginas Individuales:** Cada tarjeta de presentación cuenta con un botón que cicla entre 5 temas de color neón (cyan, magenta, amarillo, naranja, verde), actualizando el borde, la sombra y el fondo de la tarjeta mediante manipulación del DOM.

## Diseño Responsivo

Se implementaron los tres breakpoints obligatorios:

| Breakpoint | Comportamiento |
|------------|----------------|
| `400px` | Layout base mobile, título escalado con `clamp()` |
| `900px` | Grid de jugadores en 3 columnas |
| `1200px` | Padding extra en la sección principal |

## Uso de IA

- **Herramientas:** Claude (Anthropic — Sonnet 4.6) y Gemini (Google).
- **Contenido y Código:** Se utilizó Claude como asistente técnico para la definición de la paleta de colores, el sistema de variables CSS, la implementación de los scanlines, las esquinas cortadas con `clip-path`, la lógica de JavaScript y la documentación del README.
- **Imágenes:** Los avatares fueron generados con Gemini aplicando un estilo pixel-art retro para cumplir con los requerimientos estéticos y de privacidad.

---

_Este proyecto fue realizado para la materia de Desarrollo de Sistemas Web (Front End) en el IFTS N.°29 ._
