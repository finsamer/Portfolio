document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Retirer la classe active des autres onglets
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Faire défiler jusqu'à la section correspondante
            const targetId = tab.getAttribute('data-tab');
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}); 