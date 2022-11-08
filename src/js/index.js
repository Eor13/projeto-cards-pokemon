/*
    step 1 - dar um jeito de pegar o eemento HTML da seta avançar

OBJETIVO 1 - quando cicar na seta de avançar temos que mostrar o próximo cartão da sita
    step 2 - da um jeito de identifacar o clique do usuario na seta avançar
    step 3 - fazer aparecer o próximo cartão da lista
    step 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando cicar na seta de votar temos que mostrar o próximo cartão da sita
    step 2 - da um jeito de identifacar o clique do usuario na seta voltar
    step 3 - fazer aparecer o  cartão anterior da lista
    step 4 - buscar o cartão que esta selecionado e esconder

*/


//step 1 - dar um jeito de pegar o eemento HTML da seta avançar
const btnAvançar = document.getElementById("botao-avancar")
const btnVoltar = document.getElementById("botao-voltar")
const cartoes = document.querySelectorAll(".cartao")
let cartaoAtual = 0

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecao")
    cartaoSelecionado.classList.remove("selecao")
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecao")
}

// ----------------------OBJETIVO 1
//step 2 - da um jeito de identifacar o clique do usuario na seta avançar
    btnAvançar.addEventListener("click",function(){

        if(cartaoAtual ===cartoes.length-1) return  //clausula de segurança

        // step 3 - fazer aparecer o próximo cartão da lista 
        cartaoAtual++
        mostrarCartao(cartaoAtual)

        // step 4 - buscar o cartão que esta selecionado e esconder
        esconderCartaoSelecionado()

    })
console.log(cartaoAtual ===cartoes.length-1)

// ---------------------OBJETIVO 2

//step 2 - da um jeito de identifacar o clique do usuario na seta avançar
    btnVoltar.addEventListener("click",function(){

        if(cartaoAtual ===0) return  //clausula de segurança

        // step 3 - buscar o cartão que esta selecionado e esconder
        esconderCartaoSelecionado()

        // step 4 - fazer aparecer o  cartão anterior da lista
        cartaoAtual--
        mostrarCartao(cartaoAtual)
    })
