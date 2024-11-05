const form = document.getElementById('form-calculator');
var campoB = document.getElementById("campoB");


form.addEventListener('submit', function (e) {
    e.preventDefault();

    var campoA = document.getElementById("campoA");
    const mensagemSucesso = `O numero: ${campoB.value} é maior que o ${campoA.value}`;

    if (Number(campoB.value) > Number(campoA.value)) {
        const containerMensagemSucesso = document.querySelector('.sucess-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    }
    else {
        document.querySelector('.error-message').style.display = 'block';

    }
});


campoB.addEventListener('keyup', function (e) {
    console.log(e.target.value);
    if (Number(campoB.value) < Number(campoA.value)) {
        document.querySelector('.error-message').style.display = 'block';
    } else {
        document.querySelector('.error-message').style.display = 'none';
    }
})