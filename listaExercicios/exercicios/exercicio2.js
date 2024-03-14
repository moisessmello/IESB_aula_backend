// 2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, 
//nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let votoNulo = Number(prompt("Digite o número de votos nulos: "))
let votoBranco = Number(prompt("Digite o número de votos brancos: "))
let votoVálido = Number(prompt("Digite o número de votos válidos: "))

if(votoNulo < 0){
    console.log("Voto Nulo Inválido! ")
} else {
    console.log("Quantidade de Votos Nulos: " & votoNulo)
    console.log("Porcentagem de Votos Nulos:" & 100*(votoNulo/TotalEleitores) & "%")
}

if(votoBranco < 0){
    console.log("Voto Branco Inválido! ")
} else {
    console.log("Quantidade de Votos Brancos: " & votoBranco)
    console.log("Porcentagem de Votos Brancos:" & 100*(votoBranco/TotalEleitores) & "%")
}

if(votoVálido < 0){
    console.log("Voto Válido Inválido! ")
} else {
    console.log("Quantidade de Votos Válidos: " & votoVálido)
    console.log("Porcentagem de Votos Válidos:" & 100*(votoVálido/TotalEleitores) & "%")
}

if(TotalEleitores =0){ 
    console.log("Total de Eleitores inválido")
} else {
    console.log("O Número de Eleitores são:" & TotalEleitores)
}

