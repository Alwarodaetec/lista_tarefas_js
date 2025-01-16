//id tarefainput  addtarefa  tarefainfo

// tarefaInput, descricaoInput
let exibir = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

atualizarExibicao(exibir);

function addtarefa(){
    tarefai = document.getElementById('tarefaInput').value;
    descricaoi = document.getElementById('descricaoInput').value;
    const tarefa = {
        nome: tarefai,
        descricao: descricaoi,
        isConcluida: false
    };
    
    if (tarefai === "" || descricaoi === ""){
        alert("Adicione uma nova tarefa")
        return;
    }
    addtarefaCard(tarefa);
    exibirTarefas(tarefa);
    limparInputs();}

async function addtarefaCard(tarefa){
    const tarefaInfo = document.getElementById('tarefaInfo');
    tarefaInfo.textContent = `Tarefa ${tarefa.nome + tarefa.descricao} adicionada com sucessso`;
    // exibirTarefas(tarefa);
}

function exibirTarefas(tarefa){
    exibir.push(tarefa)
    localStorage.setItem('lista_tarefas', JSON.stringify(exibir));
    atualizarExibicao(exibir);  //exibir é o array onde guardamos todas as tarefas
}

function atualizarExibicao(exibir){
    const exibirUl = document.getElementById('exibir');
    exibirUl.innerHTML = "";
    
    exibir.forEach(item =>{
        const li = document.createElement('li')
        
        li.textContent = `${item.nome}, ${item.descricao}`;
        
        let button = document.createElement('button');
        
        if (item.isConcluida){
            button.textContent = 'Marcar como Não Concluída';
            button.classList.add('noConcluded')
        } else {
            button.textContent = 'Marcar como Concluída';
            button.classList.add('concluded')
        }
        
        button.addEventListener('click', function(){
            item.isConcluida = !item.isConcluida;
            localStorage.setItem('lista_tarefas', JSON.stringify(exibir));
            atualizarExibicao(exibir);
        });

        li.appendChild(button);
        exibirUl.appendChild(li);
    })
}

function limparInputs(){
    document.getElementById("meuForm").reset();
}