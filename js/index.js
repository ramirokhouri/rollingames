const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const generos = ["Accion", "Aventura", "FPS", "Lucha", "RPG", "Disparos"];
const categorias_container = document.getElementById("categorias_container");

function cargarJuegos() {
  generos.forEach((genero, index) => {
    // título de la categoría
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "title justify-content-between");

    // contenedor de categoría
    const contenido_categoria = document.createElement("div");
    contenido_categoria.setAttribute("id", `categoria_${genero}`);
    contenido_categoria.setAttribute("class", "row g-3");

    // botón mostrar género
    h1.innerHTML = `${genero} <button type="button" class="btn btn-primary" onclick="mostrarGenero(${index})">Ver más</button>`;
    categorias_container.appendChild(h1);
    categorias_container.appendChild(contenido_categoria);

    // array de juegos para cada género
    let grilla_juegos = videojuegos.filter((juego) => juego.published == true);
    grilla_juegos = grilla_juegos.filter((juego) =>
      juego.genre.includes(genero)
    );

    // grilla para cada género
    grilla_juegos.forEach((juego, index) => {
      let generos_str = juego.genre.join(", ");

      let div = document.createElement("div");
      div.setAttribute("class", "col-6 col-md-3 col-lg-2");
      let contenido_card = `<div class="card text-bg-dark">
      <a class="juego" onclick="mostrarDetalles(${index})" href="#">
      <img src="${juego.poster}" class="card-img-top" alt="">
      <div class="card-body p-1">
      <h5 title="${juego.title}" class="card-title">${juego.title}</h5>
      <p class="card-text genero">${generos_str}</p>
      <p class="card-text">$${juego.price || 59.99}</p>
      </div>
      `;
      div.innerHTML = contenido_card;

      let contenido_categoria_ = document.getElementById(`categoria_${genero}`);
      contenido_categoria_.appendChild(div);
    });
  });
}

cargarJuegos();
