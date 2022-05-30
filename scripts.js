function Tarefa (nome, responsavel) {
    let tarefa = {
        nome: nome,
        responsavel: responsavel,
        finalizada: false,
        finaliza: function() {
            this.finalizada = true;
        },
    };
    return tarefa
}

let tarefas = [];

function addTask(){
    let nome = prompt('Insira o nome da tarefa');
    let responsavel = prompt('Insira o responsavel');
    let tarefa = Tarefa(nome, responsavel);
    tarefas.push(tarefa);

    atualizaInterface(tarefas);
}

function atualizaInterface(tarefas) {
    let items = [];
    for (let tarefa of tarefas) {
        items.push('Exercicio:'+ tarefa.nome + '<br/>(Responsável: ' + tarefa.responsavel + ') <br/>');
    }
    document.getElementById('tarefas').innerHTML = items.join('<br/>');
}

function questionaUsuario () {
    for (let i= 1; i <3 ; i++) {
        addTask()
    }
}

document.onload = function(){
    questionaUsuario()
}

