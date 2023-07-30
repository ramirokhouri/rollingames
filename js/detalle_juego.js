const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const juego_container = document.getElementById("juego_container");

function cargarJuego(){
    // recupero el ID del juego desde la URL de la página
    let url_string = window.location.href;
    let url = new URL(url_string);
    let juegoID = url.searchParams.get("juegoID");
    console.log(juegoID);

    let juego = videojuegos.find((juego) => juego.id == juegoID );

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
    
}

cargarJuego();

/*
<section class="detalle-juego">
    <div class="contenido">
        <h1 class="nombre-juego">Resident Evil 4</h1>
        <p class="descripcion" style="color: #FFB400;">Un jugador</p>
        <h3>$15,500.00</h2>
        <br>
        <button type="button" class="btn btn-primary btn-lg">Comprar ahora</button>
        <br>
        <br>
        <h2 class="titulo">Descripción</h1>
        <p class="descripcion">
            Resident Evil 4 es un remake del Resident Evil 4 original del 2005.
            Survival Horror de última generación reimaginado para el año 2023.
            Resident Evil 4 conserva la esencia del juego original, a la vez que introduce mecánicas de juego actualizadas,una historia reimaginada, e impresionantes gráficos de última generación que lo convierten en la experiencia de Survival Horror definitiva en la cual se cruzan la vida y la muerte, el terror y la catarsis.
        </p>
        <br>
        <h2 class="titulo">Historia</h1>
        <p class="descripcion">
            Han pasado seis años desde la catástrofe biológica de Raccoon City.
            Leon S. Kennedy, uno de los supervivientes, ha sido asignado como agente especial del gobierno al presidente de los Estados Unidos.
            Con la experiencia de múltiples misiones a sus espaldas,Leon es enviado a rescatar a la hija del presidente, la cual ha sido secuestrada.
            Sus pesquisas le llevan a un aislado pueblo europeo,en donde algo muy extraño está pasando con sus habitantes...
            El telón se alza desvelando una cruenta experiencia de Survival Horror y la historia de un angustioso rescate.
        </p>
    </div>
</section>
*/