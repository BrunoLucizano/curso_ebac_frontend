$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('.tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p="${novaTarefa}" />`).appendTo(novoItem);

        $(`
            <div class="incluir_lista">
                <a href="${novaTarefa}">
                </a>
            </div>
            `).appendTo(novoItem);
            $(novoItem).fadeIn(50000);
            $('.tarefa').val('');
    })
})
