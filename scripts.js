function calcular(){
    let formPeso = document.getElementById('peso');
    let formAltura = document.getElementById('altura');
    let formIdade = document.getElementById('idade');

    let peso = Number(formPeso.value);
    let altura = Number(formAltura.value);
    let idade = Number(formIdade.value);

    let saida = document.getElementById('resultado');
    let status;
    
    let imc = peso / (altura**2);

    if(imc <= 24.9){
        status = "Peso Ideal";
    } else if(imc < 29.9){
        status = "Sobrepeso";
    } else if(imc < 34.9){
        status = "Obesidade Grau I";
    } else if(imc < 39.9){
        status = "Obesidade Grau II";
    } else {
        status = "Obesidade Grau III";
    }

    saida.style.textAlign = 'center'
    saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)}!<br> Você está com ${status};
}