document.getElementById("botao").addEventListener("click", function() {
    window.location.href = "main.html";
});
const mensagemElement = document.getElementById("mensagem");
const mensagemText = "Olá, é um prazer te receber por aqui aqui! 🥰";
let mensagemIndex = 0;

function escreverMensagem() {
    if (mensagemIndex < mensagemText.length) {
        mensagemElement.innerHTML += mensagemText.charAt(mensagemIndex);
        mensagemIndex++;
        setTimeout(escreverMensagem, 50); // Ajuste o tempo de digitação (em milissegundos) conforme desejado
    }
}

window.addEventListener("load", () => {
    escreverMensagem();
});

