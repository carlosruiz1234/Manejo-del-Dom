
const resultado = document.getElementById('resultado');


function agregarNumero(num) {
    if (resultado.value === '0' || resultado.value === 'Error') {// Evitar múltiples ceros al inicio o reemplazar 'Error'   
        resultado.value = num;
    } else {
        resultado.value += num;
    }
}


function agregarOperador(op) {
    const valorActual = resultado.value;
    const ultimoCaracter = valorActual[valorActual.length - 1];
    

    if (['+', '-', 'x', '÷'].includes(ultimoCaracter)) {
        resultado.value = valorActual.slice(0, -1) + op;
    } else {
        resultado.value += op;
    }
}


function limpiar() {
    resultado.value = '0';
}


function borrar() {
    if (resultado.value.length === 1) {
        resultado.value = '0';
    } else {
        resultado.value = resultado.value.slice(0, -1);
    }
}

function porcentaje() {
    try {
        const numero = parseFloat(resultado.value);
        resultado.value = (numero / 100).toString();
    } catch (error) {
        resultado.value = 'Error';
    }
}

function calcular() {
    try {
        let expresion = resultado.value;
        

        expresion = expresion.replace(/x/g, '*');
        expresion = expresion.replace(/÷/g, '/');

        const resultadoCalculo = eval(expresion);
        resultado.value = resultadoCalculo;
    } catch (error) {
        resultado.value = 'Error';
    }
}