// some(array, callback)
// Crear una función some que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva true si al menos una de las llamadas al callback devolvió true
// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// const esPositivo = (x) => x >= 0
// some(numeros, multiploDe10) // true
// some(numeros, esPositivo) // true

const numeros = [10, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;
const esPositivo = (x) => x >= 0;

// const some = (array, callback) => {
//     for (item of array) {
//         if (callback(item)) {
//             return true;
//         }
//     }
// }

const some = (array, callback) => {
    return array.some(callback);
}
console.log(some(numeros, multiploDe10)) // true
console.log(some(numeros, esPositivo)) // true