import React from 'react';

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
const total = dados.compras.map((item) => Number(item.preco.replace('R$', ''))).reduce((a, b) => a + b);
console.log(total);




return <div>

<p>Nome: {dados.cliente}</p>
<p>Idade: {dados.idade}</p>
<p>Situação: {' '}  {/* estre treco ali adiciona um espaço ou adicionar um texto */}
  <span style={{color: dados.ativa ? 'green' : 'red' }}>{dados.ativa ? "Ativa" : "inativa"}</span></p>
<p>Total: R$ {total}</p>
{total > 10000 && <p>"Voce esta gastando muito"</p>} {/* aqui significa que se o total for maior que 10k vai vir a msg ali, mas se nao for ele retorna nada pois ele veririca se é verdadeiro e continua se for falso ele trava e nao mostra nada, uma sting que tem valor dentro dela é um valor true */ }

  </div>;
};


export default App;