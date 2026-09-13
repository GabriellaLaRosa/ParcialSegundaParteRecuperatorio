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
            <label for="${obrasArray.length - i}">
                ${obrasArray[obrasArray.length - i].obra} - ${obrasArray[obrasArray.length - i].anio}
            </label>

            <img src="${obrasArray[obrasArray.length - i].imagen}"
                 alt="${obrasArray[obrasArray.length - i].obra} - ${obrasArray[obrasArray.length - i].anio}"
                 id="${obrasArray.length - i}">
        </div>
        `;

        i--;
    }
});

//Cambiar el diseño de la galería de arte
diseño.addEventListener('click', function(){

    // Obtiene todas los elementos(contenedores) de la galería
    let obras = document.querySelectorAll(".obra");

    // Recorre cada de esos contenedores
    for(let i = 0; i < obras.length; i++){

        // Cambia el color de fondo y de texto de cada contenedor
        obras[i].style.background = 'rgb(234, 226, 183, 0.5)';

        // Busca el texto dentro del contenedor
        let texto = obras[i].querySelector("label");

        // Cambia el color del texto
        texto.style.color = "rgb(2, 93, 116)";
    }

    diseño.style.display = 'none';
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