//id tarefainput  addtarefa  tarefainfo

// tarefaInput, descricaoInput
let exibir = [];

function addtarefa(){
    tarefai = document.getElementById('tarefaInput').value;
    descricaoi = document.getElementById('descricaoInput').value;
    const tarefa = {
        nome: tarefai,
        descricao: descricaoi,
        isConcluida: false
    };
    addtarefaCard(tarefa);
    exibirTarefas(tarefa);
    limparInputs();
}

async function addtarefaCard(tarefa){
    const tarefaInfo = document.getElementById('tarefaInfo');
    tarefaInfo.textContent = `Tarefa ${tarefa.nome + tarefa.descricao} adicionada com sucessso`;
    // exibirTarefas(tarefa);
}

function exibirTarefas(tarefa){
    exibir.push(tarefa);
    localStorage.setItem('lista_tarefas', JSON.stringify(exibir));
    atualizarExibicao();
    console.log(tarefa);
}

function atualizarExibicao(){
    const exibirUl = document.getElementById('exibir');
    exibirUl.innerHTML = "";
    exibir.forEach(item =>{
        const li = document.createElement('li')
        li.textContent = `${item.nome}, ${item.descricao}, ${item.isConcluida}`;
        exibirUl.appendChild(li);
    })
}

function limparInputs(){
    document.getElementById("meuForm").reset();
}