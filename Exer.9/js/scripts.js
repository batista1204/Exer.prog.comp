function exercicio9() {
    let idade, peso, altura;
    let conta = 0;
    let idadeinformada = 0;
    let pesoinformado = 0;
    let alturinformada = 0;
    let condi_1 = 0;
    let cond_2 = 0;
    let alt90 = 0;
    let media_idade;

    for (conta = 0; conta < 10; conta++) {
        idade = Number(prompt("Digite sua idade atual:"));
        peso = Number(prompt("Digite o seu peso atual:"));
        altura = Number(prompt("Digite sua altura atual (em centímetros):"));

        if (peso > 90 && altura < 150) {
            condi_1++;
        }

        if (idade > 10 && idade < 30 && altura > 190) {
            cond_2++;
        }

        if (altura > 190) {
            alt90++; // contando quantas pessoas têm mais de 1.90m para usar na divisão
        }

        idadeinformada += idade;
        pesoinformado += peso;
        alturinformada += altura;
    }

    media_idade = idadeinformada / 10;

    let proporcao = alt90 > 0 ? (cond_2 / alt90) : 0;

    alert("A idade média das pessoas é: " + media_idade);
    alert("A quantidade de pessoas com peso superior a 90kg e com menos de 1,5m é: " + condi_1);
    alert("A proporção de pessoas entre 10 e 30 anos que medem mais de 1,9m é: " + proporcao);
}