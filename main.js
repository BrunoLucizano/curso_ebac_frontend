$(document).ready(function() {
    $('#adicionar-tarefa').on('click', function() {
        const novaTarefa = $('#nova-tarefa').val();

        // Verificar se a tarefa já existe na lista
        if (novaTarefa.trim() !== "") { // Verifica se a tarefa não está em branco
            const listaTarefas = $('#lista-tarefas');
            const tarefasExistentes = listaTarefas.find('.lista_tarefas').map(function() {
                return $(this).text().trim();
            }).get();

            if (tarefasExistentes.includes(novaTarefa.trim())) {
                alert("Essa tarefa já existe na lista.");
            } else {
                const novoItem = $('<li><div class="lista_tarefas">' + novaTarefa + '</div></li>');
                $('<div class="incluir_lista"><a href="' + novaTarefa + '"></a></div>').appendTo(novoItem);
                novoItem.appendTo(listaTarefas);
                novoItem.fadeIn(500);
                $('#nova-tarefa').val('');
            }
        }
    });
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('feito'); // Adiciona ou remove a classe "feito" ao <li> clicado
    });
});

alert
