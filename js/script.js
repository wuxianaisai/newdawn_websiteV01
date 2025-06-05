// Form validation
document.querySelectorAll('[id^="subscription-form"]').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const message = this.nextElementSibling;
        if (/^\S+@\S+\.\S+$/.test(email)) {
            message.textContent = 'Добро пожаловать в будущее!';
            message.style.color = '#0f0';
            this.reset();
        } else {
            message.textContent = 'Пожалуйста, введите корректный email.';
            message.style.color = '#f00';
        }
    });
});


document.querySelectorAll('.mission-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const description = this.getAttribute('data-hover');
        document.getElementById('mission-hover').textContent = description;
    });
    card.addEventListener('mouseleave', function() {
        document.getElementById('mission-hover').textContent = '';
    });
});


document.querySelectorAll('.testing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#fff';
    });
    card.addEventListener('mouseleave', function() {
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});


const counters = document.querySelectorAll('.counter-value');
if (counters.length) {
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                let start = 0;
                const increment = target / 50;
                const updateCounter = () => {
                    start += increment;
                    if (start >= target) {
                        counter.textContent = `${target}+`;
                        return;
                    }
                    counter.textContent = Math.ceil(start);
                    requestAnimationFrame(updateCounter);
                };
                updateCounter();
            });
            observer.disconnect();
        }
    });
    observer.observe(document.querySelector('.progress'));
}


document.querySelectorAll('.scroll-to').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});