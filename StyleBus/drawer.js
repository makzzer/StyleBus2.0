var Drawer = function() {
    return {        
		drawLocationInMap: drawLocationInMap,
        drawStatesInList: drawStatesInList
    }

    /******************************************************************************
     * Función para dibujar una ubicacion en un mapa.
     */
    function drawLocationInMap(location, map) {
        console.log("Nombre del taller: " + location.lid);

		var info = location.name + " - " + location.state.description;

		// Creamos un marker.		
		var p = L.marker(L.latLng(location.lat, location.lon))
			.bindPopup(info);

		p.addTo(map);		
	}

}
