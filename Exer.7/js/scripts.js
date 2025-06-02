function exercicio7(){
    let idade, peso, altura, idade50 = 0, porcentpes = 0, somaaltura = 0, entre10e20 = 0 // Inicializa a variável para contar atletas com idade maior que 50
    for(let conta = 1;conta<=5; conta++){
        do {
            idade = Number(prompt(`Informe a idade: `)); // Solicita a idade do atleta
        }
            while (idade < 0) // Garante que a idade seja válida
            do{
                peso = Number(prompt(`Informe o peso: `)); // Solicita o peso do atleta
            }while (peso < 0) // Garante que o peso seja válido
           
            do {
                altura = Number(prompt(`Informe a altura: `)); // Solicita a altura do atleta
            } while (altura < 0) // Garante que a altura seja válida
            if (idade > 50) { // Se a idade for maior que 50
                idade50++; // Incrementa o contador de atletas com idade maior que 50
            }
            if (idade >= 10 && idade <= 20){
                somaaltura = somaaltura + altura; // Soma a altura dos atletas com idade entre 10 e 20 anos
                entre10e20++ // Conta quantos atletas estão nessa faixa etária
            }
            if (peso > 40){
                porcentpes++ // Conta quantos atletas têm peso maior que 40 kg
            }
        }
       alert(`Item 1. Atletas com idade maior que 50 anos ${idade50}`); // Exibe a quantidade de atletas com idade maior que 50 anos
       alert(`Item 2. A média de altura dos atletas com idade entre 10 e 20 anos é: ${somaaltura / entre10e20}`);// Exibe a média de altura dos atletas com idade entre 10 e 20 anos
       alert(`Item 3. A porcentagem de atletas com peso maior que 40 kg é: ${porcentpes / 5 * 100}%`); // Exibe a porcentagem de atletas com peso maior que 40 kg
    }