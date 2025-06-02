function idade(){

    let conta = 1
    let idade 
    let faixa_1 = 0
    let faixa_2 = 0
    let faixa_3 = 0
    let faixa_4 = 0
    let faixa_5 = 0
    let por1
    let por2

    while(conta <= 8){
        idade = Number(prompt(`Informe a idade da pessoa || Pessoa: ${conta}`))
        if (idade <=15){
            faixa_1++
        }
        else if(idade<=30){
            faixa_2++
        }
        else if(idade<=45){
            faixa_3++
        }
        else if(idade<=60){
            faixa_4++
        }
        else{
            faixa_5++
        }
        conta++
    }
    por1 = (faixa_1 / 8) * 100
    por2 = (faixa_5 / 8) * 100

    alert(`A quantidade de pessoas na faixa 1 é ${faixa_1} || 0 a 15 anos`+
        `\nA quantidade de pessoas na faixa 2 é ${faixa_2} || 16 a 30 anos`+
        `\nA quantidade de pessoas na faixa 3 é ${faixa_3} || 31 a 45 anos`+
        `\nA quantidade de pessoas na faixa 4 é ${faixa_4} || 46 a 60 anos`+
        `\nA quantidade de pessoas na faixa 5 é ${faixa_5} || mais de 60 anos`)

    alert(`A porcentagem da faixa 1 em relação ao todo é ${por1}%`+
         `\nA porcentagem da faiza 5 em relação ao todo é ${por2}%`)

    
}