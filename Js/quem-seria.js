/* Personagens:
   Richard Webber: Você é uma pessoa amigavel, madura, além de saber ressaltar o que há de bom nos outros, 
   além de ser um líder nato e mesmo assim isso não te impede de ter suas próprias complicaçõs na vida.
   Meredith Grey:Você é uma pessoa reservada, não teme a nada, faz barreiras pra não se machucar e já sofreu algum tipo de abandono, mas sempre está do lado de quem você ama quando precisam.
   Derek Sheperd: você é uma pessoa que conquista as pessoas com seu carisma, sendo admirado por todos 
   e visto como a estrela do hospital, claro que aproveita essa atenção.   
   Cristina Yang: É sarcástica, competitiva,fria, calculista, sonhadora, arrogante e a melhor em tudo que faz, 
   mas tem coração mole com suas pessoas proximas a si, além de ser  uma ótima amiga..
   Jackson Avery: É conhecido como uma pessoa privilegiada e atraente. Além disso, tem dificuldades em assumir que está errado, 
    apesar disso é um bom profissional, e sabe lidar com responsabilidades e decisões difícieis. 
   Owen Hunt: Você carrega o mundo nas suas costas e tem dificuldade de lidar com suas cicatrizes. Quando ama,
   o faz intensamente, quando não ama é um lobo solitário. Além disso, é um ótimo profissional, entende suas 
   responsabilidades, sabe aconselhar e compreender seus colegas. 
   Callie Torres: Você é ousada, inteligente e pronta para manejar os desafios impostos pelas limitações da medicina,
   sabe se divertir e luta pelos seus sonhos.
   Arizona Robbins:  Você é uma pessoa de forte expressão emocional. As vezes você duvida de si mesma por causa da auto
   crítica. Enquanto Robbins usa tênis de rodinha para mostrar autenticidade e irreverência, você também tem sua marca
   para mostrar sua própria singularidade no mundo.
   Miranda Bailey: É uma pessoa que impõe respeito, determinada, exigente e a melhor no que faz. Você é 
   uma pessoa que duela com a vunerabilidade e a força, expressa na sua sensibilidade aliado ao espírito de liderança
   Alex Karev: É conhecido como alguém  incrivelmente arrogante e imaturo, mas no fundo isso é uma forma de se proteger e não ser magoado novamente.
   Mesmo assim você se preocupa com tudo e precisa de um tempo para  aprender a demonstrar que se preocupava com as pessoas que gosta.
*/

let contadorDrek = 0; //1
let contadorYang = 0; //2
let contadorGrey = 0;  //3
let contadorBailey = 0; //4
let contadorKarev = 0; //5
let contadorWebber = 0; //6
let contadorAvery = 0; //7
let contadorArozina = 0; //8
let contadorHunt = 0;  //9
let contadorCallie = 0; //10
let pessoa = " ";
let p;


//Pegar de id de todos as respostas da pergunta 1
let inputDeterminada = document.querySelector('#determinada');
let inputOrgulhosa = document.querySelector('#orgulhosa');
let inputImatura = document.querySelector('#imatura');
let inputExtrovertida = document.querySelector('#extrovertida');
let inputEmocionada = document.querySelector('#emocionada');
let inputIndecisa = document.querySelector('#indecisa');
let inputFocada = document.querySelector('#focada');
let inputIgnorante = document.querySelector('#ignorante');
let inputConselheira = document.querySelector('#conselheira');


//Pergar id de todos as respostas da pergunta 2
let inputCardio= document.querySelector('#Cardio');
let inputPediatria = document.querySelector('#Pediatria');
let inputNeuro= document.querySelector('#Neuro');
let inputTrauma = document.querySelector('#Trauma');
let inputOrtopedia = document.querySelector('#orto');
let inputPlastica = document.querySelector('#Plastica');
let inputGeral = document.querySelector('#Geral');


//Pergar id de todos as respostas da pergunta 3
let inputSim = document.querySelector('#Nao');
let inputNao = document.querySelector('#Sim');

//Pergar id de todos as respostas da pergunta 4
let inputCoracao= document.querySelector('#coracao');
let inputOsso = document.querySelector('#osso');
let inputImplantar  = document.querySelector('#implantar');
let inputCerebro= document.querySelector('#cerebro');
let inputEmergencia = document.querySelector('#emergencia');

//Pergar id de todos as respostas da pergunta 5
let inputPessima = document.querySelector('#pessima');
let inputMediana = document.querySelector('#mediana');
let inputBoa  = document.querySelector('#boa');

