const formulario = document.querySelector("form");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const nombre = document.getElementById("nombre");

const mensaje_estado = document.getElementById("mensaje_estado");
    
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const claveInput = document.getElementById("clave");
  const nombreInput = document.getElementById("nombre");

  if (formulario.checkValidity()) {
    const lista_usuarios = recuperarUsuarios();
    const usuario = {
      email: emailInput.value,
      clave: claveInput.value,
      rol: "user",
      nombre: nombreInput.value
    };
    lista_usuarios.push(usuario);
    localStorage.setItem("lista_usuarios", JSON.stringify(lista_usuarios));
  }
  window.location.href = "./login.html";
});

function recuperarUsuarios() {
  return JSON.parse(localStorage.getItem("lista_usuarios")) || [];
}

function ocultarMensaje() {
  setTimeout(() => {
    mensaje_estado.classList.remove("visible");
    mensaje_estado.classList.add("invisible");
  }, 3000);
}

function cargarUsuarios() {
  const usuarios = [
    { email: "mail@mail.com", clave: "123456", rol: "user", nombre:"fede" },
    { email: "valelu.muratore@gmail.com", clave: "vale123", rol: "user", nombre: "vale" },
    { email: "administracion@gmail.com", clave: "adm123", rol: "admin", nombre: "admin" },
  ];
  localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
}

nombre.addEventListener("invalid", function (event){
event.preventDefault();
mensaje.innerText = "Solo texto"
mensaje.style.display = "block"
});

cargarUsuarios();

function cargarCategorias_nav() {
  const ul_categorias = document.getElementById("ul_categorias");
  const generos = ["Accion", "Aventura", "FPS", "Lucha", "RPG", "Disparos"];
  generos.forEach((genero, index) => {
    const li = document.createElement("li");
    li.setAttribute("class", "nav-item");
    li.innerHTML = `<a class="nav-link active" aria-current="page" href="${`./categoria.html?genero=${genero}`}">${genero}</a>`;
    ul_categorias.appendChild(li);
  });
}

cargarCategorias_nav();