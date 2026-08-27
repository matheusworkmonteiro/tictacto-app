// Seleciona o formulário que criamos no HTML
const loginForm = document.getElementById('loginForm');

// Diz ao formulário o que fazer quando o botão "Entrar" for clicado
loginForm.addEventListener('submit', function(event) {
    // Impede que a página recarregue (que é o comportamento padrão do HTML)
    event.preventDefault();

    // Pega os valores que foram digitados nos campos
    const usuarioDigitado = document.getElementById('usuario').value;
    const senhaDigitada = document.getElementById('senha').value;

    // Converte o usuário para minúsculas (para aceitar "Rafaela" ou "rafaela")
    const usuarioPadronizado = usuarioDigitado.toLowerCase();

    // Verifica se o usuário é "rafaela" e a senha é "1234"
    if (usuarioPadronizado === 'rafaela' && senhaDigitada === '1234') {
        // Se estiver correto, manda para a próxima tela
        window.location.href = 'home.html';
    } else {
        // Se estiver errado, mostra um aviso na tela
        alert('Usuário ou senha incorretos! Dica: use o usuário "rafaela" e senha "1234".');
    }
});