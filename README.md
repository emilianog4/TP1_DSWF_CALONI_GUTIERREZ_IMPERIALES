# EQUIPO 7 — TP1 · IFTS N.°29

## Proyecto Web en Equipo

**Link al proyecto desplegado:** https://tp1dswf.vercel.app/

---

## Descripción del Proyecto

Sitio web estático grupal desarrollado para la materia **Desarrollo de Sistemas Web (Front End)** del IFTS N.°29. El objetivo es demostrar habilidades en organización de archivos, HTML semántico, diseño responsive con Media Queries y JavaScript interactivo. El sitio presenta una estética **Arcade 90s / CRT** con tipografías pixel, scanlines animados y paleta de neón, diferenciándose de los diseños genéricos. Incluye portada grupal estilo "SELECT YOUR PLAYER", tarjetas individuales con stats tipo videojuego, y una bitácora estilo "STORY MODE".

---

## Integrantes

| Nombre | GitHub |
|--------|--------|
| Caloni, Adriano | [@AdrianoJere](https://github.com/AdrianoJere) |
| Gutierrez, Emiliano | [@emilianog4](https://github.com/emilianog4) |
| Imperiales, Jeremias | [@imperialesjeremias](https://github.com/imperialesjeremias) |

---

## Tecnologías Utilizadas

- **HTML5** — Estructura semántica del sitio.
- **CSS3** — Variables CSS, Flexbox, CSS Grid, `clip-path`, `repeating-linear-gradient` para scanlines, `@keyframes` para animaciones, responsive con breakpoints en 400px, 900px y 1200px.
- **JavaScript (Vanilla)** — Interactividad sin frameworks.
- **Google Fonts** — Press Start 2P (títulos pixel) · VT323 (cuerpo retro).
- **Vercel** — Hosting y despliegue.

---

## Estructura de Archivos

```
/                    → HTML (index, bitacora y perfiles) + README.md
/css/styles.css      → Estilos unificados con variables CSS y responsive design
/js/script.js        → Interactividad de la portada
/js/script-perfil.js → Interactividad de los perfiles individuales
/img/                → Avatares pixel-art generados con IA
```

---

## Guía de Estilos

### Paleta de Colores

| Rol | Hex |
|-----|-----|
| Fondo principal | `#020408` |
| Acento P1 (Caloni) | `#00ffff` — cyan |
| Acento P2 (Gutierrez) | `#ff00ff` — magenta |
| Acento P3 (Imperiales) | `#ffff00` — amarillo |
| Título del juego | `#ffff00` con sombras `#ff6600` / `#ff0000` |
| Texto principal | `#e0e0e0` |
| Texto secundario | `#888888` |

### Tipografías

- **Títulos / UI:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) — pixel font, wght 400
- **Cuerpo / descripciones:** [VT323](https://fonts.google.com/specimen/VT323) — fuente retro monoespaciada, wght 400

### Iconografía / Avatares

Se utilizaron avatares generados con IA estilo pixel-art para preservar la privacidad de los integrantes. Cada avatar tiene un borde neón con el color de su jugador (cyan / magenta / amarillo).

---

## JavaScript e Interactividad

### Portada (`index.html`) — `js/script.js`

**Función:** Saludo dinámico por hora del día. Al hacer clic en el botón `▶ SALUDAR AL EQUIPO`, detecta la hora del sistema y muestra un mensaje en estilo terminal (buenos días / buenas tardes / buenas noches) con un efecto blink de 3 ciclos.

> *(agregar captura de pantalla del botón y el mensaje)*

### Páginas individuales — `js/script-perfil.js`

**Función:** Ciclo de 5 temas de color neón. Al hacer clic en `🎨 CAMBIAR TEMA`, la tarjeta itera por los colores cyan → magenta → amarillo → naranja → verde, actualizando el borde de la tarjeta, la sombra neón, el fondo y el borde de la foto de perfil con transición CSS de 0.3s.

> *(agregar captura de pantalla mostrando distintos estados de color)*

---

## Diseño Responsivo

Se implementaron los tres breakpoints obligatorios:

| Breakpoint | Comportamiento |
|------------|----------------|
| `400px` | Layout base mobile, título escalado con `clamp()` |
| `900px` | Grid de jugadores en 3 columnas, margen superior ampliado |
| `1200px` | Padding extra en la sección principal |

---

## Uso de IA

| Herramienta | Uso |
|-------------|-----|
| **Claude (Anthropic — Sonnet 4.6)** | Asistente técnico: definición de paleta, sistema de variables CSS, scanlines con `repeating-linear-gradient`, `clip-path` para esquinas cortadas, lógica JS del ciclo de temas, estructura del README |
| **Gemini (Google)** | Generación de avatares pixel-art para los 3 integrantes |

**Nota:** La IA se utilizó como asistente técnico y creativo. El equipo revisó, adaptó y comprende todo el código generado.

---

## Enlace al Proyecto Desplegado

🔗 [https://tp1dswf.vercel.app/](https://tp1dswf.vercel.app/)

---

*Proyecto realizado para Desarrollo de Sistemas Web (Front End) — IFTS N.°29 · 2026*