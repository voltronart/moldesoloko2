// Função para ativar a animação ao scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150; // Distância para disparar a animação

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            // Opcional: remover a classe se quiser que a animação repita ao subir
            element.classList.remove('active'); 
        }
    });
};

// Escuta o evento de scroll
window.addEventListener('scroll', reveal);

// Executa uma vez ao carregar para mostrar o que já está na tela
reveal();

// --- FUNÇÃO DO CARROSSEL (Atualizada para múltiplos) ---
function moveScroll(btn, direction) {
    const track = btn.parentElement.querySelector('.product-track');
    const scrollAmount = 300; 
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}