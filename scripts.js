document.addEventListener('DOMContentLoaded', function() {
    // Adicionar funcionalidade aos botões "Adicionar ao Carrinho"
    const botoesAdicionar = document.querySelectorAll('.btn-pedir');

    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', function() {
            const menuItem = this.closest('.menu-item');
            const nome = menuItem.querySelector('h3').textContent;
            const preco = menuItem.querySelector('.preco').textContent;

            // Aqui você pode adicionar a lógica para adicionar o item ao carrinho
            alert(`Adicionado ao carrinho: ${nome} - ${preco}`);
        });
    });

    // Adicionar funcionalidade ao formulário de contato
    const formContato = document.getElementById('form-contato');

    formContato.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        // para um servidor ou exibir uma mensagem de sucesso
        alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

        // Limpar o formulário após o envio
        formContato.reset();
    });
});
