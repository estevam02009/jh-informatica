// Mostrar apenas durante o horário comercial
function showWhatsAppButton() {
    const now = new Date();
    const hour = now.getHours();
    const button = document.querySelector('.whatsapp-float');
    
    if(hour >= 8 && hour < 20) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }
}

window.onload = showWhatsAppButton;