var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Khayelitsha_1 = new ol.format.GeoJSON();
var features_Khayelitsha_1 = format_Khayelitsha_1.readFeatures(json_Khayelitsha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khayelitsha_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khayelitsha_1.addFeatures(features_Khayelitsha_1);
var lyr_Khayelitsha_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Khayelitsha_1, 
                style: style_Khayelitsha_1,
                popuplayertitle: "Khayelitsha",
                interactive: false,
                title: '<img src="styles/legend/Khayelitsha_1.png" /> Khayelitsha'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: "roads",
                interactive: false,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });
var format_rail_3 = new ol.format.GeoJSON();
var features_rail_3 = format_rail_3.readFeatures(json_rail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rail_3.addFeatures(features_rail_3);
var lyr_rail_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rail_3, 
                style: style_rail_3,
                popuplayertitle: "rail",
                interactive: false,
                title: '<img src="styles/legend/rail_3.png" /> rail'
            });
var format_Khayelitshabusinesses_4 = new ol.format.GeoJSON();
var features_Khayelitshabusinesses_4 = format_Khayelitshabusinesses_4.readFeatures(json_Khayelitshabusinesses_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Khayelitshabusinesses_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Khayelitshabusinesses_4.addFeatures(features_Khayelitshabusinesses_4);
var lyr_Khayelitshabusinesses_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Khayelitshabusinesses_4, 
                style: style_Khayelitshabusinesses_4,
                popuplayertitle: "Khayelitsha businesses",
                interactive: true,
                title: '<img src="styles/legend/Khayelitshabusinesses_4.png" /> Khayelitsha businesses'
            });
var format_TrainStation_5 = new ol.format.GeoJSON();
var features_TrainStation_5 = format_TrainStation_5.readFeatures(json_TrainStation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrainStation_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrainStation_5.addFeatures(features_TrainStation_5);
var lyr_TrainStation_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrainStation_5, 
                style: style_TrainStation_5,
                popuplayertitle: "Train Station",
                interactive: false,
                title: '<img src="styles/legend/TrainStation_5.png" /> Train Station'
            });
var format_Taxirank_6 = new ol.format.GeoJSON();
var features_Taxirank_6 = format_Taxirank_6.readFeatures(json_Taxirank_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taxirank_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taxirank_6.addFeatures(features_Taxirank_6);
var lyr_Taxirank_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taxirank_6, 
                style: style_Taxirank_6,
                popuplayertitle: "Taxi rank",
                interactive: true,
                title: '<img src="styles/legend/Taxirank_6.png" /> Taxi rank'
            });
var format_MajorISP_7 = new ol.format.GeoJSON();
var features_MajorISP_7 = format_MajorISP_7.readFeatures(json_MajorISP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorISP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorISP_7.addFeatures(features_MajorISP_7);
var lyr_MajorISP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorISP_7, 
                style: style_MajorISP_7,
                popuplayertitle: "Major ISP",
                interactive: true,
                title: '<img src="styles/legend/MajorISP_7.png" /> Major ISP'
            });
var format_Market_8 = new ol.format.GeoJSON();
var features_Market_8 = format_Market_8.readFeatures(json_Market_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Market_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Market_8.addFeatures(features_Market_8);
var lyr_Market_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Market_8, 
                style: style_Market_8,
                popuplayertitle: "Market",
                interactive: true,
                title: '<img src="styles/legend/Market_8.png" /> Market'
            });
var format_Municipaloffice_9 = new ol.format.GeoJSON();
var features_Municipaloffice_9 = format_Municipaloffice_9.readFeatures(json_Municipaloffice_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipaloffice_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipaloffice_9.addFeatures(features_Municipaloffice_9);
var lyr_Municipaloffice_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipaloffice_9, 
                style: style_Municipaloffice_9,
                popuplayertitle: "Municipal office ",
                interactive: true,
                title: '<img src="styles/legend/Municipaloffice_9.png" /> Municipal office '
            });
var format_Banks_10 = new ol.format.GeoJSON();
var features_Banks_10 = format_Banks_10.readFeatures(json_Banks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Banks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banks_10.addFeatures(features_Banks_10);
var lyr_Banks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Banks_10, 
                style: style_Banks_10,
                popuplayertitle: "Banks",
                interactive: true,
                title: '<img src="styles/legend/Banks_10.png" /> Banks'
            });
var format_Mall_11 = new ol.format.GeoJSON();
var features_Mall_11 = format_Mall_11.readFeatures(json_Mall_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mall_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mall_11.addFeatures(features_Mall_11);
var lyr_Mall_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mall_11, 
                style: style_Mall_11,
                popuplayertitle: "Mall",
                interactive: true,
                title: '<img src="styles/legend/Mall_11.png" /> Mall'
            });
var format_Postoffice_12 = new ol.format.GeoJSON();
var features_Postoffice_12 = format_Postoffice_12.readFeatures(json_Postoffice_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Postoffice_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postoffice_12.addFeatures(features_Postoffice_12);
var lyr_Postoffice_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postoffice_12, 
                style: style_Postoffice_12,
                popuplayertitle: "Post office",
                interactive: true,
                title: '<img src="styles/legend/Postoffice_12.png" /> Post office'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Khayelitsha_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_rail_3.setVisible(true);lyr_Khayelitshabusinesses_4.setVisible(true);lyr_TrainStation_5.setVisible(true);lyr_Taxirank_6.setVisible(true);lyr_MajorISP_7.setVisible(true);lyr_Market_8.setVisible(true);lyr_Municipaloffice_9.setVisible(true);lyr_Banks_10.setVisible(true);lyr_Mall_11.setVisible(true);lyr_Postoffice_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Khayelitsha_1,lyr_roads_2,lyr_rail_3,lyr_Khayelitshabusinesses_4,lyr_TrainStation_5,lyr_Taxirank_6,lyr_MajorISP_7,lyr_Market_8,lyr_Municipaloffice_9,lyr_Banks_10,lyr_Mall_11,lyr_Postoffice_12];
