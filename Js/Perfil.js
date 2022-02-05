let tituloNomeEl = document.querySelector('.titulo');   //h1 do nome do usuario da pagina de perfil
let senhaInfoEl = document.querySelector('#Senha-Info'); //input  da senha  do usuario da pagina de perfil
let emailInfoEl = document.querySelector('#Email-Info');
let conhecimentoEl = document.querySelector('#conhecimento');
let medicoEL = document.querySelector('.input-medico');
let fraseEl = document.querySelector('#input-frase');
let aEl = document.querySelector('#a-nav');
let buttonSair = document.querySelector('#sair');
let aEntrar = document.querySelector('#a-nav');
let h1personagem = document.querySelector('.personagem');
let ulMenuEl = document.querySelector('nav ul');
let imgEntrar = document.querySelector('#perfil');

function mudarNav() {
    let liPerfil = document.createElement('li');
    let imgPerfil = document.createElement('img');
    imgPerfil.src = "https://i.pinimg.com/736x/9c/85/e5/9c85e5c852d3d4b61fc9c007127eede4.jpg";
    imgPerfil.alt = "img-Logado";
    aEntrar.href = "perfil.html";
    aEntrar.replaceChild(imgPerfil, imgEntrar);
}

function sair(){
    let loginBool = false;
    localStorage.setItem('login', loginBool);
    window.location.href = "index.html"; 
}

function mudar() {
    let nomeSalvo = localStorage.getItem('Nome-do-usuario');
    let senhaSalvo = localStorage.getItem('Senha-do-usuario');
    let emailSalvo = localStorage.getItem('Email-do-usuario');
    let fraseSalvo = localStorage.getItem('pontos-Frase');
    let personagemSalvo = localStorage.getItem('nome-personagem');
    let conhecimentoSalvo = localStorage.getItem('pontos-Conhecimento');
    let AreaSalva = localStorage.getItem('medico');
    h1personagem.value = personagemSalvo;
    fraseEl.value = fraseSalvo;
    medicoEL.value = AreaSalva;
    conhecimentoEl.value = conhecimentoSalvo;
    tituloNomeEl.innerHTML = nomeSalvo;
    senhaInfoEl.value = senhaSalvo;
    emailInfoEl.value = emailSalvo;

}
mudar();
mudarNav();

buttonSair.addEventListener('click', sair);