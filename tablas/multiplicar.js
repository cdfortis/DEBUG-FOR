function generarTablas() {
    // 1. Obtenemos el valor del input y el contenedor
    let numero = document.getElementById("inputDato").value;
    let contenedor = document.getElementById("contenedorTabla");
    
    // 2. Validamos que el usuario haya ingresado algo
    if (numero === "") {
        alert("Por favor, ingresa un número primero.");
        return;
    }

    // Convertimos el texto a número
    numero = parseInt(numero);

    // 3. Limpiamos el contenido previo y generamos la nueva tabla
    let contenido = "";
    for (let i = 1; i <= 10; i++) {
        // Usamos la estructura de clases de tu HTML original para mantener el diseño
        contenido += `
            <div class="fila">
                <span>${numero} x ${i}</span> 
                <span>=</span> 
                <span>${numero * i}</span>
            </div>`;
    }
    
    contenedor.innerHTML = contenido;

    // Opcional: Cambiar el título h1 para que coincida con el número
    document.querySelector("h1").innerText = "Tabla del " + numero;
}