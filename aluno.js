// --> Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.


class aluno {
    constructor(nome, quantidadeFaltas, notas){
        this.nome = nome;
        this.qtdFaltas = quantidadeFaltas;
        this.notas = notas;
    };
  
// -->  Passo 2

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
    
    calcularMedia() {
        let mediaTotal = 0;

    this.notas.forEach(function (nota) {
        mediaTotal = mediaTotal + nota;
    });

    return mediaTotal / this.notas.length;
    };

    faltas() {
        this.qtdFaltas = this.qtdFaltas + 1;
    };
};

module.exports = aluno;

// --> Consoles para testes

// let alunoTeste = new aluno("Tatiane Silva", 0, [10, 9, 10])

// console.log(alunoTeste.calcularMedia())
// console.log(alunoTeste.faltas())

//não entendi porque aqui faltas aparece indefinido e funciona no método criteriosAprovação