var talleres = [
    { nombre: 'La Musicota', categoria: 'Musica', horario: '9 a 17', latitud: -34.515594, longitud: -58.705654 },
    { nombre: 'The Pianist', categoria: 'Musica', horario: '9 a 17', latitud: -34.519177, longitud: -58.719890 },
    { nombre: 'Muebleria Pablo', categoria: 'Artesania', horario: '9 a 17', latitud: -34.511089, longitud: -58.711374 },
    { nombre: 'Todo para tu hogar', categoria: 'Artesania', horario: '8 a 20', latitud: -34.514062, longitud: -58.707909 },
    { nombre: 'The Picasso Art', categoria: 'Pintura', horario: '10 a 16', latitud: -34.513824, longitud: -58.707584 }
];



var ubicacionInicial = [-34.5221554, -58.7000067];

var assetLayerGroup = new L.LayerGroup();

const formulario = document.querySelector('#formulario');

const tipo = document.querySelector('#categoria');

const resultado = document.querySelector('#resultado');

const fmapa = document.querySelector('#buscar');


var marcadores = [];

var map;


const filtrar = () => {
    marcadores.length = 0;

    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();

    for (let taller of talleres) {
        let nombre = taller.nombre.toLowerCase();

        //acá me dice que si no encuentra coincidencia en el resultado el indexof devuelve -1
        //entonces digo si encuentra lo que voy escribiendo, que me traiga todo lo que coincide
        if (nombre.indexOf(texto) !== -1 && (tipo.value == taller.categoria || tipo.value == "")) {
            //una vez que encuentro el texto lo devuelvo en un rasultado
            resultado.innerHTML += `
            <li>${taller.nombre} - categoria: ${taller.categoria}</li>
            `
            marcadores.push(taller);
        }
    } if (resultado.innerHTML === '') {

        resultado.innerHTML += `
        <li>taller no encontrado...</li>
        
        `
    }
}

   


function AgregarMapa() {

    map = L.map('mapid').setView(ubicacionInicial, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let taller of talleres) {
        L.polygon([
        L.latLng(taller.latitud, taller.longitud),
        ]).addTo(map);

        var info =  `
        <li>${taller.nombre} - horario: ${taller.horario}</li>
        `;

        var p = L.marker(L.latLng(taller.latitud, taller.longitud))
        .bindPopup(info);

        p.addTo(map);
}
}

function filtrarMapa() {

    map.remove();
    
    map = L.map('mapid').setView(ubicacionInicial, 15);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for (let marca of marcadores) {
        L.polygon([
        L.latLng(marca.latitud, marca.longitud),
        ]).addTo(map);

        var info =  `
        <li>${marca.nombre} - horario: ${marca.horario}</li>
        `;

        var p = L.marker(L.latLng(marca.latitud, marca.longitud))
        .bindPopup(info);

        p.addTo(map);
    }
} 

formulario.addEventListener('keyup', filtrar)
tipo.addEventListener('click', filtrar);
fmapa.addEventListener('click', filtrarMapa);


//tambien voy a hacer que mi sitio comience con la funcion activa con
// la instruccion siguiente y poder ver todos los talleres:

filtrar();









