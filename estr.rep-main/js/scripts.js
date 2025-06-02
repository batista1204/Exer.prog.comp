function pesquisaSatisfacao(){

    let nota 
    let conta = 1 
    let soma = 0
    let satisfeitos = 0
    let insatisfeitos = 0
    
    while (conta <= 10) { 
        nota = Number(prompt(`Informe a nota de satisfação / Pessoa: ${conta}`))       

        soma += nota  //soma = soma + nota

if (nota >= 8) {
    satisfeitos++ //satisfeito = satisfeito + 1
} else if (nota < 5) {
    insatisfeitos++ 
}
    conta++ 
}
    let media = soma / 10 

    alert(`A média das notas é ${media.toFixed(1)}`+
        `\nTotal de pessoas satisfeitas é ${satisfeitos}`+ 
        `\nTotal de pessoas insatisfeitas é ${insatisfeitos}`)

}
