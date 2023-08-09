const form = document.getElementById('lista-tarefas');
const atividades = document.querySelector('.lista-atividades');
const inputNovaTarefa = document.getElementById('nova-tarefa');
const botaoZerar = document.getElementById('botao-zerar');

form.addEventListener
(   'submit', function (e) 
    {
    e.preventDefault();
    adicionaTarefa();
    }
);

botaoZerar.addEventListener
(   'click', function (e) 
    {
    e.preventDefault();
    limparTarefas();
    }
);

function adicionaTarefa() 
{
    if (inputNovaTarefa.value.trim() === '') 
    {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    if (tarefaJaExiste(inputNovaTarefa.value)) 
    {
        alert(`Esta tarefa - ${inputNovaTarefa.value} - já está na sua lista.`);
        return;
    }

    const novaTarefa = document.createElement('li');
    novaTarefa.textContent = inputNovaTarefa.value;

    novaTarefa.addEventListener
    (   'click', function() 
        {
        novaTarefa.classList.toggle('concluida');
        }
    );

    atividades.appendChild(novaTarefa);

    inputNovaTarefa.value = '';
}


function tarefaJaExiste(nomeTarefa) 
{
    const tarefas = atividades.querySelectorAll('li');
    for (const tarefa of tarefas) 
    {
        if (tarefa.textContent === nomeTarefa) 
        {
            return true;
        }
    }
    return false;
}

function limparTarefas() 
{
    atividades.innerHTML = '';
}
