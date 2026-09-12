//Galería de arte

// Captura de los elementos del HTML en variables
let diseño = document.querySelector("#diseño");
let galeria = document.querySelector("#contenedor");


//Array de objetos con las obras de Casey Reas
let obras = [
    {
        obra: "Process 4",
        año: 2005,
        imagen: "img/galeria-de-arte/process-4-2005.jpg"
    },

    {
        obra: "Process 6",
        año: 2005,
        imagen: "img/galeria-de-arte/process-6-2005.jpg"
    },

    {
        obra: "Process 18",
        año: 2010,
        imagen: "img/galeria-de-arte/process-18-2010.jpg"
    },

    {
        obra: "Process Compendium 2004-2010",
        año: 2010,
        imagen: "img/galeria-de-arte/process-compendium-2004-2010-2010.jpg"
    },
    
    {
        obra: "Network C",
        año: 2012,
        imagen: "img/galeria-de-arte/network-c-2012.png"
    }
];

//Al cargar la página, genera la galeria de arte
window.addEventListener('load', function(e){

    // Por cada elemento del array obra, inserta el código HTML con la información de cada obra dentro del contenedor
    obras.forEach(function(obra){
        galeria.innerHTML += `
        <div class="obra">
            <label for="obra">${obra.obra} - ${obra.año}</label>
            <img src="${obra.imagen}" alt="${obra.obra} - ${obra.año}" id="obra">
        </div>
        `
    });
});

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
        texto.style.color = "rgba(2, 93, 116)";
    }

    diseño.style.display = 'none';
});