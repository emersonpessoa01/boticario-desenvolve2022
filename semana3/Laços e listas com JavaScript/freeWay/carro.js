//codigo do carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 263, 318];
let velocidadeCarros = [6, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarros = [50, 50, 50,50, 50, 50];
let alturaCarros = [40, 40, 40,40, 40, 40];

//codigo carro
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i]
    );
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i]
    );
    image(
      imagemCarros[i],
      xCarros[i],
      yCarros[i],
      comprimentoCarros[i],
      alturaCarros[i]
    );
    //   console.log(yCarros[1])
    //   console.log(`O valor de repetição do i nesta repetição é ${i}`)
  }
}

function movimentaCarro() {
  //posicao do carro no eixo x
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
  //   xCarros[0] -= velocidadeCarros[0];
  //   xCarros[1] -= velocidadeCarros[1];
  //   xCarros[2] -= velocidadeCarros[2];
  //   console.log(xCarro)
}
function voltaPosicaoInicialDoCarro() {
  //loop do movimento
  for (let i = 0; i < imagemCarros.length; i++) {
    // if (xCarros[i] < -50) {
    //   xCarros[i] = 600;
    // }
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
  //   if (xCarros[0] < -50) {
  //     xCarros[0] = 600;
  //   }
  //   if (xCarros[1] < -50) {
  //     xCarros[1] = 600;
  //   }
  //   if (xCarros[2] < -50) {
  //     xCarros[2] = 600;
  //   }
}

function passouTodaATela(xCarro) {
  return xCarro < -50;
}
