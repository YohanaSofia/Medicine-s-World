//Salvar dados do cadastro
let buttonCadastrar =  document.querySelector("#button-cadastrar");
let inputNomeEl = document.querySelector('#formGroupExampleInput0');
let inputEmailEl = document.querySelector('#formGroupExampleInput1');
let inputSenhaEl = document.querySelector('#formGroupExampleInput2');
let divPrincipalEl = document.querySelector('.div-principal');
let divCadastro = document.querySelector('.mb-3');
let buttonComecarEl = document.querySelector('#frase-button');
let login = false;

  function salvar(){
    mudarDePagina()
    login = true;
    localStorage.setItem('login', login);
  }

  function mudarDePagina(){
    let emailGuardado = localStorage.getItem('Email-do-usuario');
    if(!inputNomeEl|| !inputEmailEl.value || !inputSenhaEl.value){ //input vazio
        let divAlert = document.createElement('div');
        divAlert.classList.add('alert-erro');
        divAlert.innerHTML = "Usuario/Senha vazios";
        divPrincipalEl.insertBefore(divAlert, divCadastro);
       }
    if(inputEmailEl.value == emailGuardado){
           let divAlert = document.createElement('div');
        divAlert.classList.add('alert-erro');
        divAlert.innerHTML = "O email já foi cadastrado!";
        divPrincipalEl.insertBefore(divAlert, divCadastro);
    }
       else{
       navigator.vibrate(500);
       window.location.href = "https://yohanasofia.github.io/Medicine-s-World/Perfil.html"; 
       localStorage.setItem('Nome-do-usuario', inputNomeEl.value);
       localStorage.setItem('Email-do-usuario', inputEmailEl.value);
       localStorage.setItem('Senha-do-usuario', inputSenhaEl.value);
        }
  }
  buttonCadastrar.addEventListener('click', salvar);
