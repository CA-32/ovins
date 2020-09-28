var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Communes_32_1 = new ol.format.GeoJSON();
var features_Communes_32_1 = format_Communes_32_1.readFeatures(json_Communes_32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_32_1.addFeatures(features_Communes_32_1);
var lyr_Communes_32_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_32_1, 
                style: style_Communes_32_1,
                interactive: false,
                title: '<img src="styles/legend/Communes_32_1.png" /> Communes_32'
            });
var format_eleveursovinssimplififusion_2 = new ol.format.GeoJSON();
var features_eleveursovinssimplififusion_2 = format_eleveursovinssimplififusion_2.readFeatures(json_eleveursovinssimplififusion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eleveursovinssimplififusion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eleveursovinssimplififusion_2.addFeatures(features_eleveursovinssimplififusion_2);
var lyr_eleveursovinssimplififusion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_eleveursovinssimplififusion_2, 
                style: style_eleveursovinssimplififusion_2,
                interactive: true,
    title: 'eleveurs ovins simplifié fusion<br />\
    <img src="styles/legend/eleveursovinssimplififusion_2_0.png" />  10 - 50 <br />\
    <img src="styles/legend/eleveursovinssimplififusion_2_1.png" />  51 - 150 <br />\
    <img src="styles/legend/eleveursovinssimplififusion_2_2.png" /> >151<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Communes_32_1.setVisible(true);lyr_eleveursovinssimplififusion_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Communes_32_1,lyr_eleveursovinssimplififusion_2];
lyr_Communes_32_1.set('fieldAliases', {'RégION': 'RégION', 'NOM_RégION': 'NOM_RégION', 'DépARTEMEN': 'DépARTEMEN', 'DépARTEM0': 'DépARTEM0', 'ARRONDISSE': 'ARRONDISSE', 'CANTON': 'CANTON', 'ID_BDCARTO': 'ID_BDCARTO', 'COMMUNE': 'COMMUNE', 'COMMUNE0': 'COMMUNE0', 'STATUT': 'STATUT', 'COMMUNE1': 'COMMUNE1', 'ORDONNée_C': 'ORDONNée_C', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'ComCom': 'ComCom', 'Pays': 'Pays', 'Nb_hab': 'Nb_hab', 'Ratio_PAC': 'Ratio_PAC', 'Pourc_bio': 'Pourc_bio', 'SURFACE': 'SURFACE', 'stat bilan bilan_NU INSEE': 'stat bilan bilan_NU INSEE', 'stat bilan bilan_COMMUNE': 'stat bilan bilan_COMMUNE', 'stat bilan bilan_Nombre d\'Ã©leveur de bovin par commune': 'stat bilan bilan_Nombre d\'Ã©leveur de bovin par commune', });
lyr_eleveursovinssimplififusion_2.set('fieldAliases', {'COMMUNE': 'COMMUNE', 'nb ovin/e': 'nb ovin/e', });
lyr_Communes_32_1.set('fieldImages', {'RégION': 'TextEdit', 'NOM_RégION': 'TextEdit', 'DépARTEMEN': 'TextEdit', 'DépARTEM0': 'TextEdit', 'ARRONDISSE': 'TextEdit', 'CANTON': 'TextEdit', 'ID_BDCARTO': 'TextEdit', 'COMMUNE': 'TextEdit', 'COMMUNE0': 'TextEdit', 'STATUT': 'TextEdit', 'COMMUNE1': 'TextEdit', 'ORDONNée_C': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'ComCom': 'TextEdit', 'Pays': 'TextEdit', 'Nb_hab': 'TextEdit', 'Ratio_PAC': 'TextEdit', 'Pourc_bio': 'TextEdit', 'SURFACE': 'TextEdit', 'stat bilan bilan_NU INSEE': 'TextEdit', 'stat bilan bilan_COMMUNE': 'TextEdit', 'stat bilan bilan_Nombre d\'Ã©leveur de bovin par commune': 'TextEdit', });
lyr_eleveursovinssimplififusion_2.set('fieldImages', {'COMMUNE': 'TextEdit', 'nb ovin/e': 'TextEdit', });
lyr_Communes_32_1.set('fieldLabels', {'RégION': 'no label', 'NOM_RégION': 'no label', 'DépARTEMEN': 'no label', 'DépARTEM0': 'no label', 'ARRONDISSE': 'no label', 'CANTON': 'no label', 'ID_BDCARTO': 'no label', 'COMMUNE': 'no label', 'COMMUNE0': 'no label', 'STATUT': 'no label', 'COMMUNE1': 'no label', 'ORDONNée_C': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'ComCom': 'no label', 'Pays': 'no label', 'Nb_hab': 'no label', 'Ratio_PAC': 'no label', 'Pourc_bio': 'no label', 'SURFACE': 'no label', 'stat bilan bilan_NU INSEE': 'no label', 'stat bilan bilan_COMMUNE': 'no label', 'stat bilan bilan_Nombre d\'Ã©leveur de bovin par commune': 'no label', });
lyr_eleveursovinssimplififusion_2.set('fieldLabels', {'COMMUNE': 'header label', 'nb ovin/e': 'header label', });
lyr_eleveursovinssimplififusion_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});