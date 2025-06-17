var wms_layers = [];

var format_Fiumi_0 = new ol.format.GeoJSON();
var features_Fiumi_0 = format_Fiumi_0.readFeatures(json_Fiumi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fiumi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fiumi_0.addFeatures(features_Fiumi_0);
var lyr_Fiumi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fiumi_0, 
                style: style_Fiumi_0,
                popuplayertitle: 'Fiumi',
                interactive: false,
                title: '<img src="styles/legend/Fiumi_0.png" /> Fiumi'
            });
var format_Elementinaturali_1 = new ol.format.GeoJSON();
var features_Elementinaturali_1 = format_Elementinaturali_1.readFeatures(json_Elementinaturali_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elementinaturali_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elementinaturali_1.addFeatures(features_Elementinaturali_1);
var lyr_Elementinaturali_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elementinaturali_1, 
                style: style_Elementinaturali_1,
                popuplayertitle: 'Elementi naturali',
                interactive: false,
                title: '<img src="styles/legend/Elementinaturali_1.png" /> Elementi naturali'
            });
var format_Strade_2 = new ol.format.GeoJSON();
var features_Strade_2 = format_Strade_2.readFeatures(json_Strade_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strade_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strade_2.addFeatures(features_Strade_2);
var lyr_Strade_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strade_2, 
                style: style_Strade_2,
                popuplayertitle: 'Strade',
                interactive: true,
                title: '<img src="styles/legend/Strade_2.png" /> Strade'
            });
var format_Edifici_3 = new ol.format.GeoJSON();
var features_Edifici_3 = format_Edifici_3.readFeatures(json_Edifici_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Edifici_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Edifici_3.addFeatures(features_Edifici_3);
var lyr_Edifici_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Edifici_3, 
                style: style_Edifici_3,
                popuplayertitle: 'Edifici',
                interactive: false,
                title: '<img src="styles/legend/Edifici_3.png" /> Edifici'
            });
var format_Punti_orografici_4 = new ol.format.GeoJSON();
var features_Punti_orografici_4 = format_Punti_orografici_4.readFeatures(json_Punti_orografici_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_orografici_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_orografici_4.addFeatures(features_Punti_orografici_4);
var lyr_Punti_orografici_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punti_orografici_4, 
                style: style_Punti_orografici_4,
                popuplayertitle: 'Punti_orografici',
                interactive: false,
                title: '<img src="styles/legend/Punti_orografici_4.png" /> Punti_orografici'
            });
var format_Punti_Orografici_5 = new ol.format.GeoJSON();
var features_Punti_Orografici_5 = format_Punti_Orografici_5.readFeatures(json_Punti_Orografici_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_Orografici_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_Orografici_5.addFeatures(features_Punti_Orografici_5);
var lyr_Punti_Orografici_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punti_Orografici_5, 
                style: style_Punti_Orografici_5,
                popuplayertitle: 'Punti_Orografici',
                interactive: false,
                title: '<img src="styles/legend/Punti_Orografici_5.png" /> Punti_Orografici'
            });
var format_Punti_6 = new ol.format.GeoJSON();
var features_Punti_6 = format_Punti_6.readFeatures(json_Punti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punti_6.addFeatures(features_Punti_6);
var lyr_Punti_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punti_6, 
                style: style_Punti_6,
                popuplayertitle: 'Punti',
                interactive: true,
                title: '<img src="styles/legend/Punti_6.png" /> Punti'
            });
var format_Stradepincipali_7 = new ol.format.GeoJSON();
var features_Stradepincipali_7 = format_Stradepincipali_7.readFeatures(json_Stradepincipali_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stradepincipali_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stradepincipali_7.addFeatures(features_Stradepincipali_7);
var lyr_Stradepincipali_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stradepincipali_7, 
                style: style_Stradepincipali_7,
                popuplayertitle: 'Strade pincipali',
                interactive: false,
                title: '<img src="styles/legend/Stradepincipali_7.png" /> Strade pincipali'
            });

        var lyr_GoogleHybrid_8 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IdrantiApprovigionamenticomunali_9 = new ol.format.GeoJSON();
var features_IdrantiApprovigionamenticomunali_9 = format_IdrantiApprovigionamenticomunali_9.readFeatures(json_IdrantiApprovigionamenticomunali_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IdrantiApprovigionamenticomunali_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IdrantiApprovigionamenticomunali_9.addFeatures(features_IdrantiApprovigionamenticomunali_9);
var lyr_IdrantiApprovigionamenticomunali_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IdrantiApprovigionamenticomunali_9, 
                style: style_IdrantiApprovigionamenticomunali_9,
                popuplayertitle: 'Idranti/Approvigionamenti comunali',
                interactive: false,
                title: '<img src="styles/legend/IdrantiApprovigionamenticomunali_9.png" /> Idranti/Approvigionamenti comunali'
            });
