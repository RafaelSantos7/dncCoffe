//atendimento
const btnAbrirModal = document.querySelector("#atendimento");
const modal = document.querySelector("#modal");
const btnFecharModal = document.querySelector("#fechar");

// adicionando um ouvinte de evento ao botão para abrir o modal
btnAbrirModal.addEventListener("click", () => {
  modal.style.display = "block";
});

// adicionando um ouvinte de evento ao botão de fechar para fechar o modal
btnFecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});


//  botão comprar
function exibirBotaoComprar(card) {
    const botaoComprar = card.querySelector('.btn-comprar');
    botaoComprar.style.display = 'block';
}
  
function ocultarBotaoComprar(card) {
    const botaoComprar = card.querySelector('.btn-comprar');
    botaoComprar.style.display = 'none';
}