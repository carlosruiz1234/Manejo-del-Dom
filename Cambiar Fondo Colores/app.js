const boton = document.querySelector('button');
const colorTexto = document.getElementById('color');
const izquierda = document.getElementById('color-arriba');
const derecha = document.getElementById('color-abajo');

function generarColorAle(){
  let digitos = '0123456789ABCDEF';
  let color = '#';
  
  for (let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    color += digitos[indiceAleatorio];
  }
  return color;
}


boton.addEventListener('click', function(){
  let nuevoColor = generarColorAle();

// esto hace k mueva el color a la izquierda cuando el color 
  izquierda.style.backgroundColor = derecha.style.backgroundColor;

    //esto agrega el nuevo color al columna derecha
  derecha.style.backgroundColor = nuevoColor;

  //esto obtiene  el texto de la const 'colorTexto'
  colorTexto.textContent = nuevoColor;
});