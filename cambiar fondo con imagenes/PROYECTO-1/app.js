//esta en la forma para acceder al codigo 

/*const fruticas = document.getElementById('fruticas')
console.log('> innerText')
console.log(fruticas.innerText)

console.log('> textContent')
console.log(fruticas.textContent)

console.log('innerHTML')
console.log(fruticas.innerHTML)*/

//esto es para modificar el texto
/*const titulo = document.getElementById('titulo')
titulo.innerText ='Mis fruticas Favoritas'*/

//esto es para cambiar un atributo 
//todo se hace con esto
//const chunkbase = document.getElementsByTagName('a');

//console.log(chunkbase[0].setAttribute('href', 'https://chatgpt.com/c/6913e516-3c20-8326-95dd-71cd36d9e147'));

//este es para removerlo
//console.log(chunkbase[0].removeAttribute('href'));

//ESTO ES PARA MODIFICARLO

//console.log(chunkbase[0].setAttribute('href','https://www.youtube.com/watch?v=l0H-YaOaIIY&list=RDx4D1L7jZ3u0&index=4'))

const phoenix = document.getElementById('phoenix')
const arena = document.getElementById('arena')
const dragon = document.getElementById('dragon')
const control = document.getElementById('control')

const body = document.querySelector('body')

phoenix.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/Tori-Tori-no-Mi.jpg')";
}
)

arena.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/Suna-Suna-no-Mi.jpg')";
}
)

dragon.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/Uo-Uo-no-Mi.jpg')";
}
)
control.addEventListener('click',function(){
    body.style.backgroundImage="url('imagenes/Ope-Ope-no-Mi.jpg')";
}
)








