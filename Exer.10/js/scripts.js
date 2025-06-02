function exercicio10() {
    let somaPares = 0;
    let somaPrimos = 0;
  
    for (let i = 0; i < 10; i++) {
      let entrada = prompt(`Digite o ${i + 1}º número:`);
      let numero = parseInt(entrada);
  
      if (isNaN(numero)) {
        alert("Valor inválido! Digite um número inteiro.");
        i--; // repete a iteração
        continue;
      }
  
      if (numero % 2 === 0) {
        somaPares += numero;
      }
  
      if (numero > 1) {
        let primo = true;
        for (let j = 2; j <= Math.sqrt(numero); j++) {
          if (numero % j === 0) {
            primo = false;
            break;
          }
        }
        if (primo) {
          somaPrimos += numero;
        }
      }
    }
  
    alert(`Soma dos números pares: ${somaPares}\nSoma dos números primos: ${somaPrimos}`);
  }
  