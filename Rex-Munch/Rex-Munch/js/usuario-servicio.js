'use strict';

//estado
//1-- activo
//2-- inactivo
//3-- pendiente de aceptacion
//4-- vetado
//5-- pendiente de cambio de contraseña

let listaUsuarios = [{
    nombre: 'Andrés Chinchilla Hernández',
    correo: 'achinchillah@ucenfotec.ac.cr',
    contrasenna: '123',
    rol: 'admin',
    telefono: '70167638',
    estado: 1
}, {
    nombre: 'Daniel Sandoval Araya',
    correo: 'dsandovala@ucenfotec.ac.cr',
    contrasenna: '456',
    rol: 'cliente',
    telefono: '86488146',
    estado: 1
}, {
    nombre: 'Fernanda Umaña Chaves',
    correo: 'mumanac@ucenfotec.ac.cr',
    contrasenna: '789',
    rol: 'dueño',
    telefono: '62750364',
    estado: 1
}, {
    nombre: 'Bryan Aleman Marcia',
    correo: 'balemanm@ucenfotec.ac.cr',
    contrasenna: '012',
    rol: 'gerente',
    telefono: '61556407',
    estado: 1
}];

const obtenerUsuarios = () => {
    return listaUsuarios;
};

const validarCredenciales = (correo, contrasenna) => {
    let listaUsuarios = obtenerUsuarios();
    let autenticado = false;
    let msjError = 'Usuario o contraseña invalido';

    listaUsuarios.forEach(usuario => {
        if (usuario.correo == correo) {
            if ((usuario.contrasenna == contrasenna) && (usuario.estado == 1)) {
                localStorage.setItem('usuarioConectado', JSON.stringify(usuario));
                autenticado = true;

            } else {
                if (usuario.estado != 1) {
                    msjError = 'El usuario se encuentra inactivo o pendiente de confirmación, por favor contacte al administrador de la aplicación';
                }
            }
        }

    });
    if (autenticado == true) {
        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión correcto',
            text: 'Bienvenido'
        }).then(() => {
            window.location.href = 'pagina_principal.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No se pudo iniciar la sesión',
            text: msjError
        });
    }
};