//Pergar id de todos as respostas da pergunta 6
let inputNaoSabeLidar = document.querySelector('#N-lidar');
let inputLidaBem = document.querySelector('#lidarbem');

// Pegar id da resposta 7
let inputBailey = document.querySelectorAll('#Bailey');

//button de enviar resposta
let buttonEnviarEl = document.querySelector('#enviar');
let sectionPerguntasEl = document.querySelector('#perguntas');
let mainQuizEl = document.querySelector('.Quiz');

//Funções 
function principal(){
    Hunt(); //Caso n seja nenhum dos outros 9 será o Owen
    Yang(); //1
    Bailey(); //2
    Drek(); //3
    Grey(); //4
    Karev(); //5
    Avery(); //6
    Arizona(); //7
    Hunt(); //8
    Callie(); //9
    Webber(); //10
    criarDiv();
    if(pessoa == " "){
       pessoa = "Owen Hunt";
    }
    localStorage.setItem('nome-personagem', pessoa);
}

function Hunt(){
   if(inputIndecisa.checked == true){
        contadorHunt++;
    }
    if(inputTrauma.checked == true){
        contadorHunt++;
    }
    if(inputEmergencia.checked == true){ 
        contadorHunt++;
    }
    if(inputNaoSabeLidar.checked == true){
        contadorHunt++;
    }
    if(inputSim.checked == true){
        contadorHunt++;
    }
    if( contadorHunt >= 3){
     pessoa = "Owen Hunt";
     p = "Você carrega o mundo nas suas costas e tem dificuldade de lidar com suas cicatrizes. Quando ama,  o faz intensamente, quando não ama é um lobo solitário. Além disso, é um ótimo profissional, entende suas  responsabilidades, sabe aconselhar e compreender seus colegas.";
    }
}
function Callie(){
   if(inputExtrovertida.checked == true){
        contadorCallie++;
    }
    if(inputOrtopedia.checked == true){
        contadorCallie++;
    }
    if(inputOsso.checked == true){ 
        contadorCallie++;
    }
    if(inputNaoSabeLidar.checked == true){
        contadorCallie++;
    }
    if(inputSim.checked == true){
        contadorCallie++;
    }
     if(inputMediana.checked == true){
        contadorCallie++;
    }
    if( contadorCallie >= 4){
     pessoa = "Callie Torres";
     p = " Você é ousada, inteligente e pronta para manejar os desafios impostos pelas limitações da medicina, sabe se divertir e luta pelos seus sonhos.";
    }
}
function Webber(){
   if(inputConselheira.checked == true){
        contadorWebber++;
    }
    if(inputGeral.checked == true){
        contadorWebber++;
    }
    if(inputEmergencia.checked == true){ 
        contadorWebber++;
    }
    if(inputLidaBem.checked == true){
        contadorWebber++;
    }
    if(inputSim.checked == true){
          contadorWebber++;
    }
     if(inputPessima.checked == true){
     contadorWebber++;
    }
    if( contadorWebber >= 4){
     pessoa = "Richard Webber";
     p = " Você é uma pessoa amigavel, madura, além de saber ressaltar o que há de bom nos outros,  além de ser um líder nato e mesmo assim isso não te impede de ter suas próprias complicaçõs na vida.";
    }
}
function Avery(){
    if(inputFocada.checked == true){
        contadorAvery++;
    }
    if(inputPlastica.checked == true){
        contadorAvery++;
    }
    if(inputImplantar.checked == true){ 
        contadorAvery++;
    }
    if(inputMediana.checked == true){
        contadorAvery++;
    }
    if(inputSim.checked == true){
        contadorAvery++;
    }
    if( contadorAvery >= 4){
     pessoa = "Jackson Avery";
     p = " É conhecido como uma pessoa privilegiada e atraente. Além disso, tem dificuldades em assumir que está errado, apesar disso é um bom profissional, e sabe lidar com responsabilidades e decisões difícieis.";
    }
}
function Arizona(){
        if(inputEmocionada.checked == true){
        contadorKarev++;
    }
    if(inputPediatria.checked == true){
        contadorKarev++;
    }
    if(inputNaoSabeLidar.checked == true){
        contadorKarev++;
    }
    if(inputPessima.checked == true){
        contadorKarev++;
    }
    if(inputSim.checked == true){
        contadorKarev++;
    }
    if( contadorKarev >= 4){
     pessoa = "Arizona Robbins";
     p = "Você é uma pessoa de forte expressão emocional. As vezes você duvida de si mesma por causa da autocrítica. Enquanto Robbins usa tênis de rodinha para mostrar autenticidade e irreverência, você também tem sua marca para mostrar sua própria singularidade no mundo.";
    }
}
function Karev(){
    if(inputImatura.checked == true){
        contadorKarev++;
    }
    if(inputPediatria.checked == true){
        contadorKarev++;
    }
    if(inputImplantar.checked == true){ // Precisa ser trocado
        contadorKarev++;
    }
    if(inputPessima.checked == true){
        contadorKarev++;
    }
    if(inputSim.checked == true){
        contadorKarev++;
    }
    if( contadorKarev >= 4){
     pessoa = " Alex Karev";
     p = "É conhecido como alguém  incrivelmente arrogante e imaturo, mas no fundo isso é uma forma de se proteger e não ser magoado novamente.Mesmo assim você se preocupa com tudo e precisa de um tempo para  aprender a demonstrar que se preocupa com as pessoas que gosta.";
    }
}
function Grey(){
    if(inputIgnorante.checked == true){
        contadorGrey++;
    }
    if(inputGeral.checked == true){
        contadorGrey++;
    }
    if(inputImplantar.checked == true){
        contadorGrey++;
    }
    if(inputMediana.checked == true){
        contadorGrey++;
    }
    if(inputSim.checked == true){
        contadorGrey++;
    }
    if( contadorGrey >= 4){
     pessoa = "Meredith Grey";
     p = "Você é uma pessoa reservada, não teme a nada, faz barreiras pra não se machucar e já sofreu algum tipo de abandono, mas sempre está do lado de quem você ama quando precisam.";
    }
}
 

