document.addEventListener('DOMContentLoaded', function() {
    const botoesAdicionar = document.querySelectorAll('.btn-pedir');

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const nome = menuItem.querySelector('h3').textContent;
            const preco = menuItem.querySelector('.preco').textContent;
            alert(`Adicionado ao carrinho: ${nome} - ${preco}`);
        });
    });
    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        formContato.reset();
    });
});
