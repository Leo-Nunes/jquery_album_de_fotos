$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown();

    })

    $('#cancel').click(function() {
        $('form').slideUp();

    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" target="blank" title="Ver Imagem em tamanho Real">
                    Ver imagem em tamanho real
                </a>

            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);
        $('#endereco-imagem').val('');
    })
})