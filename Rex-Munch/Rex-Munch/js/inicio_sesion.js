'use strict';
const inputUsuario = document.querySelector('#txt-usuario');
const inputContrasenna = document.querySelector('#txt-contrasenna');
const btnIngresar = document.querySelector('#btn_submit');

const validar = () => {
    let error = false;
    let inputsRequeridos = document.querySelectorAll('input:required');

    inputsRequeridos.forEach(input => {
        if (input.value == '') {
            error = true;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (error == true) {
        Swal.fire({
            'icon': 'warning',
            'title': 'Falta',
            'text': 'Por favor revise los campos resaltados',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            console.log('se cerro');
        });
    } else {
        validarCredenciales(inputUsuario.value, inputContrasenna.value);
    }

};

btnIngresar.addEventListener('click', validar);