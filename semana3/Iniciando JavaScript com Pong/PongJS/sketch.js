//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

//variaveis da raquete
let xRaquete = 10;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//variaveis do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

function setup() {
  // createCanvas(1700, 740);
  createCanvas(600, 400);
}

function draw() {
  background("#002041");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  // verificaColisaoRaquete(); //
  colisaoMinhaRaqueteBiblioteca();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteOponenteBiblioteca();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro); //desenha
}

function movimentaBolinha() {
  xBolinha += velocidadeXbolinha; //movimenta
  // yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
  //colisão quando a bolinha tocar nas extremidades horizontais
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= -1;
  }
  //colisão quando a bolinha tocar nas extremidades verticais
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
  }
}

//desenha raquete
function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}
// //desenha raquete oponente
// function mostraRaqueteOponente() {
//   rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
// }

//movimento da raquete
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xRaquete -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xRaquete += 10;
  }
}

// function verificaColisaoRaquete() {
//   //quando a posicao x da bolinha for < soma da posicao x da raquete com seu comprimento
//   if (
//     xBolinha - raio < xRaquete + raqueteComprimento &&
//     yBolinha - raio < yRaquete + raqueteAltura &&
//     yBolinha + raio > yRaquete
//   ) {
//     velocidadeXbolinha *= -1;
//   }
// }
//tem a mesma função do verificaColisaoRaquete()
function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(
    xRaquete,
    yRaquete,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );

  if (colidiu) {
    velocidadeXbolinha *= -1;
  }
}
function colisaoRaqueteOponenteBiblioteca() {
  colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );

  if (colidiu) {
    velocidadeXbolinha *= -1;
  }
}

function movimentaRaqueteOponente() {
  velocidadeYOponente =
    //posicao y da bolinha(200) -posicao y raquete(150) - 10 /2 -30
    yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeYOponente;
}
