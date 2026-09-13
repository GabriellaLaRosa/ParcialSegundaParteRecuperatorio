//Galería de arte

// Captura de los elementos del HTML en variables
let disenio = document.querySelector("#disenio");
let cambiar = document.querySelector("#cambiar");
let galeria = document.querySelector("#contenedor");


//Array de objetos con las obras de Casey Reas
let obrasArray = [
    {
        obra: "Process 4",
        anio: 2005,
        imagen: "img/galeria-de-arte/process-4-2005.jpg"
    },

    {
        obra: "Process 6",
        anio: 2005,
        imagen: "img/galeria-de-arte/process-6-2005.jpg"
    },

    {
        obra: "Process 18",
        anio: 2010,
        imagen: "img/galeria-de-arte/process-18-2010.jpg"
    },

    {
        obra: "Process Compendium 2004-2010",
        anio: 2010,
        imagen: "img/galeria-de-arte/process-compendium-2004-2010-2010.jpg"
    },

    {
        obra: "Network C",
        anio: 2012,
        imagen: "img/galeria-de-arte/network-c-2012.png"
    }
];

//Al cargar la página, genera la galeria de arte
window.addEventListener('load', function(e){

    // Por cada elemento del array obra, inserta el código HTML con la información de cada obra dentro del contenedor
    let i = obrasArray.length;

    while(i > 0){

        galeria.innerHTML += `
        <div class="obra">
            <img src="${obrasArray[obrasArray.length - i].imagen}"
                alt="${obrasArray[obrasArray.length - i].obra} - ${obrasArray[obrasArray.length - i].anio}">

            <p>${obrasArray[obrasArray.length - i].obra} - ${obrasArray[obrasArray.length - i].anio}</p>
        </div>
        `;

        i--;
    }
});

//Cambiar el diseño de la galería de arte
disenio.addEventListener('click', function(){

    // Obtiene todos los elementos (contenedores) de la galería
    let obras = document.querySelectorAll(".obra");

    // Recorre cada uno de esos contenedores
    for(let i = 0; i < obras.length; i++){

        // Cambia el color de fondo de cada contenedor
        obras[i].style.background = 'rgba(234, 226, 183, 0.5)';

        // Busca el texto dentro del contenedor
        let texto = obras[i].querySelector("p");

        // Cambia el color del texto
        texto.style.color = "rgb(2, 93, 116)";
    }

    disenio.style.display = 'none';
    cambiar.style.display = 'none';
});

//Dato curioso al azar

// Captura de los elementos del HTML
let botonDato = document.querySelector("#dato");
let respuesta = document.querySelector("#resultado");

// Oculta la respuesta cuando se carga la página
respuesta.style.display = "none";

// Array que contiene diferentes datos curiosos sobre Casey Reas
let datosCuriosos = [
    "Casey Reas es co-creador de Processing, un lenguaje de programación visual diseñado para artistas y estudiantes de diseño.",

    "Junto a Ben Fry desarrolló Processing como una herramienta educativa en el MIT Media Lab en 2001.",

    "Su obra artística se basa en la escritura de algoritmos que generan imágenes en constante cambio.",

    "Está influenciado por el arte conceptual y sistemático, especialmente por las instrucciones visuales de Sol LeWitt.",

    "Ha realizado exposiciones en museos como el MoMA, el Centre Pompidou y el ICA de Londres.",

    "Muchas de sus obras son generadas en tiempo real, por lo que nunca se ven exactamente igual dos veces.",

    "Publicó libros fundamentales sobre programación creativa como Processing: A Programming Handbook for Visual Designers and Artists.",

    "Ha trabajado como profesor en el Departamento de Diseño de Medios en la UCLA (Universidad de California, Los Ángeles).",

    "Explora el arte generativo como un proceso basado en reglas simples que producen resultados complejos y emergentes.",

    "Además de visuales digitales, ha realizado impresiones generativas de gran formato como obras únicas o en series."
];

// Guarda el número aleatorio que se utilizará para elegir un dato
let numRandom = 0;