var format_Zonadipartenza_10 = new ol.format.GeoJSON();
var features_Zonadipartenza_10 = format_Zonadipartenza_10.readFeatures(json_Zonadipartenza_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonadipartenza_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadipartenza_10.addFeatures(features_Zonadipartenza_10);
var lyr_Zonadipartenza_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonadipartenza_10, 
                style: style_Zonadipartenza_10,
                popuplayertitle: 'Zona di partenza',
                interactive: true,
    title: 'Zona di partenza<br />\
    <img src="styles/legend/Zonadipartenza_10_0.png" /> ASS.PCA<br />\
    <img src="styles/legend/Zonadipartenza_10_1.png" /> Elisuperficie<br />\
    <img src="styles/legend/Zonadipartenza_10_2.png" /> Parco Mezzi PCA<br />\
    <img src="styles/legend/Zonadipartenza_10_3.png" /> D\'AGATE LUCA 16-06-2025<br />' });
var format_AIB_RISCHIO_11 = new ol.format.GeoJSON();
var features_AIB_RISCHIO_11 = format_AIB_RISCHIO_11.readFeatures(json_AIB_RISCHIO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AIB_RISCHIO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIB_RISCHIO_11.addFeatures(features_AIB_RISCHIO_11);
var lyr_AIB_RISCHIO_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIB_RISCHIO_11, 
                style: style_AIB_RISCHIO_11,
                popuplayertitle: 'AIB_RISCHIO',
                interactive: true,
    title: 'AIB_RISCHIO<br />\
    <img src="styles/legend/AIB_RISCHIO_11_0.png" /> ALTO<br />\
    <img src="styles/legend/AIB_RISCHIO_11_1.png" /> BASSO<br />\
    <img src="styles/legend/AIB_RISCHIO_11_2.png" /> MEDIO<br />\
    <img src="styles/legend/AIB_RISCHIO_11_3.png" /> MOLTO ELEVATO<br />' });
var format_Zonarilevata_12 = new ol.format.GeoJSON();
var features_Zonarilevata_12 = format_Zonarilevata_12.readFeatures(json_Zonarilevata_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonarilevata_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonarilevata_12.addFeatures(features_Zonarilevata_12);
var lyr_Zonarilevata_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonarilevata_12, 
                style: style_Zonarilevata_12,
                popuplayertitle: 'Zona rilevata',
                interactive: false,
                title: '<img src="styles/legend/Zonarilevata_12.png" /> Zona rilevata'
            });
var format_isoipse_10mt_13 = new ol.format.GeoJSON();
var features_isoipse_10mt_13 = format_isoipse_10mt_13.readFeatures(json_isoipse_10mt_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_isoipse_10mt_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_isoipse_10mt_13.addFeatures(features_isoipse_10mt_13);
var lyr_isoipse_10mt_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_isoipse_10mt_13, 
                style: style_isoipse_10mt_13,
                popuplayertitle: 'isoipse_10mt',
                interactive: true,
                title: '<img src="styles/legend/isoipse_10mt_13.png" /> isoipse_10mt'
            });
var group_Adrano = new ol.layer.Group({
                                layers: [lyr_Fiumi_0,lyr_Elementinaturali_1,lyr_Strade_2,lyr_Edifici_3,lyr_Punti_orografici_4,lyr_Punti_Orografici_5,lyr_Punti_6,lyr_Stradepincipali_7,],
                                fold: 'close',
                                title: 'Adrano'});

