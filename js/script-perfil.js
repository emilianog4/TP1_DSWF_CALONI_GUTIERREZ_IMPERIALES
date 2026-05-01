/* script-perfil.js
   Función: Cicla entre 5 temas de color en la tarjeta de presentación.
   Modifica: borde de la tarjeta, foto, sección header, sombra neón.
   Usado en: caloni.html, gutierrez.html, imperiales.html
*/
document.addEventListener('DOMContentLoaded', () => {
  const btn    = document.getElementById('btn-color-perfil')
  const tarjeta = document.getElementById('mi-tarjeta')
  if (!btn || !tarjeta) return

  const temas = [
    { borde: '#00ffff', sombra: 'rgba(0,255,255,0.5)',   fondo: 'rgba(0,255,255,0.08)'   },
    { borde: '#ff00ff', sombra: 'rgba(255,0,255,0.5)',   fondo: 'rgba(255,0,255,0.08)'   },
    { borde: '#ffff00', sombra: 'rgba(255,255,0,0.5)',   fondo: 'rgba(255,255,0,0.08)'   },
    { borde: '#ff6600', sombra: 'rgba(255,102,0,0.5)',   fondo: 'rgba(255,102,0,0.08)'   },
    { borde: '#00ff88', sombra: 'rgba(0,255,136,0.5)',   fondo: 'rgba(0,255,136,0.08)'   },
  ]

  let idx = 0

  btn.addEventListener('click', () => {
    idx = (idx + 1) % temas.length
    const t = temas[idx]

    tarjeta.style.borderColor  = t.borde
    tarjeta.style.background   = t.fondo
    tarjeta.style.transition   = 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease'
    tarjeta.style.boxShadow    = `0 0 30px ${t.sombra}`

    const foto = tarjeta.querySelector('.foto-perfil')
    if (foto) {
      foto.style.borderColor = t.borde
      foto.style.boxShadow   = `0 0 20px ${t.sombra}, 0 0 40px ${t.fondo}`
    }

    btn.style.color       = t.borde
    btn.style.borderColor = t.borde
  })
})
