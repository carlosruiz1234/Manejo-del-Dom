// Obtiene el elemento del display donde se logran ver los resultados
const resultado = document.getElementById('resultado');

// Obtiene todos los botones mediante querySelectorAll
const botones = document.querySelectorAll('button');

// Agrega un evento a cada botón (foreach = por cada uno)
botones.forEach(boton => {
  boton.addEventListener('click', function() {
    manejarBoton(this.textContent);
  });
});



// Limpiar el display por completo
function limpiarDisplay() {
  resultado.value = '0';
}

// Borrar el último caracter del display
function borrarUltimoCaracter() {
  const valorActual = resultado.value;

  // Si solo hay un caracter, lo reemplaza por 0
  if (valorActual.length === 1) {
    resultado.value = '0';
  } else {
    // slice corta desde el índice 0 hasta el último -1
    resultado.value = valorActual.slice(0, -1);
  }
}

// Calcular porcentaje
function calcularPorcentaje() {
  try {
    const numero = parseFloat(resultado.value);
    resultado.value = (numero / 100).toString();
  } catch {
    resultado.value = 'Error';
  }
}

// Manejar operadores (+ - x ÷)
function manejarOperador(operador) {
  const valorActual = resultado.value;

  // No permite iniciar con un operador
  if (valorActual === '0') {
    alert('El formato usado no es válido!');
    return;
  }

  // Obtiene el último caracter ingresado
  const ultimoCaracter = valorActual[valorActual.length - 1];

  // Evita operadores consecutivos
  if (['+', '-', 'x', '÷'].includes(ultimoCaracter)) {
    resultado.value = valorActual.slice(0, -1) + operador;
  } else {
    resultado.value = valorActual + operador;
  }
}

// Manejar botón del punto decimal
function manejarDecimal() {
  const valorActual = resultado.value;

  // split separa la expresión por operadores
  const partes = valorActual.split(/[+\-x÷]/);
  const ultimoNumero = partes[partes.length - 1];

  // Si el último número ya tiene un punto, no deja poner otro
  if (ultimoNumero.includes('.')) return;

  // Si solo hay un 0, entonces agrega "0."
  if (valorActual === '0') {
    resultado.value = '0.';
    return;
  }

  // Agrega el punto normalmente
  resultado.value = valorActual + '.';
}

// Manejar los números del 0 al 9
function manejarNumero(numero) {
  const valorActual = resultado.value;

  if (valorActual === '0') {
    resultado.value = numero;
  } else {
    resultado.value = valorActual + numero;
  }
}




// Esta función maneja los clicks y qué hacer con cada valor
function manejarBoton(valor) {

  if (valor === 'C') return limpiarDisplay();

  if (valor === '←') return borrarUltimoCaracter();

  if (valor === '%') return calcularPorcentaje();

  if (valor === '=') return calcularResultado();

  if (['+', '-', 'x', '÷'].includes(valor)) return manejarOperador(valor);

  if (valor === '.') return manejarDecimal();

  // Si no es nada de lo anterior, es un número
  manejarNumero(valor);
}




function calcularResultado() {
  try {
    let expresion = resultado.value;

    // Verificar división por 0
    if (expresion.includes('÷0') || expresion.includes('/0')) {
      throw new Error('División por cero'); // manda al catch
    }

    // Reemplazar símbolos visuales por operadores válidos de JS
    expresion = expresion.replace(/x/g, '*');
    expresion = expresion.replace(/÷/g, '/'); // la g aplica a todos los casos

    // eval convierte el texto en una operación matemática real
    const resultadoCalculo = eval(expresion);

    // Mostrar el resultado
    resultado.value = resultadoCalculo;

    // Restablece display después de 3 seg
    setTimeout(() => {
      resultado.value = '0';
    }, 3000);

  } catch (error) {
    resultado.value = 'Error';

    setTimeout(() => {
      resultado.value = '0';
    }, 2000);
  }
}
