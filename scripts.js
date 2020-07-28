function calcular(){
    var formPeso = document.getElementById('peso')
    var formAltura = document.getElementById('altura')
    var formIdade = document.getElementById('idade')

    var peso = Number(formPeso.value)
    var altura = Number(formAltura.value)
    var idade = Number(formIdade.value)

    var imc = peso / (altura**2)
}