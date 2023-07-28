const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const categoria_container = document.getElementById("categoria_container");

function cargarJuegos() {
  // recupero categoría desde la URL de la página
  let url_string = window.location.href;
  let url = new URL(url_string);
  let genero = url.searchParams.get("genero");

  // Header categoría
  const h1 = document.createElement("h1");
  h1.setAttribute("class", "title mt-3 mb-3");
  const contenido_categoria = document.createElement("div");
  contenido_categoria.setAttribute("id", `categoria_${genero}`);
  contenido_categoria.setAttribute("class", "row g-3 mt-3 mb-3");
  h1.innerHTML = `${genero}`;
  categoria_container.appendChild(h1);
  categoria_container.appendChild(contenido_categoria);

  // filtro la lista de videojuegos por categoría
  const grilla_juegos = videojuegos.filter((juego) =>
    juego.genre.includes(genero)
  );

  // mostrar juegos
  grilla_juegos.forEach((juego, index) => {
    let generos_str = juego.genre.join(", ");

    let div = document.createElement("div");
    div.setAttribute("class", "col-6 col-md-3 col-lg-2 d-flex");
    let contenido_card = `<div class="card text-bg-dark flex-fill border-dark">
    <a class="text-light" onclick="mostrarDetalles(${index})" href="#">
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
}

cargarJuegos();
