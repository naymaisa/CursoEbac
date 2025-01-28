<template>
  <div id="app" class="calculator">
    <h1>Calculadora Aritmética</h1>
    <div>
      <input v-model="numero1" type="number" placeholder="Número 1" />
      <input v-model="numero2" type="number" placeholder="Número 2" />
    </div>
    <div>
      <select v-model="operacao">
        <option value="+">Soma</option>
        <option value="-">Subtração</option>
        <option value="*">Multiplicação</option>
        <option value="/">Divisão</option>
      </select>
    </div>
    <div>
      <h2>Resultado: {{ resultado }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: '+',
    };
  },
  computed: {
    resultado() {
      let res;
      const n1 = parseFloat(this.numero1);
      const n2 = parseFloat(this.numero2);

      switch (this.operacao) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '*':
          res = n1 * n2;
          break;
        case '/':
          res = n2 !== 0 ? n1 / n2 : 'Erro: Divisão por zero';
          break;
        default:
          res = 0;
      }
      return res;
    },
  },
};
</script>

<style scoped>
.calculator {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
}

input {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}

select {
  margin: 10px;
  padding: 10px;
  font-size: 16px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

h2 {
  margin-top: 20px;
}
</style>
