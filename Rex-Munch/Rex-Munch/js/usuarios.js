'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let coleccionUsuarios = obtenerUsuarios();

const mostrarUsuarios = () => {

    tabla.innerHTML = '';

    coleccionUsuarios.forEach(objUsuario => {
        let filtro = inputFiltro.value.toLowerCase();
        if (objUsuario.nombre.toLowerCase().includes(filtro) || objUsuario.correo.toLowerCase().includes(filtro) || objUsuario.telefono.toLowerCase().includes(filtro) || objUsuario.rol.toLowerCase().includes(filtro)) {
            let fila = tabla.insertRow();
            fila.insertCell().innerHTML = objUsuario.nombre;
            fila.insertCell().innerHTML = objUsuario.correo;
            fila.insertCell().innerHTML = objUsuario.telefono;
            fila.insertCell().innerHTML = objUsuario.rol;
        }

    })
}

mostrarUsuarios();
inputFiltro.addEventListener('keyup', mostrarUsuarios);