// ROLAGEM SUAVE — desliza devagar ao clicar no menu
ament.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (evento) {
        evento.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// MENSAGEM NO CONSOLE
console.log("🧘 Cleide Gonçalves — Site carregado com sucesso!");