// VARIVEIS
const btnAvancar = document.getElementById('btn-avancar');

const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
console.log(cartoes);

let cartaoAtual = 0;

cartoes.forEach(cartao => {
    console.log(cartao);
    cartao.addEventListener('click', function(){
        const cartaVirada = cartao.querySelector('.carta-virada');
        cartao.classList.toggle('virar');
        cartaVirada.classList.toggle('mostrar-fundo-carta');

        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');
    })
});

// FUNCOES
function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
}
);

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
}
);





/*
function moverCarta (botao) {
    if (botao = btnAvancar){
        console.log(cartaoAtual);
        cartaoAtual++;
        console.log(cartaoAtual);
        cartoes[cartaoAtual].classList.add('selecionado');
    } else {
        console.log(cartaoAtual);
        cartaoAtual--;
        console.log(cartaoAtual);
        cartoes[cartaoAtual].classList.add('selecionado');           
    }
}
*/