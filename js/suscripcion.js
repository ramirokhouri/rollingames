console.log("Control de formulario");

const formulario = document.querySelector("form");
const  nombre  =  document.getElementById ("nombre") ;
const  apellido  =  document.getElementById ( 'apellido' ) ;
const  usuario  =  document.getElementById ( 'email' ) ;
const  clave  =  document.getElementById ( 'clave' ) ;
const  mensaje  =  document.getElementById ( 'mensaje' ) ;

formulario.addEventListener("submit", function (event){
    event.preventDefault();
   if(formulario.checkValidity()){
       console.log(nombre.value);
       console.log(apellido.value);
       console.log(email.value);
       console.log(clave.value);
       console.log(exampleCheck1.checked ? "Recordar" : "No recordar");
   } else {
    console.log("Formulario ERROR");
    nombre.focus ();
   }
   });

   clave.addEventListener("invalid", function (event){
    event.preventDefault();

    mensaje.innerText = "Clave no válida (min 8 - max 12 caracteres)";
    mensaje.style.display = "block";
   });