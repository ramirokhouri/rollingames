const formulario = document.querySelector("form");
const email = document.getElementById("email");
const clave = document.getElementById("clave");

const mensaje_estado = document.getElementById("mensaje_estado");

formulario.addEventListener("submit", function (event) {
  const email = document.getElementById("usuario");
  const clave = document.getElementById("clave");
  const rol = document.getElementById("rol");

  event.preventDefault();
  if (formulario.checkValidity()) {
    const lista_usuarios = recuperarUsuarios();
    let usuario_logueado;

    let usuario_valido = false;
    lista_usuarios.forEach((item) => {
      if (item.email === email.value && item.clave === clave.value) {
        usuario_valido = true;
        usuario_logueado = item;
      }
    });

    sessionStorage.setItem("estado_usuario", usuario_valido);

    if (usuario_valido) {
      localStorage.setItem(
        "usuario_logueado",
        JSON.stringify(usuario_logueado)
      );
      if (usuario_logueado.rol === "admin") {
        window.location.href = "./html/admin.html";
      } else {
        window.location.href = "../index.html";
      }
    } else {
      mensaje_estado.innerHTML = "Error en email y/o clave";
      mensaje_estado.classList.remove("invisible");
      mensaje_estado.classList.add("visible");
      email.focus();
      ocultarMensaje();
    }
  } else {
    mensaje_estado.innerHTML = "Datos faltantes o no válidos";
    mensaje_estado.classList.remove("invisible");
    mensaje_estado.classList.add("visible");
    email.focus();
    ocultarMensaje();
    console.log("Formulario ERROR");
  }
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
    { email: "admin@mail.com", clave: "123456", rol: "admin", nombre: "admin" },
  ];
  localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
}

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