// Ejecuta esta función cada vez que el usuario hace click en el botón
botonDato.addEventListener("click", function() {

    // Muestra el elemento donde aparecerá el dato curioso
    respuesta.style.display = "block";

    // Genera un número aleatorio entre 0 y 9

    // Math.random() genera un número decimal entre 0 y 1
    // Math.random() * 10 lo lleva a un número entre 0 y 9.999...
    // Math.floor() elimina los decimales y deja un número entero
    numRandom = Math.floor(Math.random() * datosCuriosos.length);

    // Muestra en pantalla el dato que se encuentra en la posición aleatoria del array
    respuesta.innerText = datosCuriosos[numRandom];
});

//Realización de ejercicio

// Captura de los elementos del HTML
let cantidadInstalacionesInput = document.querySelector("#cantidadInstalaciones");
let nombreInstalacionInput = document.querySelector("#nombreInstalacion");
let personasInstalacionInput = document.querySelector("#personasInstalacion");
let diasInstalacionInput = document.querySelector("#diasInstalacion");
let horasDiaInput = document.querySelector("#horasDia");
let honorarioHoraInput = document.querySelector("#honorarioHora");

// Captura de los botones
let btnCantidad = document.querySelector("#btnCantidad");
let btnInstalacion = document.querySelector("#btnInstalacion");
let btnCalcular = document.querySelector("#btnCalcular");
let btnReiniciar = document.querySelector("#btnReiniciar");

// Captura de los contenedores donde se mostrarán los datos
let instalacionesCargadas = document.querySelector("#instalacionesCargadas");
let resultados = document.querySelector("#resultados");

// Variables para guardar los datos
let cantidadInstalaciones = 0;
let instalaciones = [];

let horasDia = 0;
let honorarioHora = 0;

//Confirmar cantidad de instalaciones
btnCantidad.addEventListener("click", function() {

    cantidadInstalaciones = Number(cantidadInstalacionesInput.value);

    // Validamos la cantidad ingresada
    if (cantidadInstalaciones <= 0 || isNaN(cantidadInstalaciones) || !Number.isInteger(cantidadInstalaciones)) {
        //!Number.isInteger(cantidadInstalaciones) -> Valida que el número sea entero
        alert("Ingresá una cantidad entera mayor que cero.");
    } else {
        // Deshabilitamos la cantidad de instalaciones porque ya fue confirmada
        cantidadInstalacionesInput.disabled = true;
        btnCantidad.disabled = true;

        // Habilitamos los datos de la primera instalación
        nombreInstalacionInput.disabled = false;
        personasInstalacionInput.disabled = false;
        diasInstalacionInput.disabled = false;
        btnInstalacion.disabled = false;
    }
});

//Agregar instalación
btnInstalacion.addEventListener("click", function() {

    let nombre = nombreInstalacionInput.value.trim(); //.trim() -> quita los espacios que están al principio y al final del texto
    let personas = Number(personasInstalacionInput.value);
    let dias = Number(diasInstalacionInput.value);

    // Validamos el nombre
    if (nombre === "") {
        alert("Ingresá el nombre de la instalación.");
        return;
    }

    // Validamos la cantidad de personas
    if (personas <= 0 || isNaN(personas) || !Number.isInteger(personas)) {
        alert("La cantidad de personas debe ser un número entero mayor que cero.");
        return;
    }

    // Validamos los días
    if (dias <= 0 || isNaN(dias) ||!Number.isInteger(dias)) {
        alert("La cantidad de días debe ser un número entero mayor que cero.");
        return;
    }

    // Guardamos los datos en un objeto
    let instalacion = {
        nombre: nombre,
        personas: personas,
        dias: dias
    };

    // Agregamos el objeto al array
    instalaciones.push(instalacion);

    // Mostramos la instalación cargada
    instalacionesCargadas.innerHTML += `
        <div class="instalacionCargada">
            <p>
                <strong>${nombre}</strong><br>
                Personas necesarias: ${personas}<br>
                Días estimados: ${dias}
            </p>
        </div>
    `;

    // Limpiamos los campos
    nombreInstalacionInput.value = "";
    personasInstalacionInput.value = "";
    diasInstalacionInput.value = "";

    // Cuando se cargan todas las instalaciones
    if (instalaciones.length === cantidadInstalaciones) {

        // Deshabilitamos los campos de instalaciones
        nombreInstalacionInput.disabled = true;
        personasInstalacionInput.disabled = true;
        diasInstalacionInput.disabled = true;
        btnInstalacion.disabled = true;

        // Habilitamos los datos generales del estudio
        horasDiaInput.disabled = false;
        honorarioHoraInput.disabled = false;
        btnCalcular.disabled = false;

        alert("Se cargaron todas las instalaciones. Ahora ingresá los datos del estudio.");
    }
});

