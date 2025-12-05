
const resultado = document.getElementById('resultado');


const botones = document.querySelectorAll('button');


botones.forEach(boton => {
  boton.addEventListener('click', function() {
    const valor = this.textContent;
    manejarBoton(valor);
  });
});


function manejarBoton(valor) {
  const valorActual = resultado.value;

  if (valor === 'C') {
    resultado.value = '0';
    return;
  }
  

  if (valor === '←') {
    if (valorActual.length === 1) {
      resultado.value = '0';
    } else {
      resultado.value = valorActual.slice(0, -1);
    }
    return;
  }
  
  // Calcula el porcentaje
  if (valor === '%') {
    try {
      const numero = parseFloat(valorActual);
        resultado.value = (numero / 100).toString();
    } catch (error) {
        resultado.value = 'Error';
      }
    return;
  }
  
 
  if (valor === '=') {
    calcularResultado();
    return;
  }
  
  // Manejar operadores
  if (['+', '-', 'x', '÷'].includes(valor)) {
  
    if (valorActual === '0') {
      alert('El formato usado no es válido!');
      return;
    }
    
 
    const ultimoCaracter = valorActual[valorActual.length - 1];
    if (['+', '-', 'x', '÷'].includes(ultimoCaracter)) {
      resultado.value = valorActual.slice(0, -1) + valor;
      return;
    }
    resultado.value = valorActual + valor;
    return;
  }
  
  // Manejar punto decimal
  if (valor === '.') {
    
    const partes = valorActual.split(/[+-×÷]/);
    const ultimoNumero = partes[partes.length - 1]; 
    
    
    if (ultimoNumero.includes('.')) {
      return;
    }
    
   
    if (valorActual === '0') {
      resultado.value = '0.';
      return;
    }
    
    resultado.value = valorActual + '.';
    return;
  }
  
  // Manejar números
  if (valorActual === '0') {
      resultado.value = valor;
  } else {
      resultado.value = valorActual + valor;
  }
}

function calcularResultado() {
  try {
    let expresion = resultado.value;
    

    if (expresion.includes('÷0') || expresion.includes('/0')) {
      throw new Error('División por cero');
    }
    

    expresion = expresion.replace(/x/g, '*');
    expresion = expresion.replace(/÷/g, '/');
    
  
    const resultadoCalculo = eval(expresion);
                                            
  
    resultado.value = resultadoCalculo;
    
    
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