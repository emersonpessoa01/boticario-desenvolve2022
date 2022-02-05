//variaveis do carro1
let xCarro = 600;
let yCarro = 40;
let comprimentoCarro = 50;
let alturaCarro = 40;
let velocidadeCarro1 = 2;

//variaveis do carro2
let xCarro2 = 600;
let yCarro2 = 96;
let comprimentoCarro2 = 50;
let alturaCarro2 = 40;
let velocidadeCarro2 = 2.5;

//variaveis do carro3
let xCarro3 = 600;
let yCarro3 = 150;
let comprimentoCarro3 = 50;
let alturaCarro3 = 40;
let velocidadeCarro3 = 3.2;

//codigo carro
function mostraCarro() {
  image(imagemDoCarro, xCarro, yCarro, comprimentoCarro, alturaCarro);
  image(imagemDoCarro2, xCarro2, yCarro2, comprimentoCarro2, alturaCarro2);
  image(imagemDoCarro3, xCarro3, yCarro3, comprimentoCarro3, alturaCarro3);
}

function movimentaCarro() {
  //posicao do carro no eixo x
  xCarro -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  //   console.log(xCarro)
}
function voltaPosicaoInicialDoCarro() {
  if (xCarro < -50) {
    xCarro = 600;
  }
  if (xCarro2 < -50) {
    xCarro2 = 600;
  }
  if (xCarro3 < -50) {
    xCarro3 = 600;
  }
}
