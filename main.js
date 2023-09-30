$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#estado').mask('SS');
    $('#cep').mask('00000-000');

    $.validator.addMethod("doisNomes", function(value, element) {
        var nomes = value.split(" ");
        return nomes.length >= 2;
    }, "Por favor, insira ao menos dois nomes.");

    $('form').validate({
        rules: {
            nome: {
                required: true,
                doisNomes: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            rua: {
                required: true
            },
            numero: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            estado: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo.',
            email: 'Por favor, insira seu email.',
            telefone: 'Por favor, insira seu telefone.',
            cpf: 'Por favor, insira seu CPF.',
            rua: 'Por favor, insira sua Rua.',
            numero: 'Por favor, insira seu número.',
            bairro: 'Por favor, insira seu Bairro.',
            cidade: 'Por favor, insira sua Cidade.',
            estado: 'Por favor, insira seu estado',
            cep: 'Por favor insira seu CEP.'
        }
    });

});
