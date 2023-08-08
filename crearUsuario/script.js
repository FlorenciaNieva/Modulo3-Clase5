// crearUsuario(callback)
// Crear una funcióm crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

const confirmarCreacion = (nombre) => alert(`Usuario ${nombre} creado!`);

crearUsuario = (callback) => {
    const nombre = prompt('Por favor, ingrese su nombre');
    callback(nombre);
}

crearUsuario(confirmarCreacion);