lyr_Fiumi_0.setVisible(true);lyr_Elementinaturali_1.setVisible(true);lyr_Strade_2.setVisible(true);lyr_Edifici_3.setVisible(true);lyr_Punti_orografici_4.setVisible(true);lyr_Punti_Orografici_5.setVisible(true);lyr_Punti_6.setVisible(true);lyr_Stradepincipali_7.setVisible(true);lyr_GoogleHybrid_8.setVisible(true);lyr_IdrantiApprovigionamenticomunali_9.setVisible(true);lyr_Zonadipartenza_10.setVisible(true);lyr_AIB_RISCHIO_11.setVisible(true);lyr_Zonarilevata_12.setVisible(true);lyr_isoipse_10mt_13.setVisible(true);
var layersList = [group_Adrano,lyr_GoogleHybrid_8,lyr_IdrantiApprovigionamenticomunali_9,lyr_Zonadipartenza_10,lyr_AIB_RISCHIO_11,lyr_Zonarilevata_12,lyr_isoipse_10mt_13];
lyr_Fiumi_0.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'waterway': 'waterway', 'name': 'name', });
lyr_Elementinaturali_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'name': 'name', });
lyr_Strade_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'ref': 'ref', 'tunnel': 'tunnel', 'bridge': 'bridge', 'level': 'level', });
lyr_Edifici_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', 'tourism': 'tourism', });
lyr_Punti_orografici_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'places': 'places', });
lyr_Punti_Orografici_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', 'ele': 'ele', });
lyr_Punti_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', });
lyr_Stradepincipali_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name': 'name', });
lyr_IdrantiApprovigionamenticomunali_9.set('fieldAliases', {'id': 'id', 'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Stato': 'Stato', });
lyr_Zonadipartenza_10.set('fieldAliases', {'id': 'id', 'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Luogo': 'Luogo', });
lyr_AIB_RISCHIO_11.set('fieldAliases', {'id': 'id', 'Rischio': 'Rischio', 'Area_Km2': 'Area_Km2', 'Codice': 'Codice', 'Tipologia': 'Tipologia', });
lyr_Zonarilevata_12.set('fieldAliases', {'id': 'id', 'Area_Km2': 'Area_Km2', });
lyr_isoipse_10mt_13.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Fiumi_0.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'waterway': 'TextEdit', 'name': 'TextEdit', });
lyr_Elementinaturali_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'natural': 'TextEdit', 'name': 'TextEdit', });
lyr_Strade_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'tunnel': 'TextEdit', 'bridge': 'TextEdit', 'level': 'TextEdit', });
lyr_Edifici_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'tourism': 'TextEdit', });
lyr_Punti_orografici_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'places': 'TextEdit', });
lyr_Punti_Orografici_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', 'ele': 'TextEdit', });
lyr_Punti_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', });
lyr_Stradepincipali_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name': 'TextEdit', });
lyr_IdrantiApprovigionamenticomunali_9.set('fieldImages', {'id': 'TextEdit', 'Latitudine': 'TextEdit', 'Longitudin': 'TextEdit', 'Stato': 'TextEdit', });
lyr_Zonadipartenza_10.set('fieldImages', {'id': 'TextEdit', 'Latitudine': 'TextEdit', 'Longitudin': 'TextEdit', 'Luogo': 'TextEdit', });
lyr_AIB_RISCHIO_11.set('fieldImages', {'id': 'TextEdit', 'Rischio': 'TextEdit', 'Area_Km2': 'TextEdit', 'Codice': 'TextEdit', 'Tipologia': 'TextEdit', });
lyr_Zonarilevata_12.set('fieldImages', {'id': 'TextEdit', 'Area_Km2': '', });
lyr_isoipse_10mt_13.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Fiumi_0.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'waterway': 'hidden field', 'name': 'header label - always visible', });
lyr_Elementinaturali_1.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'natural': 'hidden field', 'name': 'hidden field', });
lyr_Strade_2.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'name': 'header label - always visible', 'surface': 'hidden field', 'ref': 'hidden field', 'tunnel': 'hidden field', 'bridge': 'hidden field', 'level': 'hidden field', });
lyr_Edifici_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'hidden field', 'amenity': 'hidden field', 'brand': 'hidden field', 'wheelchair': 'hidden field', 'tourism': 'hidden field', });
lyr_Punti_orografici_4.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'name': 'hidden field', 'places': 'hidden field', });
lyr_Punti_Orografici_5.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'name': 'hidden field', 'ele': 'hidden field', });
lyr_Punti_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'name': 'header label - always visible', });
lyr_Stradepincipali_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'name': 'hidden field', });
lyr_IdrantiApprovigionamenticomunali_9.set('fieldLabels', {'id': 'hidden field', 'Latitudine': 'hidden field', 'Longitudin': 'hidden field', 'Stato': 'hidden field', });
lyr_Zonadipartenza_10.set('fieldLabels', {'id': 'hidden field', 'Latitudine': 'hidden field', 'Longitudin': 'hidden field', 'Luogo': 'header label - always visible', });
lyr_AIB_RISCHIO_11.set('fieldLabels', {'id': 'hidden field', 'Rischio': 'header label - always visible', 'Area_Km2': 'hidden field', 'Codice': 'header label - always visible', 'Tipologia': 'hidden field', });
lyr_Zonarilevata_12.set('fieldLabels', {'id': 'hidden field', 'Area_Km2': 'hidden field', });
lyr_isoipse_10mt_13.set('fieldLabels', {'ID': 'no label', 'ELEV': 'header label - always visible', });
lyr_isoipse_10mt_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});