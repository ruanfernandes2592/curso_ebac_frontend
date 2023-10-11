    $(document).ready(function(){

        $('form').on('submit', function(e) {
            e.preventDefault()

            const inputNomeTarefa = $('#nomeTarefa').val()
            const novoItem = $('<li style="display:none"></li>')
            $(`
                <div class="tarefaList">
                    <a href='#'>
                    ${inputNomeTarefa}
                    </a>
                </div>
            `).appendTo(novoItem) // para adicionar os comandos html acima, dentro da <li> da constante novoItem
            $(novoItem).appendTo('ul') // para adicionar a constante dentro da <lu> do html
            $(novoItem).fadeIn(1000 /*tempo a aparição em milissegundos*/) // para a imagem adicionada aparecer de forma suave
            $('#nomeTarefa').val('') // para o valor do input ser apagado

            $('a').on('click dblclick', function(e) { // Caso a lista esteja muito grande ao clicar a pagina não será atualizada impossibilitando o duplo clique
                e.preventDefault()

                $('a').click(function() {   // 1- Uma classe chamada item-completado foi criada apenas no CSS e com o text-decoration: line-through adicionamos o "riscado" ao texto.
                    $(this).addClass('item-completado') // 2- No jQuery estamos selecionando todos os elementos LI adicionando um evento de clique, e ao clicar estamos adicionando a classe item-completado
                })
    
                $('a').dblclick(function() {
                    $(this).removeClass('item-completado')
                })
            })
        })
    })