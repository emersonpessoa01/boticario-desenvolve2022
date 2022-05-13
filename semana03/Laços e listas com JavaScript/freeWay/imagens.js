//imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;

//sons dos jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  imagemDoCarro = loadImage("img/carro-1.png");
  imagemDoCarro2 = loadImage("img/carro-2.png");
  imagemDoCarro3 = loadImage("img/carro-3.png");
  imagemCarros = [
    imagemDoCarro,
    imagemDoCarro2,
    imagemDoCarro3,
    imagemDoCarro,
    imagemDoCarro2,
    imagemDoCarro3,
  ];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
