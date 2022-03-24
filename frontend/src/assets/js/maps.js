var debug = false;
var map = L.map('map').setView([-15.1, -54.4], 4);
var actualPos = [null, null];
var actualMark;
var zoom = map.getZoom();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Mapa fornecido por <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> e <a href="https://www.mapbox.com/about/company/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYnJ5Y2VlZCIsImEiOiJjbDA2NzQ3eWwwd2t3M2tueTgwYTNmeGY1In0.OLc3Hh-QhsLTz7JGd-IY2g'
}).addTo(map)


// FUNCTIONS //
function updateActualPos(lat, lng) {
    if (actualPos[0] != lat || actualPos[1] != lng) {
        actualPos[0] = lat;
        actualPos[1] = lng;
        // draw a circle at the actual position
        if (actualPos[0] == null && actualPos[1] == null) {
            actualMark = L.circle([actualPos[0], actualPos[1]], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2,
                radius: 15
            }).addTo(map);
        } else {
            if (actualMark) {
                map.removeLayer(actualMark);
            }
            actualMark = L.circle([actualPos[0], actualPos[1]], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.2,
                radius: 15
            }).addTo(map);
        }
    }
}

function changeView(lat, lng, zoom = 18) {
    map.setView([lat, lng], zoom);
}
function insertMarker(lat, lng) {
    L.marker([lat, lng]).addTo(map);
}

function changeType(type) {
    map.eachLayer(function (layer) {
        if (layer.options.type === type) {
            map.removeLayer(layer);
        }
    });
}

// SEARCHING ADDRESS //
var searchAddr = document.getElementById('searchAddr');
var searchInput = document.getElementById('search-input');
var searchByGPS = document.getElementById('tryGPS');
var searchValue;

searchAddr.addEventListener('click', function () {
    searchIntoMap();
});
searchInput.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        searchIntoMap();
        searchInput.blur();
    }
});
searchByGPS.addEventListener('click', function () {
    getActualGPS();
});

// When a marker is clicked, open a popup with the marker's name
function onMapClick(e) {
    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

// Event to handle when a click is made on the map
map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    changeView(lat, lng, zoom);
    // check if the click happens on a marker
    if (e.originalEvent.target.tagName == "circle") {
        var lat = e.originalEvent.target._latlng.lat;
        var lng = e.originalEvent.target._latlng.lng;
        changeView(lat, lng, zoom);
    }
});

// INPUT HANDLER //
var searchInputIsEmpty = true;
searchInput.addEventListener('input', function () {
    searchValue = searchInput.value;
    if (searchValue.length > 0 && searchInputIsEmpty == true) {
        searchAddr.classList.remove('hide-it');
        searchByGPS.classList.add('hide-it');
        searchInputIsEmpty = false;
    } else {
        if (searchValue.length == 0) {
            searchAddr.classList.add('hide-it');
            searchByGPS.classList.remove('hide-it');
            searchInputIsEmpty = true;
        }
    }
    if (searchValue === "---debug") {
        if (debug == false) {
            debug = true;
            var div = document.createElement('div');
            div.id = "debug";
            document.body.appendChild(div);
            searchValue = "";
            alert("Debug mode enabled");
        } else {
            debug = false;
            document.body.removeChild(document.getElementById('debug'));
            alert("Debug mode disabled");
        }
    }
});
// when click in closeNearSidemenu, close it
var closeNearSidemenu = document.getElementById('closeNearSidemenu');
var mappingList = document.getElementById('mappingList');
var searchArea = document.getElementById('searchArea');
closeNearSidemenu.addEventListener('click', function () {
    // close the sidemenu
    mappingList.classList.add("hide-it");
    searchArea.classList.add("restore-it");
});

// SEARCHING //
function searchIntoMap() {
    searchValue = searchInput.value || null;
    if (searchValue) {
        var url = 'https://nominatim.openstreetmap.org/search?q=' + searchValue + '&format=json&polygon=1&addressdetails=1';
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.length > 0) {
                    var lat = data[0].lat;
                    var lng = data[0].lon;
                    zoom = map.getZoom();
                    // set new value to input
                    searchInput.value = data[0].osm_type;
                    switch (data[0].osm_type) {
                        case 'node':
                            changeView(lat, lng, 18);
                            break;
                        case 'way':
                            changeView(lat, lng, 16);
                            break;
                        case 'relation':
                            changeView(lat, lng, 13);
                            break;
                        default:
                            alert('[ERROR 404] Não foi possível encontrar o endereço informado.');
                            break;
                    }
                    if (data[0].osm_type == 'node') {
                        document.title = data[0].address.city + ', ' + data[0].address.state + " " + data[0].address.country_code.toUpperCase() + ' (' + data[0].address.postcode + ')';
                    } else {
                        document.title = data[0].address.city + ', ' + data[0].address.state + " " + data[0].address.country_code.toUpperCase();
                    }
                    updateActualPos(lat, lng);
                }
            }
            );
    }
}


// GPS //
function getActualGPS() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getActualGPS_success, getActualGPS_error, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        alert('Não foi possível obter a localização atual. Por favor, ative o GPS do seu dispositivo e/ou verifique se não há restrições de acesso ao serviço.');
    }
}
function getActualGPS_success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    changeView(lat, lng, zoom);
    updateActualPos(lat, lng);
}
function getActualGPS_error(error) {
    alert('Não foi possível obter a localização atual. Por favor, ative o GPS do seu dispositivo e/ou verifique se não há restrições de acesso ao serviço.');
}
function getNearPlacesOrder(aLat, aLong, bLat, bLong, rad) {
    var a = Math.PI * aLat / 180;
    var b = Math.PI * bLat / 180;
    var c = Math.PI * aLong / 180;
    var d = Math.PI * bLong / 180;
    var dist = Math.acos(Math.sin(a) * Math.sin(b) + Math.cos(a) * Math.cos(b) * Math.cos(c - d)) * 6371;
    return dist;
}