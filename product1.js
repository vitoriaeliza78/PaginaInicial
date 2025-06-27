
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

function apareceCarrinho(imagemURL, nome){
 let carrinho = document.getElementById("iten-carrinho")
 let item = documento.createElement('div')
 item.classList.add('iten-carrinho')
 item.innerHTML=
  <img src="./img/produto.jpg" alt="Produto 1" style="width: 50px; height: 50px;"></img>;
  <p>Lápis de cor</p>;
  <p>R$ 32,00</p>;
  <button onClick="removerItem(this)"></button>
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

