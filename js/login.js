const formulario = document.querySelector("form");
const email = document.getElementById("email");
const clave = document.getElementById("clave");

const mensaje_estado = document.getElementById("mensaje_estado");

formulario.addEventListener("submit", function (event) {
  const email = document.getElementById("usuario");
  const clave = document.getElementById("clave");

  event.preventDefault();
  if (formulario.checkValidity()) {
    const lista_usuarios = recuperarUsuarios();

    let usuario_valido = false;
    lista_usuarios.forEach((item) => {
      if (item.email === email.value && item.clave === clave.value) {
        usuario_valido = true;
      }
    });

    sessionStorage.setItem("estado_usuario", usuario_valido);

    if (usuario_valido) {
      window.location.href = "./privada.html";
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
    { email: "valelu.muratore@gmail.com", clave: "vale123" },
    { email: "administracion@gmail.com", clave: "adm123" },
  ];
  localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
}

cargarUsuarios();
