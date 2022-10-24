console.log('conectado al archivex');

const talleres = [
    { nombre: 'Taller musica', latitud: -34.515594, longitud: -58.705654 },
    { nombre: 'Taler Ceramica', latitud: -34.519177, longitud: -58.719890 },
    { nombre: 'Taller Escultura', latitud: -34.511089, longitud: -58.711374 },
    { nombre: 'Taller de Botanica', latitud: -34.514062, longitud: -58.707909 },
    { nombre: 'Taller de Pintura', latitud: -34.513824, longitud: -58.707584 }
]


function bootstrap() {
    var ungsLocation = [-34.5221554, -58.7000067];
    var map = L.map('mapid').setView(ungsLocation,);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(map);

    for (let taller of talleres) {
        L.polygon([
            L.latLng(taller.latitud, taller.longitud),
        ]).addTo(map);

        var info = taller.nombre;

        var p = L.marker(L.latLng(taller.latitud, taller.longitud))
            .bindPopup(info);

        p.addTo(map);
    }





}






