/***************************** script calcular imc ********************************/

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const btnReset = document.querySelector('#btn-reset');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');

const infoResult = document.querySelector('.result-imc h2 span');//IMC
const infoClass = document.querySelector('.result-imc p span');//classificação


//"cor" (parâmetro) representa a cor passada no momento da chamada da fumção
function colorImc(cor){
    infoClass.style.color = cor;
    infoResult.style.color = cor;
}

btnCalcular.addEventListener('click', function () {

    if (peso.value != '' && altura.value != '') {

        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);
        let imc = valorPeso / (valorAltura * valorAltura);


        //alert(imc);
        contentIMC.classList.toggle('show');
        resultIMC.classList.toggle('show');


        infoResult.innerHTML = imc.toFixed(2);

     /****************Tabela do IMC******************/
        if (imc < 18.5) {
            infoClass.innerHTML = 'Magreza';
            colorImc('red'); //chamando a função, passando um parâmetro
        }

        else if (imc >= 18.5 && imc <= 24.9) {
            infoClass.innerHTML = 'Normal';
            colorImc('#00FF19');
        }

        else if (imc >= 25 && imc <= 29.9) {
            infoClass.innerHTML = 'Sobrepeso';
            colorImc('yellow');
        }

        else if (imc >= 30 && imc <= 39.9) {
            infoClass.innerHTML = 'Obesidade';
            colorImc('orange');
        }

        else {
            infoClass.innerHTML = 'Obesidade Grave';
            colorImc('red');
        }

    }
    else {
        alert('Preencha os campos para calcular');
    }

})


btnReset.addEventListener('click', function () {

    contentIMC.classList.add('show');
    resultIMC.classList.remove('show');

    peso.value = '';
    altura.value = '';
    //document.querySelector('from').reset(); Em alternativa usar o metedo .resest

})


