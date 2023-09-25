const form = document.querySelector('form#exp-form')

function validaForm() {
    let campoa = document.querySelector('input#v-A')
    let campob = document.querySelector('input#v-B')
    let msgsucesso = '<strong>Formulário validado com sucesso!</strong>'
    let msgerro = '<strong>Formulário inválido!</strong>'
    let containerMensagemSucesso = document.querySelector('p.msg-valida')
    let containerMenssagemErro = document.querySelector('p.msg-erro')

    form.addEventListener('submit', function(e) {
        e.preventDefault();

    if (campoa.value < campob.value) {
        containerMensagemSucesso.innerHTML = msgsucesso
        containerMensagemSucesso.style.display = 'block'
        containerMenssagemErro.style.display = 'none'

    } else {
        containerMenssagemErro.innerHTML = msgerro
        containerMenssagemErro.style.display = 'block'
        containerMensagemSucesso.style.display = 'none'
    }})}