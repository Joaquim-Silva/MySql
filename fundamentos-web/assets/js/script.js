

/*
Case Sensitive =  reconhece letras maisuclas e minusculas
Por Tag: getElementByTagName()
Por Id: getElementById()
por nome: getElementsByName()
por Classe: getElementByClassNome()
por Seletor: querySlector()
*/

let nome = window.document.getElementById('nome')
let idade = window.document.querySelector('#idade')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
 let nomeOk = false
 let emailOk = false
 let assuntoOk = false
 let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
Apelido.style.width = '100%'
email.style.width = '150%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'
    }
    else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk= true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@')==-1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML = 'E-mail  Invalido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = 'Nome Válido'
        txtEmail.style.color = 'green'
        emailOk= true
    }
}

function validaAssunto(){
    let txtAssunto=document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres'
        txtAssunto.style.color='red'
        txtAssunto.style.display='block'

    }

    else{
        txtAssunto.style.display='none'
        assuntoOk= true

    }
}

function enviar(){
    if (nomeOk == true  && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Preencha o formulario corretamente antes de enviar')
    }
}

function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
  mapa.style.height = '250px'

}