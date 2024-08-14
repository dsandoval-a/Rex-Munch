'use strict';

const tabla = document.querySelector('#tbl-usuarios tbody');
const inputFiltro = document.querySelector('#txt-filtro');
let coleccionUsuarios = listaComidas();

const mostrarlistaComidas = () => {

        tabla.innerHTML = '';

        coleccionUsuarios.forEach(objUsuario => {
                let filtro = inputFiltro.value.toLowerCase();
                if (objUsuario.nombre.toLowerCase().includes(filtro) || objUsuario.precio.toLowerCase().includes(filtro) || objUsuario.top.toLowerCase().includes(filtro) {
                        let fila = tabla.insertRow();
                        fila.insertCell().innerHTML = objUsuario.nombre;
                        fila.insertCell().innerHTML = objUsuario.precio;
                        fila.insertCell().innerHTML = objUsuario.top;
                    }

                })
        }

        mostrarlistaComidas();
        inputFiltro.addEventListener('keyup', mostrarUsuarios);