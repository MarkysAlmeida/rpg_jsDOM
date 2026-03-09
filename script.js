let player;
let inimigo;

// classes
const warrior = {
    nome: "Guerreiro",
    ataque: 18,
    vida: 200
};

const mage = {
    nome: "Mago",
    ataque: 20,
    vida: 180
};

// mobs
const mobs = [
    {nome:"Goblin", ataque:12, vida:60},
    {nome:"Espírito", ataque:16, vida:40},
    {nome:"Troll", ataque:20, vida:80}
];

// log
function log(msg){
    const area = document.getElementById("mensagens");
    area.innerHTML += "<p>"+msg+"</p>";
}

// atualizar jogador
function atualizarPlayer(){
    document.getElementById("classe").innerText = player.nome;
    document.getElementById("vida").innerText = player.vida;
    document.getElementById("ataque").innerText = player.ataque;
}

// atualizar inimigo
function atualizarInimigo(){
    document.getElementById("tipoInimigo").innerText = inimigo.nome;
    document.getElementById("vidaInimigo").innerText = inimigo.vida;
    document.getElementById("ataqueInimigo").innerText = inimigo.ataque;
}

// escolher classe
function selectClass(classe){

    if(classe === "warrior"){
        player = {...warrior};
    }

    if(classe === "mage"){
        player = {...mage};
    }

    atualizarPlayer();
    log("Você escolheu "+player.nome);
}

// novo inimigo
function novoInimigo(){

    let indice = Math.floor(Math.random()*mobs.length);
    inimigo = {...mobs[indice]};

    atualizarInimigo();

    log("Um "+inimigo.nome+" apareceu!");
}

// ataque
function ataque(atacante, defensor){
    let ataque = Math.floor(Math.random() * atacante.ataque)
    defensor.vida -= ataque;

    log(atacante.nome+" atacou "+defensor.nome+" causando "+ataque+" de dano");
}

// batalha
function batalha(){

    if(!player){
        log("Escolha uma classe primeiro!");
        return;
    }

    if(!inimigo){
        log("Gere um inimigo!");
        return;
    }

    ataque(player, inimigo);

    atualizarInimigo();

    if(inimigo.vida <= 0){
        log(inimigo.nome+" foi derrotado!");
        inimigo = null;
        return;
    }

    ataque(inimigo, player);

    atualizarPlayer();

    if(player.vida <= 0){
        log("Você morreu!");
    }
}