//Calcular resultados
btnCalcular.addEventListener("click", function() {

    horasDia = Number(horasDiaInput.value);
    honorarioHora = Number(honorarioHoraInput.value);

    // Validamos las horas por día
    if (horasDia <= 0 || isNaN(horasDia) || !Number.isInteger(horasDia)) {
        alert("Ingresá una cantidad entera de horas mayor que cero.");
        return;
    }

    // Validamos el honorario
    if (honorarioHora <= 0 || isNaN(honorarioHora)) {
        alert("Ingresá un honorario mayor que cero.");
        return;
    }

    // Deshabilitamos los datos generales
    horasDiaInput.disabled = true;
    honorarioHoraInput.disabled = true;
    btnCalcular.disabled = true;

    //Cálculo costo de un día
    let totalPersonas = 0;

    for (let i = 0; i < instalaciones.length; i++) {
        totalPersonas += instalaciones[i].personas;
    }

    let costoDia = totalPersonas * horasDia * honorarioHora;

    //Cálculo instación de más días
    let instalacionMayor = instalaciones[0];

    for (let i = 1; i < instalaciones.length; i++) {
        if (instalaciones[i].dias > instalacionMayor.dias) {
            instalacionMayor = instalaciones[i];
        }
    }

    let costoInstalacionMayor =
        instalacionMayor.personas *
        instalacionMayor.dias *
        horasDia *
        honorarioHora;

    //Cálculo del costo total del estudio
    let costoTotalEstudio = 0;

    for (let i = 0; i < instalaciones.length; i++) {
        let costoInstalacion =
            instalaciones[i].personas *
            instalaciones[i].dias *
            horasDia *
            honorarioHora;

        costoTotalEstudio += costoInstalacion;
    }

    let porcentajeMayor = (costoInstalacionMayor / costoTotalEstudio) * 100;

    //Mostrar resultados
    resultados.innerHTML = `
        <h4>Resultados de la producción</h4>

        <p>
            <strong>1. Costo total de un día de trabajo:</strong><br>
            $${costoDia.toFixed(2)} 
        </p> 

        <p>
            <strong>2. Instalación que necesita más días:</strong><br>
            ${instalacionMayor.nombre}<br>
            Días de producción: ${instalacionMayor.dias}<br>
            Costo total: $${costoInstalacionMayor.toFixed(2)}
        </p>

        <p>
            <strong>3. Porcentaje del costo total del estudio que representa el costo de la instalación de más días de producción:</strong><br>
            ${porcentajeMayor.toFixed(2)}%
        </p>
    `; //toFixed() -> sirve para mostrar un número con una cantidad determinada de decimales

    // Mostramos los resultados
    resultados.style.display = "block";

    // Habilitamos el botón de reinicio
    btnReiniciar.disabled = false;

});

//Reiniciar
btnReiniciar.addEventListener("click", function() {

    // Reiniciamos las variables
    cantidadInstalaciones = 0;
    instalaciones = [];
    horasDia = 0;
    honorarioHora = 0;

    // Limpiamos los resultados anteriores
    instalacionesCargadas.innerHTML = "";
    resultados.innerHTML = "";

    // Habilitamos nuevamente la cantidad
    cantidadInstalacionesInput.disabled = false;
    btnCantidad.disabled = false;

    // Deshabilitamos los demás campos
    nombreInstalacionInput.disabled = true;
    personasInstalacionInput.disabled = true;
    diasInstalacionInput.disabled = true;
    btnInstalacion.disabled = true;

    horasDiaInput.disabled = true;
    honorarioHoraInput.disabled = true;
    btnCalcular.disabled = true;

    // Ocultamos los resultados
    resultados.style.display = "none";

    // Deshabilitamos el botón de reinicio
    btnReiniciar.disabled = true;

    // Limpiamos todos los campos
    cantidadInstalacionesInput.value = "";
    nombreInstalacionInput.value = "";
    personasInstalacionInput.value = "";
    diasInstalacionInput.value = "";
    horasDiaInput.value = "";
    honorarioHoraInput.value = "";
});