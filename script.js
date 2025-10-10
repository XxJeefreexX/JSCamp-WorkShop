// const botones = document.querySelectorAll('.button-aply-job');

// botones.forEach(boton => {
//   boton.addEventListener('click', () => {
//     boton.textContent = '¡Aplicado!';
//     boton.classList.add('is-aplied');
//   });
// });

const jobsListingSection = document.querySelector('.job-listings');

jobsListingSection.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList.contains('button-aply-job')) {
        element.textContent = '¡Aplicado!';
        element.classList.add('is-aplied');
        element.disabled = true;
    }
});