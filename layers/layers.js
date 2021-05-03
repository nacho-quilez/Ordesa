var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Vegetacin_1 = new ol.format.GeoJSON();
var features_Vegetacin_1 = format_Vegetacin_1.readFeatures(json_Vegetacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vegetacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vegetacin_1.addFeatures(features_Vegetacin_1);
var lyr_Vegetacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vegetacin_1, 
                style: style_Vegetacin_1,
                interactive: true,
                title: '<img src="styles/legend/Vegetacin_1.png" /> Vegetación'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Vegetacin_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Vegetacin_1];
lyr_Vegetacin_1.set('fieldAliases', {'Especie dominante': 'Especie dominante', });
lyr_Vegetacin_1.set('fieldImages', {'Especie dominante': '', });
lyr_Vegetacin_1.set('fieldLabels', {'Especie dominante': 'no label', });
lyr_Vegetacin_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});