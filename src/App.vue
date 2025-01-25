<script setup>

  import { reactive } from 'vue';

  const calculo = reactive ({

    numeroUm: 0,
    numeroDois: 0,
    conta: 'soma',
    resultado: 0,

  })

  function addNumero1 (number) {
    calculo.numeroUm = number.target.value;
  }

  function addNumero2 (number) {
    calculo.numeroDois = number.target.value;
  }

  function trocaCauculo(evento) {
    calculo.conta = evento.target.value;

  }

  function calculaNaHora () {

    const {numeroUm, conta, numeroDois} = calculo;

    const num1 = Number(numeroUm);
    const num2 = Number(numeroDois);

    switch (conta) {
      case 'soma': return num1 + num2;

      case 'subtrai': return num1 - num2;

      case 'divide': return num1 / num2;

      case 'multiplica': return num1 * num2;

    }

  }


</script>

<template>

  <header class="pt-3 pb-3 mb-4 cabecalho">
    <div class="container d-flex justify-content-center">

      <h1>Calculadora Aritimédica</h1>
      
      

    </div>
  </header>

  <body>
    
    <form class="container form calculadora">

      <div class="container resultado">

        <p class="campo-de-resultados"><span id="resultado">{{ calculaNaHora () }}</span></p>

      </div>

      <div class="container d-flex inputs">

        <input @keyup="addNumero1" class="campo-para-numero" type="number">

        <select @change="trocaCauculo" class="form-control selecoes">
                <option value="soma">+</option>
                <option value="subtrai">-</option>
                <option value="divide">/</option>
                <option value="multiplica">x</option>
            </select>

        <input @keyup="addNumero2" class="campo-para-numero" type="number">

      </div>


    </form>

  </body>

</template>

<style scoped>

  .cabecalho {
    background-color: #6796a6;
  }

  .calculadora {
    max-width: 300px;
    padding: 12px;
    border-radius: 8px;
    background-color: #6796a6;
  }

  .resultado {
    display: flex;
    max-width: 360px;
    height: 48px;
    max-height: 100%;
    border: solid 2px #000;
    border-radius: 8px;
  }

  .campo-de-resultados {
    width: 100%;
    text-align: center;
    margin: auto 0;
  }

  .inputs {
    width: 280px;
    max-width: 100%;
    justify-content: center;
    margin-top: 6px;
  }

  .campo-para-numero {
    background-color: #6796a6;
    border: solid 2px #000;
    border-radius: 8px;
    max-width: 40%;
  }

  .campo-para-numero::-webkit-inner-spin-button,
  .campo-para-numero::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

  .selecoes {
    margin-left: 8px;
    margin-right: 8px;
    background-color: #6796a6;
    border: solid 2px #000;
  }

  .selecoes:focus {
    background-color:#6796a6;
  }
  
</style>