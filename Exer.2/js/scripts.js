function ingresso() {

    let preco = 5.0;
    let despesas = 200.0;
    let pessoas = 120;
    let lucroMaximo = 0;
    let melhorPreco = 0;
    let alerta = '';

    while (preco >= 1.0) {
        let lucro = (preco * pessoas) - despesas;
        alerta += `Preço: R$ ${preco.toFixed(2)} - Pessoas: ${pessoas} - Lucro: R$ ${lucro.toFixed(2)}\n`;
        if (lucro > lucroMaximo) {
            lucroMaximo = lucro;
            melhorPreco = preco;
        }
        preco -= 0.5;
        pessoas += 26;
    }
    alert(`${alerta }\nLucro máximo: R$ ${lucroMaximo.toFixed(2)} com ingresso a R$ ${melhorPreco.toFixed(2)}`);
}