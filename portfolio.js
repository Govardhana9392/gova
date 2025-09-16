document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const section = document.querySelector(targetId);
            if(section){
                section.scrollIntoView({behavior: 'smooth'});
                history.pushState(null,null,targetId);
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
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            form.style.display = 'none';
            formMessage.style.display = 'block';
        });
    }
});
