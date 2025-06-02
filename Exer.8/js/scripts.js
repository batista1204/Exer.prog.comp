function exercicio8(){
    let idadeInformada, pesoInformado, alturaInformada, olhosInformados, cabeloInformado
    let contadorCondicao1 = 0, contadorCondicao2 = 0, contadorOlhosAzuis = 0, contadorRuivosNaoAzuis = 0
    let somaIdadesBaixinhos = 0

    for (let entrada = 1; entrada <= 6; entrada++) {
        do {
            idadeInformada = Number(prompt("Digite sua idade atual:"))
        } while (idadeInformada < 0)

        do {
            pesoInformado = Number(prompt("Informe seu peso (em kg):"))
        } while (pesoInformado < 0)

        do {
            alturaInformada = Number(prompt("Informe sua altura em centímetros:"))
        } while (alturaInformada < 0)

        do {
            olhosInformados = prompt("Qual a cor dos seus olhos? A - Azul | P - Preto | V - Verde | C - Castanho")
        } while (olhosInformados != "A" && olhosInformados != "P" && olhosInformados != "V" && olhosInformados != "C")

        do {
            cabeloInformado = prompt("Qual a cor do seu cabelo? P - Preto | C - Castanho | L - Louro | R - Ruivo")
        } while (cabeloInformado != "P" && cabeloInformado != "C" && cabeloInformado != "L" && cabeloInformado != "R")

        if (idadeInformada > 50 && pesoInformado < 60) {
            contadorCondicao1++
        }

        if (alturaInformada < 150) {
            somaIdadesBaixinhos += idadeInformada
            contadorCondicao2++
        }

        if (olhosInformados == "A") {
            contadorOlhosAzuis++
        }

        if (cabeloInformado == "R" && olhosInformados != "A") {
            contadorRuivosNaoAzuis++
        }
    }

    alert("Quantidade de pessoas com mais de 50 anos e peso abaixo de 60kg: " + contadorCondicao1)

    if (contadorCondicao2 > 0) {
        alert("Média de idade das pessoas com altura inferior a 1,50m: " + (somaIdadesBaixinhos / contadorCondicao2))
    } else {
        alert("Nenhuma pessoa com altura inferior a 1,50m foi registrada.")
    }

    alert("Porcentagem de entrevistados com olhos azuis: " + (contadorOlhosAzuis / 6 * 100) + "%")
    alert("Total de ruivos que não têm olhos azuis: " + contadorRuivosNaoAzuis)
}
