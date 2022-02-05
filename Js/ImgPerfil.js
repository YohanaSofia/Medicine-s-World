let aEntrar = document.querySelector('#a-nav');
let ulMenuEl = document.querySelector('nav ul');
let imgEntrar = document.querySelector('#perfil');
let loginBool =  localStorage.getItem('login');

function mudarNav() {
    let liPerfil = document.createElement('li');
    let imgPerfil = document.createElement('img');
    imgPerfil.src = "https://i.pinimg.com/736x/9c/85/e5/9c85e5c852d3d4b61fc9c007127eede4.jpg";
    imgPerfil.alt = "img-Logado";
    aEntrar.href = "perfil.html";
    aEntrar.replaceChild(imgPerfil, imgEntrar);   
}

function Conta(){
  if(loginBool === "true"){
      mudarNav();
  }
}

Conta()