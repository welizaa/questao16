let num1 = parseFloat(prompt('Digite o primeiro numero:'));
    let num2 = parseFloat(prompt('Digite o segundo numero:'));

    let soma = num1 + num2;

    if (soma > 20) {
        soma += 8; 

    } else {

        soma -= 5; 
        
    }

    alert("O resultado final é: " + soma);
