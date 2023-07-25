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
    contenido_categoria.setAttribute("id", `category${genero}`);
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
    // console.log(genero);
    // console.log(grilla_juegos);
  });
}

cargarJuegos();
