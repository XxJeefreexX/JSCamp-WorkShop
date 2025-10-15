// const botones = document.querySelectorAll('.button-aply-job');

// botones.forEach(boton => {
//   boton.addEventListener('click', () => {
//     boton.textContent = '¡Aplicado!';
//     boton.classList.add('is-aplied');
//   });
// });

const jobsListingSection = document.querySelector(".job-listings");

jobsListingSection.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("button-aply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-aplied");
    element.disabled = true;
  }
});

// const searchFilter = document.querySelector('.search-filters');
// const jobOffers = document.querySelector('.job-offer');

// searchFilter.addEventListener('change', () => {

// })

const searchFilter = document.querySelector(".search-filters");
const jobOffers = document.querySelectorAll(".job-offer");

searchFilter.addEventListener("change", () => {
  // Obtén todos los valores de los filtros
  const selects = searchFilter.querySelectorAll("select");
  const filtros = Array.from(selects).map((select) =>
    select.value.toLowerCase()
  );

  jobOffers.forEach((offer) => {
    const smalls = offer.querySelectorAll("small");

    const mostrarTodos = filtros.every(
      (filtro) => filtro === "todos" || filtro === ""
    );
    if (mostrarTodos) {
      offer.style.display = "";
      return;
    }

    const coincide = filtros.every((filtro) =>
      Array.from(smalls).some((small) =>
        small.textContent.toLowerCase().includes(filtro)
      )
    );
    offer.style.display = coincide ? "" : "none";
  });
});
