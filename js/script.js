document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn-bienvenida')
  const mensaje = document.getElementById('mensaje-dinamico')

  btn.addEventListener('click', () => {
    const hora = new Date().getHours()
    let saludo = ''

    if (hora < 12) saludo = '¡Buenos días! Bienvenidos a nuestro proyecto.'
    else if (hora < 20)
      saludo = '¡Buenas tardes! Gracias por visitar nuestro sitio.'
    else saludo = '¡Buenas noches! Esperamos que te guste nuestro trabajo.'

    mensaje.textContent = saludo
    mensaje.style.color = 'var(--acento)'
    mensaje.style.fontWeight = 'bold'
  })
})
