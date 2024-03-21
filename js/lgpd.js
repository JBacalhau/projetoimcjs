// selecionando os elementos que serão manipulados pelo JavaScript
var lgpd = document.querySelector('.lgpd');
var btnlgpd = document.querySelector('.lgpd button');


//verificação no console
//console.log(lgpd);
//console.log(btnlgpd);

//Associando o evento de click ao botão da lgpd

btnlgpd.addEventListener('click', function () {

    //para testar o botão
    //alert('ok')
    lgpd.style.display = 'none';

    //Além de fechar, vamos guardar uma informação no navegador do usuário
    //chave, valor
    localStorage.setItem('fechouLgpd', 'sim');

})

//se o usuário já fechou o lgpd (tem a informação guardada no storage)
if (localStorage.getItem('fechouLgpd') == 'sim') {
    lgpd.style.display = 'none';
}