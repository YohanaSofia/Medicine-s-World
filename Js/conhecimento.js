let inputResposta1 = document.querySelector('#temporada-8');
let inputResposta2 = document.querySelector('#Teddt-Owen');
let inputResposta3 = document.querySelector('#Carro');
let inputResposta4 = document.querySelector('#imperfeita');
let inputResposta5 = document.querySelector('#Heather');
let inputResposta6 = document.querySelector('#Drek');
let inputResposta7 = document.querySelector('#Meredith');
let buttonEnviarEl = document.querySelector('#enviar');
//Criar div
let sectionPerguntasEl = document.querySelector('#perguntas');
let mainQuizEl = document.querySelector('.Quiz');
let contador = 0;

function principal(){
    conferir(inputResposta1);
    conferir(inputResposta2);
    conferir(inputResposta3);
    conferir(inputResposta4);
    conferir(inputResposta5);
    conferir(inputResposta6);
    conferir(inputResposta7);
    criarDiv();
    localStorage.setItem('pontos-Conhecimento', contador);
  
}
function criarDiv(){
    navigator.vibrate([500]);
    window.scrollTo(0, 0);
    let divAlert = document.createElement('div');
    let hrDiv = document.createElement('hr');
    divAlert.classList.add('alertResposta');
    divAlert.innerHTML = "Parabéns! Você completou o quiz. Sua pontuação é: " + contador +" de 7";
    localStorage.setItem('pontos-conhecimento', contador);
    mainQuizEl.insertBefore(divAlert, sectionPerguntasEl);
    divAlert.appendChild(hrDiv);
}
function conferir(resposta){
    if(resposta.checked == true){
        contador++;
    }
}

buttonEnviarEl.addEventListener('click', principal);