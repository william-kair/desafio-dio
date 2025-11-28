//Desafio 1 do curso de Lógica de Programação - DIO

let nomeHeroi = "Link" //declaração de variável do tipo string
let xpHeroi = 300 //declaração de variável do tipo numérico
let nivelHeroi = "" //declaração de variável string

if (xpHeroi < 1000) { //condições para definir o nível do herói
    nivelHeroi = "Ferro"
} else if (xpHeroi >= 1000 && xp < 2000) {
    nivelHeroi = "Bronze"
} else if (xpHeroi >= 2000 && xp < 5000) {
    nivelHeroi = "Prata"
} else if (xpHeroi >= 5000 && xp < 7000) {
    nivelHeroi = "Ouro"
} else if (xpHeroi >= 7000 && xp < 8000) {
    nivelHeroi = "Platina"
} else if (xpHeroi >= 8000 && xp < 9000) {
    nivelHeroi = "Ascendente"
} else if (xpHeroi >= 9000 && xp <= 10000) {
    nivel = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi) //imprime mensagem com o nome do heroi e o seu nível