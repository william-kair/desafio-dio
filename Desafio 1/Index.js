//desafio 1 do curso de lógica de programação - DIO

let nomeHeroi = "Link" //declaração de variável do tipo string
let xpHeroi = 300 //declaração de variável do tipo numérico
let nivel = "" //declaração de variável string

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi >= 1000 && xp < 2000) {
    nivel = "Bronze"
} else if (xpHeroi >= 2000 && xp < 5000) {
    nivel = "Prata"
} else if (xpHeroi >= 5000 && xp < 7000) {
    nivel = "Ouro"
} else if (xpHeroi >= 7000 && xp < 8000) {
    nivel = "Platina"
} else if (xpHeroi >= 8000 && xp < 9000) {
    nivel = "Ascendente"
} else if (xpHeroi >= 9000 && xp <= 10000) {
    nivel = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi) //imprime na tela o nome e o nivel do herói