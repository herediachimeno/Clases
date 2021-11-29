class Cifras {
  constructor(numero) {
    this.numero = numero;
  }

  esPar() {
    if (this.numero % 2 === 0) {
      console.log("El número es par");
    } else {
      console.log("El número es impar");
    }
  }

  sumaDigitos() {
    let suma = 0;
    let numeroString = this.numero.toString();
    for (let i = 0; i < numeroString.length; i++) {
      suma += parseInt(numeroString.substring(i, i + 1));
    }
    console.log(suma);
  }
}

let numero = new Cifras(4);
numero.esPar();

let numero2 = new Cifras(3);
numero2.esPar();

let numero3 = new Cifras(333);
numero3.sumaDigitos();
