/* script.js
   Función: Saludo dinámico según la hora del día.
   Detecta la hora actual y muestra un mensaje personalizado al hacer clic.
   Usado en: index.html
*/
document.addEventListener('DOMContentLoaded', () => {
  const btn     = document.getElementById('btn-bienvenida')
  const mensaje = document.getElementById('mensaje-dinamico')
  if (!btn || !mensaje) return

  btn.addEventListener('click', () => {
    const hora = new Date().getHours()
    let saludo = ''

    if (hora >= 6 && hora < 12)
      saludo = '> BUENOS DIAS, PLAYER! READY TO CODE?'
    else if (hora >= 12 && hora < 20)
      saludo = '> BUENAS TARDES! EL EQUIPO 7 ESTA EN LINEA.'
    else
      saludo = '> BUENAS NOCHES! PROGRAMANDO HASTA EL AMANECER...'

    mensaje.textContent = saludo
    mensaje.style.color = '#00ffff'
    mensaje.style.animation = 'none'
    void mensaje.offsetWidth
    mensaje.style.animation = 'blink 0.5s step-end 3'
  })
})
