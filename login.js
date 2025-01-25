// Usuarios almacenados en JSON
const usuarios = [
    { nombreUsuario: "admin", contrasena: "admin123", rol: "administrador" },
    { nombreUsuario: "cliente1", contrasena: "cliente123", rol: "cliente" },
    { nombreUsuario: "invitado1", contrasena: "invitado123", rol: "invitado" }
];

// Datos de formulario para el administrador
const datosFormulario = [
    { nombre: "cristopher colquehuanca", correo: "colque10@gmail.com", mensaje: "revisar ordenes" },
   
];






// Manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault();
    const nombreUsuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();
    const mensajeError = document.getElementById("mensajeError");

    // Validar credenciales
    const usuario = usuarios.find(u => u.nombreUsuario === nombreUsuario && u.contrasena === contrasena);

    if (usuario) {
        // Guardar en almacenamiento local
        localStorage.setItem("usuarioActual", JSON.stringify(usuario));
        mostrarTablero(usuario);
    } else {
        mensajeError.textContent = "Usuario o contraseña incorrectos.";
    }
}

// Mostrar tablero según el rol del usuario
function mostrarTablero(usuario) {
    document.getElementById("contenedorLogin").style.display = "none";
    document.getElementById("tablero").style.display = "block";
    document.getElementById("mensajeBienvenida").textContent = `Bienvenido, ${usuario.nombreUsuario}`;

    if (usuario.rol === "administrador") {
        document.getElementById("panelAdministrador").style.display = "block";
        const listaDatos = document.getElementById("listaDatosFormulario");
        listaDatos.innerHTML = "";
        datosFormulario.forEach(dato => {
            const li = document.createElement("li");
            li.textContent = `${dato.nombre} (${dato.correo}): ${dato.mensaje}`;
            listaDatos.appendChild(li);
        });
    } else {
        document.getElementById("perfilUsuario").style.display = "block";
        document.getElementById("perfilNombreUsuario").textContent = usuario.nombreUsuario;
        document.getElementById("perfilRol").textContent = usuario.rol;
    }
}

// Cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("usuarioActual");
    document.getElementById("tablero").style.display = "none";
    document.getElementById("contenedorLogin").style.display = "block";
}

// Ir a página inicio.html
function irPagina() {
    window.location.href = "src/inicio.html";
}

// Ir a página reportes.html
function irReportes() {
    window.location.href = "reportes.html";
}

// Inicializar
window.onload = function() {
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    if (usuarioActual) {
        mostrarTablero(usuarioActual);
    }

    // Eventos
    document.getElementById("formularioLogin").addEventListener("submit", iniciarSesion);
    document.getElementById("botonCerrarSesion").addEventListener("click", cerrarSesion);
    document.getElementById("botonIrPagina").addEventListener("click", irPagina);
    document.getElementById("botonIrReportes").addEventListener("click", irReportes);

    
};




