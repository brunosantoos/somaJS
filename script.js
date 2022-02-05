function somar(){
    if ( document.getElementById('valor1').value != '' || document.getElementById('valor2').value != ''){
        var valor1 = document.getElementById('valor1').value
        var valor2 = document.getElementById('valor2').value
        soma = parseInt(valor1) + parseInt(valor2) ;
        console.log(soma);
        document.body.innerHTML = "<h1>A soma foi de " + soma + "</h1>";
    } else 
    alert("Devera preencher os campos obrigatorios");
}