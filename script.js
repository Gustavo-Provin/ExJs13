//Crie um objeto em JavaScript para colocar dois atributos de um
//produto. Atribua o preço e descrição do produto com o valor “90” e a
//descrição com o valor “Mouse”. Mostre no console o valor dos dois
//atributos.

const produto = {
    preço: 90,
    descrição: "Mouse"
}

document.write("Preço do produto: R$" + produto.preço)
document.write('</br>')
document.write("Descrição do produto: " + produto.descrição)

document.write('</br></br>')

//Crie um objeto em JavaScript para colocar 5 atributos de um
//notebook. Atribua os seguintes atributos:
//Processador = i7
//Memória = 16GB
//Preço = 5000
//HD = 1TB
//SSD = 256GB
//Por fim, mostre o nome e valor de cada atributo no console,
//exatamente como está na atividade.

const notebook = {
    processador: 'i7',
    memória: '16GB',
    preço: 5000,
    hd: '1TB',
    ssd: '256GB'
}

document.write('Processador: ' + notebook.processador, '</br> Memória RAM: ' + notebook.memória, '</br> Preço: ' + notebook.preço, '</br> HD: ' + notebook.hd, '</br> SSD: ' + notebook.ssd)

document.write('</br></br>')

//Crie um objeto para colocar nome e duas notas. Atribua nome e
//duas notas para o primeiro objeto, que será nosso primeiro aluno.
//Agora crie mais um objeto para colocar informações do nosso
//segundo aluno. Mostre as informações de cada aluno no console.
//Mostre também a média do primeiro aluno e a média do segundo
//aluno. Por fim mostre a média desta turma de 2 alunos.

const aluno1 = {
    nome: 'João',
    nota1: 8,
    nota2: 9
}
const aluno2 = {
    nome: 'Maria',
    nota1: 7,
    nota2: 8
}

const media1 = ((aluno1.nota1 + aluno1.nota2) / 2 )
const media2 = ((aluno2.nota1 + aluno2.nota2) / 2 )

document.write('Nome: ' + aluno1.nome , '</br> Nota da primeira prova: ' + aluno1.nota1, '</br> Nota da segunda prova: ' + aluno1.nota2, '</br> A média do aluno ficou: ' + media1)

document.write('</br>')

document.write('Nome: ' + aluno2.nome , '</br> Nota da primeira prova: ' + aluno2.nota1, '</br> Nota da segunda prova: ' + aluno2.nota2, '</br> A média do aluno ficou: ' + media1)

document.write('</br></br>')

document.write('A média da turma foi de: ' + (media1 + media2) / 2)

document.write('</br></br>')

// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.
// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28
// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400
// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

const pessoas = []
let continuar = true

while (continuar) {
const pessoa = {
nome: prompt('Insira o nome da pessoa'),
idade: parseInt(prompt("Informe a idade da pessoa:")),
trabalhando: confirm("A pessoa está trabalhando?"),
salario: 0,
}

if (pessoa.trabalhando) {
pessoa.salario = parseFloat(prompt('Informe o salário da pessoa'))
} 

pessoas.push(pessoa)

continuar = confirm('Deseja continuar cadastrando?')
}

const desempregadas = []
const empregadasMais2500 = []
const empregadasMenos2500 = []

for (const pessoa of pessoas) {
if (!pessoa.trabalhando) {
    desempregadas.push(pessoa)
} else {
    if (pessoa.salario > 2500) {
        empregadasMais2500.push(pessoa)
    } else {
        empregadasMenos2500.push(pessoa)
    }
}
}

document.write("Pessoas desempregadas:")
for (const pessoa of desempregadas) {
document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}

document.write('</br></br>')

document.write("Pessoas empregadas com salário maior que 2500:")
for (const pessoa of empregadasMais2500) {
document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}

document.write('</br></br>')

document.write("Pessoas empregadas com salário igual ou menor que 2500:")
for (const pessoa of empregadasMenos2500) {
document.write(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}
