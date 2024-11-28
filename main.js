$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaImagemNova = $('#enderecoImagemNova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src='${enderecoDaImagemNova}' />`).appendTo(novoItem);
        $(` 
            <div class='overlay-imagem-link'>
                <a href='${enderecoDaImagemNova}' target='_blank' title='Ver imagem em tamanho real'>
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);        
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#enderecoImagemNova').val('');
    })
})