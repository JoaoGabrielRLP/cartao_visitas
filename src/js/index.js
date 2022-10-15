/*
  
    OBJETIVO - Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior

*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
   aba.addEventListener("click", function(){
    if(aba.classList.contains("selecionado")){
        return;
    }

    selecionarAba(aba);

    mostrarInformacoesDaAba(aba);
   });

   function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
   }

   function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");

    informacaoSelecionada.classList.remove("selecionado");

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const infoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);
    infoASerMostrada.classList.add("selecionado");
   }
})