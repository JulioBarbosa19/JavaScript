import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 1122333309;

const contaCorrenteRicardo = new ContaCorrente();

//contaCorrenteRicardo.depositar(150);
contaCorrenteRicardo.agencia = 1001;
//contaCorrenteRicardo.sacar(55);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);


console.log(contaCorrenteRicardo);



cliente2.nome = "Alice";
cliente2.cpf = 8822333309;