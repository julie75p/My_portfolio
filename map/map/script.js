/*jslint browser: true, node: true*/
/*jslint devel: true*/
/*global google*/
var map;
var panel;
var initialize;
var calcule;
var direction;

function fullscreen() {
    'use strict';
    var elem;
    elem = document.getElementById("map");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }
}

var initialize = function () {
    'use strict';
    var latlng, map, marker, options, panel, pos, infowindow, handleNoGeolocation;
    infowindow = 0;
    handleNoGeolocation = 0;
    latlng = new google.maps.LatLng(48.901157603502014, 2.325611551052134);
    options = {
        center: latlng,
        zoom: 19

    };

    map = new google.maps.Map(document.getElementById("map"), options);

    //création du marqueur
    marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    marker.setDraggable(true);

    google.maps.event.addListener(marker, 'dragend', function (event) {
        //message d'alerte affichant la nouvelle position du marqueur
        alert("La nouvelle coordonnée du marqueur est : " + event.latLng);
    });

    panel = document.getElementById("panel");

    direction = new google.maps.DirectionsRenderer({
        map: map,
        panel: panel
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);

            infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos
            });
            infowindow.setContent('Vous êtes ici !');

            map.setCenter(pos);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }

};

function handleNoGeolocation(errorFlag) {
    'use strict';
    var content, options, infowindow;
    if (errorFlag) {
        content = 'Error: The Geolocation service failed.';
    } else {
        content = 'Error: Your browser doesn\'t support geolocation.';
    }

    options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
    infowindow.setContent('');
}

calcule = function () {
    'use strict';
    var selectedMode, request, directionsService, origin, destination;
    selectedMode = document.getElementById("mode").value;
    origin = document.getElementById('inputSuccess3').value; // Le point départ
    destination = document.getElementById('inputGroupSuccess2').value; // Le point d'arrivé
    if (origin && destination) {
        localStorage.setItem('depart', '->' + document.getElementById('inputSuccess3').value);
        localStorage.setItem('arriver', '->' + document.getElementById('inputGroupSuccess2').value);
        request = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode[selectedMode] // Type de transport
        };
        directionsService = new google.maps.DirectionsService(); // Service de calcul d'itinéraire
        directionsService.route(request, function (response, status) { // Envoie de la requête pour calculer le parcours
            if (status === google.maps.DirectionsStatus.OK) {
                direction.setDirections(response); // Trace l'itinéraire sur la carte et les différentes étapes du parcours
            }
        });
    }
    //http://code.google.com/intl/fr-FR/apis/maps/documentation/javascript/reference.html#DirectionsRequest';
};
localStorage.setItem('result', '->' + document.getElementById('panel').value);

function afficher() {
    'use strict';
    document.getElementById('panel').innerHTML = document.getElementById('panel').innerHTML + localStorage.getItem('depart') + '</br>' + localStorage.getItem('arriver') + '</br>' + localStorage.getItem('result') + '</br>';
}