const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const generos = ["Accion", "Aventura", "FPS", "Lucha", "RPG", "Disparos"];
const categorias_container = document.getElementById("categorias_container");

function cargarJuegos() {
  generos.forEach((genero, index) => {
    // título de la categoría
    const h1 = document.createElement("h1");
    h1.setAttribute("class", "title d-flex justify-content-between mt-3 mb-3");

    // contenedor de categoría
    const contenido_categoria = document.createElement("div");
    contenido_categoria.setAttribute("id", `categoria_${genero}`);
    contenido_categoria.setAttribute("class", "row g-3 mt-3 mb-3");

    // botón mostrar género
    h1.innerHTML = `${genero} <button type="button" class="btn btn-primary" onclick="mostrarGenero(${index})">Ver más</button>`;
    categorias_container.appendChild(h1);
    categorias_container.appendChild(contenido_categoria);

    // array de juegos para cada género
    let grilla_juegos = videojuegos.filter((juego) => juego.published == true);
    grilla_juegos = grilla_juegos.filter((juego) =>
      juego.genre.includes(genero)
    );
    // se muestran solo 6 juegos, al azar, en la grilla por cada categoría
    grilla_juegos = grilla_juegos.sort(() => Math.random() - 0.5).slice(0, 6);

    // grilla para cada género
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
  });
}

function cargarCarrusel(){
  let destacados = videojuegos.filter((juego)=> juego.featured == true);
  destacados = destacados.filter((juego) => juego.published == true);

  destacados.forEach((juego, index) => {

    let div = document.createElement('div')
    div.setAttribute("class","carousel-item") 
    div.innerHTML=`
    <a class="game gamePoster" onclick="mostrarDetalles(${index})" href="#">
    <img src="${juego.poster}" class="d-block w-100 carouselBanner" alt="${juego.title}" />
    </a>
    <a class="game gameLogo" onclick="mostrarDetalles(${index})" href="#">
    <img src="${juego.logo}" class="carouselLogo" alt="" srcset="">
    </a>
    <a class="game gameBanner" onclick="mostrarDetalles(${index})" href="#">
    <img src="${juego.banner}" class="d-block w-100 carouselBanner" alt="${juego.title}" />
    </a>  
    
    <div class="carousel-caption">
      <p class="text-center">${juego.description}</p>
      <button type="button" class="btn btn-danger btn-sm" onclick="mostrarDetalles(${juego.id})" href="#">See More</button>
    </div>`
    // <div class="d-block d-md-none">
    // <button type="button" class="btn btn-danger btn-sm" onclick="mostrarDetalles(${index})" href="./pages/gameDetails.html?gameID=${juego.id}">See More</button>
    // </div>`
    document.getElementsByClassName("carousel-inner")[0].appendChild(div)
    document.getElementsByClassName("carousel-item")[0].setAttribute("class","carousel-item active")

    let button=document.createElement('button')
    button.setAttribute("type","button")
    button.setAttribute("class","botonCarousel")
    button.setAttribute("data-bs-target","#carouselExampleCaptions")
    button.setAttribute("data-bs-slide-to",`${index}`)
    button.setAttribute("aria-current","true")
    button.setAttribute("aria-label",`Slide ${index+1}`)
    document.getElementsByClassName("carousel-indicators")[0].appendChild(button)
    document.getElementsByClassName("botonCarousel")[0].setAttribute("class","botonCarousel active")

  });

}



cargarJuegos();
cargarCarrusel();

