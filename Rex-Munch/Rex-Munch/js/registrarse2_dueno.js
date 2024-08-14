'use strict';

const btnEnviar = document.querySelector('#btn-submit');
const inputNombre = document.querySelector('#txt-nombre');
const inputCorreo = document.querySelector('#txt-email');
const inputFecha = document.querySelector('#txt-fecha');

const validar = () => {
    let error = false;

    if (inputNombre.value == '') {
        error = true;
        inputNombre.classList.add('error');
    } else {
        inputNombre.classList.remove('error');
    }

    if (inputCorreo.value == '') {
        error = true;
        inputCorreo.classList.add('error');
    } else {
        inputCorreo.classList.remove('error');
    }

    if (inputFecha.value == '') {
        error = true;
        inputFecha.classList.add('error');
    } else {
        inputFecha.classList.remove('error');
    }

    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Revise los campos',
            confirmButtonText: 'Listo'
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'A REX-MUNCH'
        }).then(() => {
            window.location.href = 'inicio_sesion.html'
            obtenerDatos();
        })
    }

};

const obtenerDatos = () => {

    let nombre = inputNombre.value;
    let correo = inputCorreo.value;
    let fecha = inputFecha.value;


    console.log(nombre, correo, fecha);

};



btnEnviar.addEventListener('click', validar);
// Cuando al botón se le da click se ejcuta la función obtenerDatos