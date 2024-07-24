function cargarCategorias_nav() {
    const ul_categorias = document.getElementById("ul_categorias");
    const generos = ["Action", "Adventure", "FPS", "Fighting", "RPG", "Shooting"];
    generos.forEach((genero, index) => {
      const li = document.createElement("li");
      li.setAttribute("class", "nav-item");
      li.innerHTML = `<a class="nav-link active" aria-current="page" href="${`./categoria.html?genero=${genero}`}">${genero}</a>`;
      ul_categorias.appendChild(li);
    });
}

cargarCategorias_nav();