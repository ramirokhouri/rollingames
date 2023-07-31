const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const generos = ["Accion", "Aventura", "FPS", "Lucha", "RPG", "Disparos"];
const admin_container = document.getElementById("admin-container");
const tabla_juegos = document.getElementById("tabla-juegos");

function destacado(juego_id, n) {
    let juego = videojuegos.find((juego) => juego.id == juego_id );
    console.log("featured antes: " + juego.featured);
    n === 1 ? juego.featured = true : juego.featured = false;
    console.log("featured después: " + juego.featured);
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    
}

function borrarJuego(i){
    videojuegos.splice(i,1);
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    cargarJuegos();
}

function cargarCategorias_nav() {
    const ul_categorias = document.getElementById("ul_categorias");
    generos.forEach((genero, index) => {
      const li = document.createElement("li");
      li.setAttribute("class", "nav-item");
      li.innerHTML = `<a class="nav-link active" aria-current="page" href="${`./categoria.html?genero=${genero}`}">${genero}</a>`;
      ul_categorias.appendChild(li);
    });
}

function cargarJuegos() {

    videojuegos.forEach((juego, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${juego.id}</th>
        <td>${juego.title}</td>
        <td>${juego.genre.join(", ")}</td>
        <td class="text-truncate" style="max-width: 50vw;">${juego.description}</td>
        <td>${juego.published}</td>
        <td>
            <div class="btn-group">
                <button type="button" class="btn btn-success" onclick="destacado('${juego.id}',1)"><i class="bi bi-star-fill"></i></button>
                <button type="button" class="btn btn-secondary" onclick="destacado('${juego.id}',0)"><i class="bi bi-star"></i></button>
                <button type="button" class="btn btn-info text-white"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger" onclick="borrarJuego(${index})"><i class="bi bi-trash-fill"></i></button>
            </div>
        </td>
        `
        tabla_juegos.appendChild(tr);
    });
}

function destacado(juego_id, n) {
    let juego = videojuegos.find((juego) => juego.id == juego_id );
    console.log("featured antes: " + juego.featured);
    n === 1 ? juego.featured = true : juego.featured = false;
    console.log("featured después: " + juego.featured);
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    
}

function borrarJuego(i){
    videojuegos.splice(i,1);
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    cargarJuegos();
    window.location.reload();
}

cargarCategorias_nav();
cargarJuegos();
/*
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Mark</td>
                <td>Otto</td>                
              </tr>
*/