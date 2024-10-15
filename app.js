/**
 * @link https://github.com/saulogomesdocarmo/healt
 * @author Saulo Gomes
 * @version 1.0
 */
let peso, altura, imc, idade, fcm, litros, get

function calcular(){
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) / 100

    if(frmHealth.txtIdade.value === ""){
        alert("Preencha a idade")
        frmHealth.txtIdade.focus()
    }else if(frmHealth.txtPeso.value === ""){
        alert("Preencha o peso")
        frmHealth.txtPeso.focus()
    }else if(frmHealth.txtAltura.value === ""){
        alert("Preencha a altura")
        frmHealth.txtAltura.focus()
    }else if(document.getElementById("m").checked === false && document.getElementById("f").checked === false){
        alert("Selecione o sexo")
    }else if(frmHealth.nivel.value === ""){
        alert("Selecione um nível de atividade")
    }else{
        //Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`
        if(imc < 18.5){
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        }else if(imc < 25){
            document.getElementById("status").innerHTML = "Peso ideal"
            document.getElementById("grafico").src = "img/normal.png"
        }else if(imc < 30){
            document.getElementById("status").innerHTML = "Obesidade grau I"
            document.getElementById("grafico").src = "img/obesidade1.png"
        }else if(imc < 35){
            document.getElementById("status").innerHTML = "Obesidade grau II"
            document.getElementById("grafico").src = "img/obesidade2.png"
        }else {
            document.getElementById("status").innerHTML = "Obesidade extrema"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }

        //Cálculo do FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById('freq').innerHTML = `${fcm.toFixed(0)}`
        //Consumo da água
        litros = (peso * 35) / 1000
        document.getElementById('agua').innerHTML = `${litros.toFixed(1)} litros/dia`

        //GET - executar uma formula diferente para o sexo selecionado
        let lista = document.getElementById('atividade')
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor)
        if(document.getElementById('m').checked === true){
            get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * valor
        }
        if(document.getElementById('f').checked === true){
            get = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * valor
        }
        document.getElementById('calorias').innerHTML = `${Math.floor(get)} calorias/dia`
    }


}

function limpar(){
    document.getElementById('grafico').src = 'img/reset.png'
    document.getElementById('imc').innerHTML = 'IMC'
    document.getElementById('status').innerHTML = 'status'
    document.getElementById('freq').innerHTML = 'FCM'
    document.getElementById('calorias').innerHTML = 'calorias/dia'
    document.getElementById('agua').innerHTML = 'litros/dia'
}
