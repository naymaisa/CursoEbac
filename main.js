const form = document.getElementById('form-calculator');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    var campoA = document.getElementById("campoA");
    var campoB = document.getElementById("campoB");
    const mensagemSucesso = `O numero: ${campoB.value} é maior que o ${campoA.value}`;

    if (Number(campoB.value) < Number(campoA.value)) {
        alert("B nao pode ser menor que A, por favor coloque outro valor para B");
    } else {
        alert(mensagemSucesso);
        campoA.value = '';
        campoB.value = '';
    }

});




console.log(form);

