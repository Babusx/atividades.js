function imc(){
    let nome = document.querySelector("#nome").value
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let resultado = document.querySelector("#resultado")

    if (nome !== '' && altura !== ''&&peso !== ''){
        //toFixed para decimais
        valorImc = (peso / (altura * altura)).toFixed(1)
        let tipoImc

        if(valorImc < 18.5) {
            tipoImc = 'Abaixo do peso'
        } else if(valorImc > 18.5 && valorImc < 25){
            tipoImc = 'peso ideal'
        }else if(valorImc > 25){
            tipoImc ='Um pouco acima do peso'
        }else if(valorImc > 35 ){
            tipoImc = 'Obsidade grau 1'
        }else if(valorImc > 40){
            tipoImc = 'Obsidade grau 2'
        }else {
            tipoImc = 'Obsidade grau 3'
        }
        
        resultado.textContent = ` ${nome} seu IMC é ${valorImc} e voce está ${tipoImc} `
        }else {
            resultado.textContent = `Preencha todos os campos`

        
}

}