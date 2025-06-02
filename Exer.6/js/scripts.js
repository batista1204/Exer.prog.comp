function exercicio6(){

    let valor, codigo, totalvista = 0, totalPrazo = 0

    for(let conta=1;conta<=5;conta++){
        do{
            codigo = prompt('Informe o código V(á vista) ou P (à prazo)').toUpperCase()
        }
        while(codigo != 'V' && codigo != 'P')
        do{
        valor = Number('Informe o valor')
        }
        while(valor < 0)
        valor = Number(prompt('Informe o valor: '))
        if(codigo == 'v'){
            totalvista = totalvista + valor
        }
        else{ //codigo é P 
            totalPrazo = totalPrazo + valor}
    }

alert (`Total a vista ${totalvista} Total a Prazo ${totalPrazo}`)
alert(`total geral ${totalPrazo + totalvista} e 1a. parcela ${totalPrazo/3}`)

}