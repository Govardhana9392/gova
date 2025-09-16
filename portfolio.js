document.addEventListener('DOMContentLoaded', function () {
    
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                history.replaceState(null, null, targetId);
            }
        });
    });
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('open');
        });
    });
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    async function handleSubmit(event) {
        event.preventDefault();
        
        const data = new FormData(event.target);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.style.display = 'none';
                formMessage.style.display = 'block';
            } else {
                const errorData = await response.json();
                alert(`Oops! There was a problem: ${errorData.message}`);
            }
        } catch (error) {
            alert('Oops! There was a network error. Please check your connection and try again.');
        }
    }

    form.addEventListener('submit', handleSubmit);
});