//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

function setup() {
  // createCanvas(1700, 740);
  createCanvas(600, 400);
}

function draw() {
  background("#002041");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro); //desenha
}

function movimentaBolinha() {
  xBolinha += velocidadeXbolinha; //movimenta
  yBolinha += velocidadeYbolinha;
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
