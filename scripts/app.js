// seleciona o texto digitado e retira os acentos
function selecionarTextArea() {
    let campo = document.querySelector('textarea').value;
    return campo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// criptografa o texto digitado
function criptografar() {
    campo = selecionarTextArea();
    let resultado = campo.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
    return resultado;
}

// descriptografa o texto digitado
function descriptografar() {
    campo = selecionarTextArea();
    let resultado = campo.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    return resultado;
}

// chama as funções de criptografar e exibe o resultado na tela
function cliqueCriptografar() {
    let campo = document.querySelector('.secundario__resultado__titulo');
    campo.innerHTML = criptografar();
    mostrarDiv(".secundario__resultado");
    ocultarDiv();
    limparCampo();
}

// chama as funções de descriptografar e exibe o resultado na tela
function cliqueDescriptografar() {
    let campo = document.querySelector('.secundario__resultado__titulo');
    campo.innerHTML = descriptografar();
    mostrarDiv(".secundario__resultado");
    ocultarDiv();
    limparCampo();
}

// copia o texto da tela para a área de transferência (clipboard)
function cliqueCopiar() {
    navigator.clipboard.writeText(document.querySelector('.secundario__resultado__titulo').innerHTML);
    limparResultado()
}

// oculta a div
function ocultarDiv() {
    let div = document.querySelector('.secundario__vazio');
    div.style.display = 'none';
}

function mostrarDiv(classe) {
    let div = document.querySelector(classe);
    div.style.display = 'flex';
}

// limpa o campo do textarea
function limparCampo() {
    document.querySelector('textarea').value = '';
}

function limparResultado() {
    document.querySelector('.secundario__resultado__titulo').innerHTML = 'Copiado com sucesso!';
}