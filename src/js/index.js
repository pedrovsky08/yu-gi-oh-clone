// VARIVEIS
const btnAvancar = document.getElementById('btn-avancar');

const btnVoltar = document.getElementById('btn-voltar');

const cartoes = document.querySelectorAll('.cartao');
console.log(cartoes);

let cartaoAtual = 0;

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