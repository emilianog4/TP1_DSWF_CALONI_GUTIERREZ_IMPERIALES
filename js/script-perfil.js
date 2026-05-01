/* Emi */
document.addEventListener('DOMContentLoaded', () => {
  const btnColor = document.getElementById('btn-color-perfil')
  const tarjeta = document.getElementById('mi-tarjeta')

  btnColor.addEventListener('click', () => {
    // Genera un color suave aleatorio para el fondo de la tarjeta
    const randomHue = Math.floor(Math.random() * 360)
    tarjeta.style.backgroundColor = `hsl(${randomHue}, 70%, 95%)`
    tarjeta.style.borderColor = `hsl(${randomHue}, 70%, 50%)`
    tarjeta.style.borderWidth = '2px'
    tarjeta.style.borderStyle = 'solid'
  })
})
