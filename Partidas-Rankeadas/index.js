const prompt = require("prompt-sync")();
let vitorias = Number(prompt("Digite o número de vitórias:"));
let derrotas = Number(prompt("Digite o número de derrotas:"));
let nivel = "";

function calculoDeVitorias (vitorias, derrotas) {
  return vitorias - derrotas;;
}

let saldoVitorias = calculoDeVitorias(vitorias, derrotas);

if (saldoVitorias <= 10) {
  nivel = "FERRO";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
  nivel = "BRONZE";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
  nivel = "PRATA";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
  nivel = "OURO";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
  nivel = "DIAMANTE";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
  nivel = "LENDÁRIO";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
} else if (saldoVitorias >= 101) {
  nivel = "IMORTAL";
  console.log(`O Herói tem saldo de **${saldoVitorias}** vitórias e está no nível de **${nivel}**`);
}

