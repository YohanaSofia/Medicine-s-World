/* 
  Areas Posiveis: 
  Neurologia:
  Cardiologia:
  Clinica geral: acertar todas as perguntas 
  Cirurgia Plastica:
  Ortopedia: 
  Ginecologia: 
*/

//Respostas Certas de cada pergunta
let inputCardio1 = document.querySelector('#Cardio1');
let inputOrtopedia1 = document.querySelector('#Ortopedia1');
let inputOrtopedia2 = document.querySelector('#Ortopedia2');
let inputNeuro1= document.querySelector('#Neuro1');
let inputCardio2= document.querySelector('#cardio2');
let inputPlastica1= document.querySelector('#Plastica1');
let inputPlastica2 = document.querySelector('#Plastica2');
let inputNeuro2 = document.querySelector('#Neuro2');
let inputGinecologia1 = document.querySelector('#ginecologia1');
let inputGinecologia2= document.querySelector('#ginecologia2');

//button de enviar resposta
let buttonEnviarEl = document.querySelector('#enviar');
//Criar div
let divAzulEl = document.querySelector('#alert-azul');
let sectionPerguntasEl = document.querySelector('#perguntas');
let mainQuizEl = document.querySelector('.Quiz');

//Variavel Final
let area;

//Contadores
let contCardio = 0;
let contGinecologia = 0;
let contNeuro = 0;
let contOrtopedia = 0;
let contPlastica = 0;

function principal(){
    Cardio();
    Plastica();
    Neuro();
    Ortopedia();
    Ginecologia();
    //Clicina Geral
    if( area != "Cardiologia" && area != "Cirgurgia Plástica" && area != "Ortopedia" && area != "Neurologia" && area != "Ginecolgia"){
        area = "Clínica Geral";
    }
    criarDiv();
     localStorage.setItem('medico', area);
}


function Plastica(){
    if(inputPlastica1.checked == true){
        contPlastica++;
    }
    if(inputPlastica2.checked == true){
        contPlastica++;
    }
  //Certificar area
 if( contPlastica == 2){
     area = "Cirgurgia Plástica";
 }
}


function Ortopedia(){
    if(inputOrtopedia1.checked == true){
        contOrtopedia++;
    }
    if(inputOrtopedia2.checked == true){
        contOrtopedia++;
    }
  //Certificar area
 if( contOrtopedia == 2){
     area = "Ortopedia";
 }
}


function Cardio(){
    if(inputCardio1.checked == true){
        contCardio++;
    }
    if(inputCardio2.checked == true){
        contCardio++;
    }
  //Certificar area
 if( contCardio == 2){
     area = "Cardiologia";
 }
}

function Neuro(){
    if(inputNeuro1.checked == true){
        contNeuro++;
    }
    if(inputNeuro2.checked == true){
        contNeuro++;
    }
  //Certificar area
 if( contNeuro == 2){
     area = "Neurologia";
 }
}

function Ginecologia(){
    if(inputGinecologia1.checked == true){
        contGinecologia++;
    }
    if(inputGinecologia2.checked == true){
        contGinecologia++;
    }
  //Certificar area
 if(contGinecologia == 2){
     area = "Ginecolgia";
 }
}


function criarDiv(){
    navigator.vibrate([500]);
    window.scrollTo(0, 0);
    let divAlert = document.createElement('div');
    let hrDiv = document.createElement('hr');
    divAlert.classList.add('alertResposta');
    divAlert.innerHTML = "Parabéns! Você completou o quiz. A sua área é  "  + area + ".";
    mainQuizEl.replaceChild(divAlert, divAzulEl);
    divAlert.appendChild(hrDiv);
}


buttonEnviarEl.addEventListener('click', principal);