
let count = 0;

function COMPRAR() {
  count += 1 //adiciona 1 a mais no count//
  let carrinho = document.getElementById("cart-item-count");
  carrinho.style.display="block";
  carrinho.innerText=count
  mostarQntd(count)
  carrinho.style.display='flex';
}

function mostarQntd(count) {
  count_compras = document.getElementById("cart-item-count")
  count_compras.innerHTML = count
}

function apareceCarrinho(){
  let car_lateral = document.getElementById("sideBar")
  car_lateral.style.display='block';
}


function fecharCarrinho(){
  let x = document.getElementById("sideBar")
  x.style.display='none';
}
function mostrar(pergunta) {
  const resposta = pergunta.nextElementSibling;

  if (resposta.style.display === "none" || resposta.style.display === "") {
    resposta.style.display = "block";
  } else {
    resposta.style.display = "none";
  }
}

