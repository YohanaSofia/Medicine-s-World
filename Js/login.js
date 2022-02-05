let emailInputLogin = document.querySelector('#formGroupInput1');
let senhaInputLogin = document.querySelector('#formGroupInput2');
let emailDoCadastro = localStorage.getItem('Email-do-usuario');
let senhaDoCadastro = localStorage.getItem('Senha-do-usuario');
let buttonContinuar = document.querySelector('#continuar');
let divPrincipalEl = document.querySelector('.div-principal');
let divCadastro = document.querySelector('.mb-3');
let login = false;

function logar() {
    if (emailDoCadastro === emailInputLogin.value || senhaInputLogin.value === senhaDoCadastro) {
        login = true;
        navigator.vibrate(500);
        window.location.href = "https://yohanasofia.github.io/Medicine-s-World/Perfil.html";
        localStorage.setItem('login', login);
    } else {
        let divAlert = document.createElement('div');
        divAlert.classList.add('alert-erro');
        divAlert.innerHTML = "Usuario/Senha invalidos";
        divPrincipalEl.insertBefore(divAlert, divCadastro);
    }

}

buttonContinuar.addEventListener('click', logar);
