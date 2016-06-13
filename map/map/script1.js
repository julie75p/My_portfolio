/*jslint browser: true, node: true*/
/*jslint devel: true*/
/*global google*/
function initialiser() {
    "use strict";
    var latlng, options, carte, marqueur, polygoneParcelleSanglier, polygoneParcelleHeig, parcelleHeig, parcelleSanglier, contenuBulleSanglier, infoBulle, contenuBulleAri, infoBulle1, infoBulle2, contenuBulleRenard, parcelleRenard, polygoneParcelleRenard, contenuBulleOurs, infoBulle3, polygoneParcelleOurs, parcelleOurs, infoBulle4, contenuBulleCerf, polygoneParcelleCerf, parcelleCerf, infoBulle5, parcelleTigre, polygoneParcelleTigre, contenuBulleTigre;
    latlng = new google.maps.LatLng(46.779231, 6.659431);
    options = {
        center: latlng,
        zoom: 0,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    carte = new google.maps.Map(document.getElementById("carte"), options);
     //création du marqueur
    marqueur = new google.maps.Marker({
        position: new google.maps.LatLng(46.779231, 6.659431),
        map: carte
    });
    /****************Nouveau code****************/
    //ne pas oublier de rendre le marqueur "déplaçable"
    marqueur.setDraggable(true);
    google.maps.event.addListener(marqueur, 'dragend', function (event) {
        //message d'alerte affichant la nouvelle position du marqueur
        alert("La nouvelle coordonnée du marqueur est : " + event.latLng);
    });

    /****************Nouveau code****************/
    //redéfinition du zoom
    carte.setZoom(4);

    //sommets du polygone
    parcelleHeig = [
        new google.maps.LatLng(46.779733557514, 6.660767535),
        new google.maps.LatLng(43.46198853249996, 4.6371741488037515),
        new google.maps.LatLng(43.36697097504744, 6.0002513125000405),
        new google.maps.LatLng(44.03414546916152, 7.5822825625000405),
        new google.maps.LatLng(46.778462483896, 6.6592118537714)
    ];

    polygoneParcelleHeig = new google.maps.Polygon({

        paths: parcelleHeig,//sommets du polygone

        strokeColor: "#0FF000",//couleur des bords du polygone

        strokeOpacity: 0.8,//opacité des bords du polygone

        strokeWeight: 2,//épaisseur des bords du polygone

        fillColor: "#0FF000",//couleur de remplissage du polygone

        fillOpacity: 0.35////opacité de remplissage du polygone

    });
    polygoneParcelleHeig.setMap(carte);

    contenuBulleAri = '<h1>Araignée de schiste</h1>' + '<img id="lettrineImage" src="media/ari.png " />' + '<p>Niveau 84-85</p>' + '<p> Localisation : Hautes-terres du Crépuscule </p>' + '<p> Alimentation :viande, poisson, viande crue et poisson cru.</p>';
    infoBulle1 = new google.maps.InfoWindow({
        content: contenuBulleAri
    });
    google.maps.event.addListener(polygoneParcelleHeig, 'click', function () {
        infoBulle1.open(carte, polygoneParcelleHeig);
    });
    google.maps.event.addListener(polygoneParcelleHeig, 'mouseout', function () {
        infoBulle1.close();
    });

    /********************************************/
    parcelleSanglier = [

        new google.maps.LatLng(48.55465825969975, -4.5905689999999595),
        new google.maps.LatLng(48.844698795375805, -3.1843189999999595),
        new google.maps.LatLng(48.612800083738286, -0.10814712499995949),
        new google.maps.LatLng(46.416888675277605, -1.3825611874999595),
        new google.maps.LatLng(47.733641665018666, -3.0964283749999595),
        new google.maps.LatLng(48.262945412486175, -4.4587330624999595)
    ];

    polygoneParcelleSanglier = new google.maps.Polygon({
        paths: parcelleSanglier,
        strokeColor: "#E09226",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#E09226",
        fillOpacity: 0.35
    });
    polygoneParcelleSanglier.setMap(carte);

    contenuBulleSanglier = '<h1>Sanglier des rochers</h1>' + '<img id="lettrineImage" src="media/sanglier.png " />' + '<p>Niveau 5-6</p>' + '<p> Localisation : Dun Morogh </p>' + '<p> Alimentation : viande, poisson, fromage, pain, fongus et fruit.</p>';
    infoBulle = new google.maps.InfoWindow({
        content: contenuBulleSanglier
    });
    google.maps.event.addListener(polygoneParcelleSanglier, 'click', function () {
        infoBulle.open(carte, polygoneParcelleSanglier);
    });
    google.maps.event.addListener(polygoneParcelleSanglier, 'mouseout', function () {
        infoBulle.close();
    });

    parcelleRenard = [

        new google.maps.LatLng(48.35063498368641, 2.3088450625000405),
        new google.maps.LatLng(46.5681591140796, -0.4157643124999595),
        new google.maps.LatLng(43.49462416676842, 0.8147044375000405),
        new google.maps.LatLng(45.500425906568836, 4.6379466250000405),
        new google.maps.LatLng(47.61528081614898, 5.6706614687500405)
    ];

    polygoneParcelleRenard = new google.maps.Polygon({
        paths: parcelleRenard,
        strokeColor: "#D62099",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#D62099",
        fillOpacity: 0.35
    });
    polygoneParcelleRenard.setMap(carte);

    contenuBulleRenard = '<h1>Renard des collines</h1>' + '<img id="lettrineImage" src="media/fox.png " />' + '<p>Niveau 16-20</p>' + '<p> Localisation : Loch Modan </p>' + '<p> Alimentation : viande, poisson et fruit.</p>';
    infoBulle2 = new google.maps.InfoWindow({
        content: contenuBulleRenard
    });
    google.maps.event.addListener(polygoneParcelleRenard, 'click', function () {
        infoBulle2.open(carte, polygoneParcelleRenard);
    });
    google.maps.event.addListener(polygoneParcelleRenard, 'mouseout', function () {
        infoBulle2.close();
    });

    parcelleOurs = [

        new google.maps.LatLng(83.5167283870431, -36.05541274999996),
        new google.maps.LatLng(78.6240067388552, -18.47728774999996),
        new google.maps.LatLng(69.15173401936009, -25.15697524999996),
        new google.maps.LatLng(66.50113370004043, -36.93431899999996),
        new google.maps.LatLng(59.87367197490988, -43.43822524999996),
        new google.maps.LatLng(64.38378879283583, -50.99681899999996),
        new google.maps.LatLng(74.39398086855611, -56.44603774999996),
        new google.maps.LatLng(77.90929871262776, -69.45385024999996)
    ];

    polygoneParcelleOurs = new google.maps.Polygon({
        paths: parcelleOurs,
        strokeColor: "#B21717",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#B21717",
        fillOpacity: 0.35
    });
    polygoneParcelleOurs.setMap(carte);

    contenuBulleOurs = '<h1>Icepaw Bear</h1>' + '<img id="lettrineImage" src="media/Bear.png " />' + '<p>Niveau 76-77</p>' + '<p> Localisation : Zul Drak </p>' + '<p> Alimentation : Viande, Poisson, Fromage, Pain, Champignon, Fruit</p>';
    infoBulle3 = new google.maps.InfoWindow({
        content: contenuBulleOurs
    });
    google.maps.event.addListener(polygoneParcelleOurs, 'click', function () {
        infoBulle3.open(carte, polygoneParcelleOurs);
    });
    google.maps.event.addListener(polygoneParcelleOurs, 'mouseout', function () {
        infoBulle3.close();
    });

    parcelleCerf = [

        new google.maps.LatLng(76.34471655689032, 98.76880600000004),
        new google.maps.LatLng(55.5611446976507, 32.32349350000004),
        new google.maps.LatLng(56.5427147746497, 82.94849350000004),
        new google.maps.LatLng(55.759459975968895, 133.92505600000004),
        new google.maps.LatLng(64.61083699711926, 176.81568100000004),
        new google.maps.LatLng(66.36055986262102, -172.98900649999996),
        new google.maps.LatLng(69.52387858023151, 165.21411850000004),
        new google.maps.LatLng(71.29103757310386, 126.19068100000004)
    ];

    polygoneParcelleCerf = new google.maps.Polygon({
        paths: parcelleCerf,
        strokeColor: "#53E2EF",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#53E2EF",
        fillOpacity: 0.35
    });
    polygoneParcelleCerf.setMap(carte);

    contenuBulleCerf = '<h1>Cerf des roches</h1>' + '<img id="lettrineImage" src="media/cerf.png " />' + '<p>Niveau 20-77</p>' + '<p> Localisation : Zul Drak </p>' + '<p> Alimentation : Viande, Poisson, Fromage, Pain, Champignon, Fruit</p>';
    infoBulle4 = new google.maps.InfoWindow({
        content: contenuBulleCerf
    });
    google.maps.event.addListener(polygoneParcelleCerf, 'click', function () {
        infoBulle4.open(carte, polygoneParcelleCerf);
    });
    google.maps.event.addListener(polygoneParcelleCerf, 'mouseout', function () {
        infoBulle4.close();
    });
    parcelleTigre = [

        new google.maps.LatLng(31.026869227292554, 14.21802475000004),
        new google.maps.LatLng(16.943643025484263, 37.94849350000004),
        new google.maps.LatLng(-15.31352783880839, 40.05786850000004),
        new google.maps.LatLng(-33.74963743212427, 23.18286850000004),
        new google.maps.LatLng(-24.87416716491094, 16.15161850000004),
        new google.maps.LatLng(5.585710294565626, 10.17505600000004),
        new google.maps.LatLng(8.377073141855478, -11.27025649999996),
        new google.maps.LatLng(26.403983994534165, -13.37963149999996),
        new google.maps.LatLng(33.69903443304553, -4.5905689999999595)
    ];

    polygoneParcelleTigre = new google.maps.Polygon({
        paths: parcelleTigre,
        strokeColor: "#330000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#330000",
        fillOpacity: 0.35
    });
    polygoneParcelleTigre.setMap(carte);

    contenuBulleTigre = '<h1>Tigre sablé</h1>' + '<img id="lettrineImage" src="media/tigre1.png " />' + '<p>Niveau 20-77</p>' + '<p> Localisation : Durotar </p>' + '<p> Alimentation : Viande, Poisson, Fromage.</p>';
    infoBulle5 = new google.maps.InfoWindow({
        content: contenuBulleTigre
    });
    google.maps.event.addListener(polygoneParcelleTigre, 'click', function () {
        infoBulle5.open(carte, polygoneParcelleTigre);
    });
    google.maps.event.addListener(polygoneParcelleTigre, 'mouseout', function () {
        infoBulle5.close();
    });
}