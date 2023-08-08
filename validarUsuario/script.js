// Consigna:
// Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La función validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.

const validador = (string) => {
    if (string.length > 5) {
        return true;
    }
    return false;
}
const validarUsuario = (callback) => {
    const nombreUsuario = prompt('Por favor, ingrese su nombre');
    if (callback(nombreUsuario)) {
        alert(`Bienvenidx ${nombreUsuario}`);
    } 
    alert ('Usuario incorrecto, intentelo nuevamente');
}

validarUsuario(validador);