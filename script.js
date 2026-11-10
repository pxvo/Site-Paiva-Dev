// Inicializar Animações de Scroll (AOS)
AOS.init({
    once: true,
    duration: 800,
    offset: 100
});

// Menu Mobile Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fechar menu mobile ao clicar nos links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Formulário enviando diretamente para o WhatsApp do Arthur (95 991440364)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll('input, textarea');
    const nome = inputs[0].value;
    const empresa = inputs[1].value || 'Não informada';
    const mensagem = inputs[2].value;

    const text = `Olá Arthur! Me chamo *${nome}* (Empresa: *${empresa}*).%0A%0A*Mensagem:* ${mensagem}`;
    window.open(`https://wa.me/5595991440364?text=${text}`, '_blank');
});