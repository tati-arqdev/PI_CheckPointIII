//Passo 7 -

// 	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantesDevs.js e garanta que sigam funcionando todos os métodos corretamente. 

const aluno = require('./aluno');

const estudantesDevs = [
    new aluno("Tatiane", 2, [10,10,5]),
    new aluno("Paulo", 7, [8,6,9]),
    new aluno("Carla", 1, [5,5,7]),
    new aluno("Carlos", 1, [9,8,8]),
    new aluno("Michelle", 0, [5,9,9]),
    new aluno("Ricardo", 4, [7,7,7]),
    new aluno("Marcio", 2, [8,9,9]),
    new aluno("Andreia", 0, [10,8,9]),
    new aluno("Phelippe", 5, [7,6,8]),
    new aluno("Raphael", 2, [5,4,8]),
    new aluno("Lucia", 0, [4,5,10]),
]

module.exports = estudantesDevs;