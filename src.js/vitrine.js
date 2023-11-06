const certificados = document.querySelectorAll('.certificados img');
const modal = document.querySelector('.modal');
const certificadoAmpliado = document.getElementById('certificado-ampliado');
const closeBtn = document.querySelector('.close');

certificados.forEach(certificado => {
    certificado.addEventListener('click', () => {
        modal.style.display = 'block';
        certificadoAmpliado.src = certificado.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


const searchInput = document.getElementById('search-input');
const certificado = document.querySelectorAll('.certificados img');

searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();

    certificados.forEach(certificado => {
        const certificadoAlt = certificado.alt.toLowerCase();
        if (certificadoAlt.includes(term)) {
            certificado.style.display = 'block';
        } else {
            certificado.style.display = 'none';
        }
    });
});


//// DARK MODE

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        body.classList.add('light');
        body.classList.remove('dark');
    }
});
