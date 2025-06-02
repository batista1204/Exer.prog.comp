function exercicio5() { //executa todas as tabuadas
    let escolhida, tabuada, quant = 0;

     let num = Number(prompt("Informe um número para ver a tabuada: ")); // Solicita ao usuário um número   

     while (quant <= 10) { // Enquanto a quantidade for menor que 10
        tabuada = num * quant; // Calcula a tabuada // tabuada é igual numero vez a tabuada que vc quer

        alert(`${num} x ${quant} = ${tabuada}`); // mostra o resultado da tabuada

        quant++; // soma a quantidade
     }
}