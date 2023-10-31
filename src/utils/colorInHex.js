export function getOppositeColor(hexColor) {
  // Verifica si el valor de entrada es un color hexadecimal válido
  if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
    throw new Error("El formato de color hexadecimal debe ser '#RRGGBB'")
  }

  // Extrae los componentes de color (rojo, verde y azul)
  const red = parseInt(hexColor.slice(1, 3), 16)
  const green = parseInt(hexColor.slice(3, 5), 16)
  const blue = parseInt(hexColor.slice(5, 7), 16)

  // Calcula el color opuesto invirtiendo cada componente
  const redOpuesto = 255 - red
  const greenOpuesto = 255 - green
  const blueOpuesto = 255 - blue

  // Convierte los componentes opuestos nuevamente a formato hexadecimal
  const hexOpuesto = `#${redOpuesto.toString(16).padStart(2, '0')}${greenOpuesto
    .toString(16)
    .padStart(2, '0')}${blueOpuesto.toString(16).padStart(2, '0')}`

  return hexOpuesto
}

export function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

export function whiteOrBlack(hexColor) {
  const red = parseInt(hexColor.slice(1, 3), 16)
  const green = parseInt(hexColor.slice(3, 5), 16)
  const blue = parseInt(hexColor.slice(5, 7), 16)
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue
  return luminance < 128 ? '#000000' : '#ffffff'
}
