// every(array, callback)
// Crear una función every que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si todas las llamadas al callback devolvieron true
// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0
// every(numeros, multiploDe10) // false
// every(numeros, esPositivo) // true

const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;
const esPositivo = (x) => x >= 0;

// const every = (array, callback) => {
//     for (let item of array) {
//         if (!callback(item)) {
//             return false;
//         }
//     }
//     return true;
// }

const every = (array, callback) => {
    return array.every(callback)
}

console.log(every(numeros, multiploDe10));
console.log(every(numeros, esPositivo));
