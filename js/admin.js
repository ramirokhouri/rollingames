const videojuegos = JSON.parse(localStorage.getItem("juegos")) || [];
const generos = ["Accion", "Aventura", "FPS", "Lucha", "RPG", "Disparos"];
const admin_container = document.getElementById("admin-container");
const tabla_juegos = document.getElementById("tabla-juegos");

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
                <button type="button" class="btn btn-info text-white" onclick="editarJuego('${juego.id}')"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger" onclick="borrarJuego(${index})"><i class="bi bi-trash-fill"></i></button>
            </div>
        </td>
        `
        tabla_juegos.appendChild(tr);
    });
}

function destacado(juego_id, n) {
    let juego = videojuegos.find((juego) => juego.id == juego_id );
    n === 1 ? juego.featured = true : juego.featured = false;
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    
}


/* BORRAR JUEGO */
function borrarJuego(i){
    if(confirm("Desea borrar el juego?")) {
        videojuegos.splice(i,1);
        localStorage.setItem("juegos", JSON.stringify(videojuegos));
    }
    cargarJuegos();
    window.location.reload();
}

let modalCrear = new bootstrap.Modal(document.getElementById("modalCrear"));
let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));

function mostrarCrear(){
    modalCrear.show();
}

function mostrarEditar(){
    modalEditar.show();
}

/* CREAR JUEGO */
function crearJuego(e) {
    let published = true;
    let featured = false;
    e.preventDefault();
    let id = videojuegos[videojuegos.length-1].id+1;
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let developer = document.getElementById("developer").value;
    let release_date = document.getElementById("release_date").value;
    let poster = document.getElementById("poster").value;
    let banner = document.getElementById("banner").value;
    let logo = document.getElementById("logo").value;
    let screenshot1 = document.getElementById("screenshot1").value;
    let screenshot2 = document.getElementById("screenshot2").value;
    let screenshot3 = document.getElementById("screenshot3").value;
    let video = document.getElementById("video").value;
    let icon = document.getElementById("icon").value;
    let price = document.getElementById("price").value || 49.99;
    if (document.getElementById("publicadoCheck").value === "true") {
        published = true;
    } else {
        published = false;
    }
    if (document.getElementById("destacadoCheck").value === "true") {
        featured = true;
    } else {
        featured = false;
    }

    const nuevo_juego  = {
        id,
        title,
        genre: ["Accion","Lucha"],
        description,
        developer,
        release_date,
        poster,
        banner,
        logo,
        screenshot1,
        screenshot2,
        screenshot3,
        video,
        icon,
        price,
        published,
        featured,
    }

    videojuegos.push(nuevo_juego);
    localStorage.setItem("juegos",JSON.stringify(videojuegos));
    document.getElementById("crearJuegoForm").reset();
    modalCrear.hide();
    cargarJuegos();
    window.location.reload();

}

/*
function editarJuego(index){
    let id = videojuegos[index].id;
    let title = document.getElementById("edit_title").value;
    let description = document.getElementById("edit_description").value;
    let developer = document.getElementById("edit_developer").value;
    let release_date = document.getElementById("edit_release_date").value;
    let poster = document.getElementById("edit_poster").value;
    let banner = document.getElementById("edit_banner").value;
    let logo = document.getElementById("edit_logo").value;
    let screenshot1 = document.getElementById("edit_screenshot1").value;
    let screenshot2 = document.getElementById("edit_screenshot2").value;
    let screenshot3 = document.getElementById("edit_screenshot3").value;
    let video = document.getElementById("edit_video").value;
    let icon = document.getElementById("edit_icon").value;
    let price = document.getElementById("edit_price").value || 49.99;
    let published = document.getElementById("edit_published").value || true;
    let featured = document.getElementById("edit_featured").value || false;

    const editado  = {
        id,
        title,
        description,
        developer,
        release_date,
        poster,
        banner,
        logo,
        screenshot1,
        screenshot2,
        screenshot3,
        video,
        icon,
        price,
        published,
        featured,
    }

    videojuegos.splice(index, 1, editado);
    localStorage.setItem("juegos", JSON.stringify(videojuegos));
    cargarJuegos();
}
*/

cargarCategorias_nav();
cargarJuegos();