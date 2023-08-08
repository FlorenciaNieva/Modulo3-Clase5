// Consigna:
// Crear una función find que acepte un array y un callback y que:
// por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// devuelva el elemento pasado como argumento del primer callback que devuelva true
// si ningún callback devuelve true, devuelva undefined
// const numeros = [8, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// find(numeros, multiploDe10) // 40

const numeros = [8, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;

const find = (array, callback) => {
    return array.find(callback);
}

console.log(find(numeros, multiploDe10));