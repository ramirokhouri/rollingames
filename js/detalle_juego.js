const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const juego_container = document.getElementById("juego_container");

function cargarJuego(){
    // recupero el ID del juego desde la URL de la página
    let url_string = window.location.href;
    let url = new URL(url_string);
    let juegoID = url.searchParams.get("juegoID");

    // objeto juego a partir del juegoID
    let juego = videojuegos.find((juego) => juego.id == juegoID );
    let generos_str = juego.genre.join(", ");

    let div = document.createElement("div");
    div.innerHTML = `
    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <video controls autoplay class="d-block w-100">
                    <source src="${juego.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="carousel-item">
            <img src="${juego.screenshot1}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${juego.screenshot2}" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
            <img src="${juego.screenshot3}" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `
    juego_container.appendChild(div);

    let div_contenido = document.createElement("div");
    div_contenido.setAttribute("class", "contenido text-center");
    div_contenido.innerHTML = `
    <img src="${juego.icon}">
    <h1 class="nombre-juego display-5 pt-3">${juego.title}</h1>
    <h3 class="descripcion pt-3">${generos_str}</h3>
    <p class="descripcion lead">${juego.description}</p>
    <p class="descripcion">Desarrollado por ${juego.developer}</p>
    <button type="button" class="btn btn-primary btn-lg">$${juego.price}</button></h1>

    `
    juego_container.appendChild(div_contenido);
}

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

cargarJuego();
cargarCategorias_nav();