function Drek(){
    if(inputOrgulhosa.checked == true){
        contadorDrek++;
    }
    if(inputNeuro.checked == true){
        contadorDrek++;
    }
    if(inputCerebro.checked == true){
        contadorDrek++;
    }
    if(inputMediana.checked == true){
        contadorDrek++;
    }
    if(inputSim.checked == true){
        contadorDrek++;
    }
    if( contadorDrek >= 4){
     pessoa = "Derek Sheperd";
     p = "Você é uma pessoa que conquista as pessoas com seu carisma, sendo admirado por todos e visto como a estrela do hospital, claro que aproveita essa atenção. ";
    }
} 

function Yang(){
//Yang
    if(inputOrgulhosa.checked == true){
        contadorYang++;
    }
    if(inputCardio.checked == true){
        contadorYang++;
    }
    if(inputNao.checked == true){
        contadorYang++;
    }
    if(inputPessima.checked == true){
        contadorYang++;
    }
    if(inputCoracao.checked == true){
        contadorYang++;
    }
    if( contadorYang >= 4){
     pessoa = "Cristina Yang";
     p = "É sarcástica, competitiva,fria, calculista, sonhadora, arrogante e a melhor em tudo que faz,  mas tem coração mole com suas pessoas proximas a si, além de ser  uma ótima amiga.";
    }
    return contadorYang;
   
}



function Bailey(){
    if(inputDeterminada.checked == true){
        contadorBailey++;
    }
    if(inputGeral.checked == true){
         contadorBailey++;
    }
    if(inputEmergencia.checked == true){
        contadorBailey++;
    }
    if(inputBoa.checked == true){
     contadorBailey++;
    }
    if(inputLidaBem.checked == true){
     contadorBailey++;
    }
    if(inputBailey.checked == true){
    contadorBailey++;
    }
    if(  contadorBailey >= 4){
     pessoa = "Miranda Bailey";
     p = "É uma pessoa que impõe respeito, determinada, exigente e a melhor no que faz. Você é uma pessoa que duela com a vunerabilidade e a força, expressa na sua sensibilidade o espírito de liderança";
    }
     
}
function criarDiv(){
    navigator.vibrate([500]);
    window.scrollTo(0, 0);
    let divAlert = document.createElement('div');
    let hrDiv = document.createElement('hr');
    let pAlert = document.createElement('p');
    let h1Alert = document.createElement('h1');
    divAlert.classList.add('alertResposta');
    h1Alert.classList.add('h1Alert');
    h1Alert.innerHTML = pessoa;
    pAlert.innerHTML = p;
    mainQuizEl.insertBefore(divAlert, sectionPerguntasEl);
    divAlert.appendChild(h1Alert);
    divAlert.appendChild(hrDiv)
    divAlert.appendChild(pAlert);
}


buttonEnviarEl.addEventListener('click', principal);