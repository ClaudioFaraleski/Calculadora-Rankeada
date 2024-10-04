function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base no número de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

function main() {
    // Solicita ao usuário o número de vitórias e derrotas
    const vitorias = parseInt(prompt("Digite o número de vitórias:"));
    const derrotas = parseInt(prompt("Digite o número de derrotas:"));

    // Chama a função para calcular saldo e nível
    const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);

    // Exibe a mensagem final
    alert(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Executa o programa
main();

