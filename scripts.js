function calcular(){
    let formPeso = document.getElementById('peso');
    let formAltura = document.getElementById('altura');
    let formIdade = document.getElementById('idade');

    let peso = Number(formPeso.value);
    let altura = Number(formAltura.value);
    let idade = Number(formIdade.value);

    let saida = document.getElementById('resultado');
    
    let imc = peso / (altura**2);

    saida.style.textAlign = 'center'
    saida.innerHTML = `Seu IMC é de ${imc.toFixed(2)}!<br>`
}