lyr_Khayelitsha_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_roads_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'highway': 'highway', 'surface': 'surface', 'smoothness': 'smoothness', 'width': 'width', 'lanes': 'lanes', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'source': 'source', 'name_af': 'name_af', 'name_nr': 'name_nr', 'name_st': 'name_st', 'name_nso': 'name_nso', 'name_ssw': 'name_ssw', 'name_ts': 'name_ts', 'name_tn': 'name_tn', 'name_ve': 'name_ve', 'name_xh': 'name_xh', 'name_zu': 'name_zu', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'Name_2': 'Name_2', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_rail_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Khayelitshabusinesses_4.set('fieldAliases', {'Name': 'Name', 'Adress': 'Adress', 'type of business': 'type of business', 'latitude': 'latitude', 'longitude': 'longitude', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_TrainStation_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Taxirank_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_MajorISP_7.set('fieldAliases', {'Business Name': 'Business Name', 'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Category': 'Category', });
lyr_Market_8.set('fieldAliases', {'Name': 'Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Cartegory (Market)': 'Cartegory (Market)', });
lyr_Municipaloffice_9.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'latitude': 'latitude', 'longitude': 'longitude', 'Cartegory (Municipal office)': 'Cartegory (Municipal office)', });
lyr_Banks_10.set('fieldAliases', {'Bank/Institution': 'Bank/Institution', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'type (Bank)': 'type (Bank)', });
lyr_Mall_11.set('fieldAliases', {'Name': 'Name', 'Location': 'Location', 'Type': 'Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Postoffice_12.set('fieldAliases', {'Post Office': 'Post Office', 'Location': 'Location', 'latitude': 'latitude', 'longitude': 'longitude', 'Cartegory (Post office)': 'Cartegory (Post office)', });
lyr_Khayelitsha_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_roads_2.set('fieldImages', {'name': '', 'name_en': '', 'highway': '', 'surface': '', 'smoothness': '', 'width': '', 'lanes': '', 'oneway': '', 'bridge': '', 'layer': '', 'source': '', 'name_af': '', 'name_nr': '', 'name_st': '', 'name_nso': '', 'name_ssw': '', 'name_ts': '', 'name_tn': '', 'name_ve': '', 'name_xh': '', 'name_zu': '', 'osm_id': '', 'osm_type': '', 'Name_2': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_rail_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_Khayelitshabusinesses_4.set('fieldImages', {'Name': 'TextEdit', 'Adress': 'TextEdit', 'type of business': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'field_10': 'TextEdit', });
lyr_TrainStation_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Taxirank_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_MajorISP_7.set('fieldImages', {'Business Name': 'TextEdit', 'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Category': 'TextEdit', });
lyr_Market_8.set('fieldImages', {'Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Cartegory (Market)': 'TextEdit', });
lyr_Municipaloffice_9.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Cartegory (Municipal office)': 'TextEdit', });
lyr_Banks_10.set('fieldImages', {'Bank/Institution': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'type (Bank)': 'TextEdit', });
lyr_Mall_11.set('fieldImages', {'Name': 'TextEdit', 'Location': 'TextEdit', 'Type': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Postoffice_12.set('fieldImages', {'Post Office': 'TextEdit', 'Location': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Cartegory (Post office)': 'TextEdit', });
lyr_Khayelitsha_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_roads_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'highway': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'width': 'no label', 'lanes': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'source': 'no label', 'name_af': 'no label', 'name_nr': 'no label', 'name_st': 'no label', 'name_nso': 'no label', 'name_ssw': 'no label', 'name_ts': 'no label', 'name_tn': 'no label', 'name_ve': 'no label', 'name_xh': 'no label', 'name_zu': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'Name_2': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_rail_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Khayelitshabusinesses_4.set('fieldLabels', {'Name': 'no label', 'Adress': 'no label', 'type of business': 'header label - visible with data', 'latitude': 'no label', 'longitude': 'no label', 'field_6': 'no label', 'field_7': 'no label', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_TrainStation_5.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Taxirank_6.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_MajorISP_7.set('fieldLabels', {'Business Name': 'inline label - visible with data', 'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Category': 'inline label - visible with data', });
lyr_Market_8.set('fieldLabels', {'Name': 'inline label - visible with data', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Cartegory (Market)': 'header label - visible with data', });
lyr_Municipaloffice_9.set('fieldLabels', {'Name': 'header label - always visible', 'Address': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Cartegory (Municipal office)': 'inline label - always visible', });
lyr_Banks_10.set('fieldLabels', {'Bank/Institution': 'header label - visible with data', 'Location': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'type (Bank)': 'inline label - visible with data', });
lyr_Mall_11.set('fieldLabels', {'Name': 'header label - visible with data', 'Location': 'no label', 'Type': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Postoffice_12.set('fieldLabels', {'Post Office': 'inline label - always visible', 'Location': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Cartegory (Post office)': 'no label', });
lyr_Postoffice_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});