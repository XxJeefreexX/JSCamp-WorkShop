const searchInput = document.querySelector("[search-input]");

let users = [];

searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

const articleTemplate = document.querySelector("[article-template]");
const articleContainer = document.querySelector("[articles-container]");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const article = articleTemplate.content.cloneNode(true).children[0];
      const h2 = article.querySelector("[data-name]");
      const p = article.querySelector("[data-description]");

      h2.textContent = user.name;
      p.textContent = user.email;

      articleContainer.appendChild(article);

      return {
        name: user.name,
        email: user.email,
        element: article,
      };
    });
  });
