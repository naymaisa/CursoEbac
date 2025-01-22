
class Veiculo {

    mover() {
        throw "Método 'mover' deve ser implementado!";
    }


    parar() {
        console.log(`${this.constructor.name} parou.`);
    }
}


class Carro extends Veiculo {
    mover() {
        console.log(`${this.constructor.name} está dirigindo.`);
    }
}


class Bicicleta extends Veiculo {
    mover() {
        console.log(`${this.constructor.name} está pedalando.`);
    }
}


const carro1 = new Carro();
const carro2 = new Carro();
const bicicleta1 = new Bicicleta();


carro1.mover();
carro1.parar();

carro2.mover();
carro2.parar();

bicicleta1.mover();
bicicleta1.parar();  
