const aluno = require('./aluno');
const estudantesDevs = require('./estudantesDevs'); 

// Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

const curso = {
    nomeDoCurso: "Desenvolvimento Back-end",
    notaAprovacao: 7,
    faltasMax: 5,
    listaDevs: estudantesDevs,
    
    //  Passo 4

    // 	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

    adicionarAluno(nome, quantidadeFaltas, notas) {
        let alunoNovo = new aluno(nome, quantidadeFaltas, notas);
        this.listaDevs.push(alunoNovo);
    },

//  Passo 5

    // 	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    criteriosAprovacao(estudanteDev) {
        let mediaEspecial = this.notaAprovacao*1.1;
        let faltas = estudanteDev.qtdFaltas;
        let media = estudanteDev.calcularMedia();
        

        if(faltas > this.faltasMax && media < mediaEspecial){
            console.log(`O desenvolvedor: ${estudanteDev.nome} teve média ${estudanteDev.calcularMedia().toFixed(2)} e quantidade de faltas foi ${estudanteDev.qtdFaltas}. Resultado ---> Reprovado por faltas`)
            return false;

        } else if(media < this.notaAprovacao){
            console.log(`O desenvolvedor: ${estudanteDev.nome} teve média ${estudanteDev.calcularMedia().toFixed(2)} e a quantida de faltas foi ${estudanteDev.qtdFaltas}. Resultado ---> Reprovado por notas`)
            return false;

        } else {
            console.log(`O desenvolvedor: ${estudanteDev.nome} teve média ${estudanteDev.calcularMedia().toFixed(2)} e a quantida de faltas foi ${estudanteDev.qtdFaltas}. Resultado ---> foi Aprovado`)
            return true;
        }
    },   

    //  Passo 6

    // 	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 

    verificarAprovacao() {
        for (let indice = 0; indice < this.listaDevs.length; indice++ ) {
            curso.criteriosAprovacao(this.listaDevs[indice]);            
                }
    },
};

console.log(`------ ${curso.nomeDoCurso} ------`);
console.log(`Nota de Aprovação: ${curso.notaAprovacao}`);
console.log(`Máximo de Faltas: ${curso.faltasMax}`);
curso.verificarAprovacao();
