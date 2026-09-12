//Galería de arte

// Captura de los elementos del HTML en variables
let diseño = document.querySelector("#diseño");
let galeria = document.querySelector("#contenedor");

//Oculto el botón para cambiar el diseño de la galeria
diseño.style.display = 'none';

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

    //Muestra el botón ppara cambiar el diseño de la galeria de arte
    diseño.style.display = 'block';
});