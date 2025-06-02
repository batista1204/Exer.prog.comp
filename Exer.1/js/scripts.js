function Ordem(){
    let n1
    let n2
    let n3
    let n4
    let aux
    let conta = 0
    let grupo = 0

    while(grupo<5){

    n1 = Number(prompt(`Informe o valor de n1:`))
    n2 = Number(prompt(`Informe o valor de n2:`))
    n3 = Number(prompt(`Informe o valor de n3:`))
    n4 = Number(prompt(`Informe o valor de n4:`))

    while(conta<3){
        if(n1>n2){
            aux = n1 ; n1 = n2; n2 = aux
        }
        if(n2>n3){
            aux = n2 ; n2 = n3 ; n3 = aux
        }
        if(n3>n4){
            aux = n3 ; n3 = n4 ; n4 = aux
        }
        
        conta++
    }
        alert(`A ordem crescente é: ${n1} ${n2} ${n3} ${n4}`+
        `\nA ordem decrescente é: ${n4} ${n3} ${n2} ${n1}`)

        grupo++
        
    
    }
   
}