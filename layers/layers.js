ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([104.522456, -9.678498, 133.380914, 6.793225]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Hydrography_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Hydrography<br />\
    <img src="styles/legend/Hydrography_1_0.png" /> 0<br />\
    <img src="styles/legend/Hydrography_1_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Hydrography_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Residentialarea_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Residential area<br />\
    <img src="styles/legend/Residentialarea_2_0.png" /> 0<br />\
    <img src="styles/legend/Residentialarea_2_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Residentialarea_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Slope_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope<br />\
    <img src="styles/legend/Slope_3_0.png" /> 0,0000<br />\
    <img src="styles/legend/Slope_3_1.png" /> 17,5448<br />\
    <img src="styles/legend/Slope_3_2.png" /> 35,0896<br />\
    <img src="styles/legend/Slope_3_3.png" /> 52,6345<br />\
    <img src="styles/legend/Slope_3_4.png" /> 70,1793<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slope_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Elevation_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Elevation<br />\
    <img src="styles/legend/Elevation_4_0.png" /> -135<br />\
    <img src="styles/legend/Elevation_4_1.png" /> 953<br />\
    <img src="styles/legend/Elevation_4_2.png" /> 2042<br />\
    <img src="styles/legend/Elevation_4_3.png" /> 3130<br />\
    <img src="styles/legend/Elevation_4_4.png" /> 4218<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Elevation_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Temperature_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Temperature<br />\
    <img src="styles/legend/Temperature_5_0.png" /> 9,3021<br />\
    <img src="styles/legend/Temperature_5_1.png" /> 14,1078<br />\
    <img src="styles/legend/Temperature_5_2.png" /> 18,9135<br />\
    <img src="styles/legend/Temperature_5_3.png" /> 23,7192<br />\
    <img src="styles/legend/Temperature_5_4.png" /> 28,5250<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Temperature_5.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Generationtosubstationratio_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Generation to substation ratio<br />\
    <img src="styles/legend/Generationtosubstationratio_6_0.png" /> 0,0000<br />\
    <img src="styles/legend/Generationtosubstationratio_6_1.png" /> 3,9138<br />\
    <img src="styles/legend/Generationtosubstationratio_6_2.png" /> 7,8277<br />\
    <img src="styles/legend/Generationtosubstationratio_6_3.png" /> 11,7415<br />\
    <img src="styles/legend/Generationtosubstationratio_6_4.png" /> 15,6553<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Generationtosubstationratio_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytosubstation_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to substation<br />\
    <img src="styles/legend/Proximitytosubstation_7_0.png" /> 73,7800<br />\
    <img src="styles/legend/Proximitytosubstation_7_1.png" /> 198387,5694<br />\
    <img src="styles/legend/Proximitytosubstation_7_2.png" /> 396701,3587<br />\
    <img src="styles/legend/Proximitytosubstation_7_3.png" /> 595015,1481<br />\
    <img src="styles/legend/Proximitytosubstation_7_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytosubstation_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytogrid_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to grid<br />\
    <img src="styles/legend/Proximitytogrid_8_0.png" /> 0,7390<br />\
    <img src="styles/legend/Proximitytogrid_8_1.png" /> 198332,7886<br />\
    <img src="styles/legend/Proximitytogrid_8_2.png" /> 396664,8382<br />\
    <img src="styles/legend/Proximitytogrid_8_3.png" /> 594996,8879<br />\
    <img src="styles/legend/Proximitytogrid_8_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytogrid_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytoroad_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to road<br />\
    <img src="styles/legend/Proximitytoroad_9_0.png" /> 0,0703<br />\
    <img src="styles/legend/Proximitytoroad_9_1.png" /> 72442,9043<br />\
    <img src="styles/legend/Proximitytoroad_9_2.png" /> 144885,7383<br />\
    <img src="styles/legend/Proximitytoroad_9_3.png" /> 217328,5723<br />\
    <img src="styles/legend/Proximitytoroad_9_4.png" /> 289771,4063<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytoroad_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_IAV_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IAV<br />\
    <img src="styles/legend/IAV_10_0.png" /> 1,7206<br />\
    <img src="styles/legend/IAV_10_1.png" /> 3,1149<br />\
    <img src="styles/legend/IAV_10_2.png" /> 4,5092<br />\
    <img src="styles/legend/IAV_10_3.png" /> 5,9035<br />\
    <img src="styles/legend/IAV_10_4.png" /> 7,2977<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IAV_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_GHI_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GHI<br />\
    <img src="styles/legend/GHI_11_0.png" /> 120,4312<br />\
    <img src="styles/legend/GHI_11_1.png" /> 140,4032<br />\
    <img src="styles/legend/GHI_11_2.png" /> 160,3752<br />\
    <img src="styles/legend/GHI_11_3.png" /> 180,3472<br />\
    <img src="styles/legend/GHI_11_4.png" /> 200,3192<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GHI_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_LCOE_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LCOE<br />\
    <img src="styles/legend/LCOE_12_0.png" /> 25,8093<br />\
    <img src="styles/legend/LCOE_12_1.png" /> 47,5960<br />\
    <img src="styles/legend/LCOE_12_2.png" /> 69,3828<br />\
    <img src="styles/legend/LCOE_12_3.png" /> 91,1695<br />\
    <img src="styles/legend/LCOE_12_4.png" /> 112,9562<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LCOE_12.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TOPSISscore_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPSIS score<br />\
    <img src="styles/legend/TOPSISscore_13_0.png" /> 0,4056<br />\
    <img src="styles/legend/TOPSISscore_13_1.png" /> 0,5036<br />\
    <img src="styles/legend/TOPSISscore_13_2.png" /> 0,6016<br />\
    <img src="styles/legend/TOPSISscore_13_3.png" /> 0,6997<br />\
    <img src="styles/legend/TOPSISscore_13_4.png" /> 0,7977<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPSISscore_13.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var format_Province_14 = new ol.format.GeoJSON();
var features_Province_14 = format_Province_14.readFeatures(json_Province_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Province_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_14.addFeatures(features_Province_14);
var lyr_Province_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_14, 
                style: style_Province_14,
                popuplayertitle: 'Province',
                interactive: false,
                title: '<img src="styles/legend/Province_14.png" /> Province'
            });
var format_Worstlocations_15 = new ol.format.GeoJSON();
var features_Worstlocations_15 = format_Worstlocations_15.readFeatures(json_Worstlocations_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Worstlocations_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Worstlocations_15.addFeatures(features_Worstlocations_15);
var lyr_Worstlocations_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Worstlocations_15, 
                style: style_Worstlocations_15,
                popuplayertitle: 'Worst locations',
                interactive: true,
                title: '<img src="styles/legend/Worstlocations_15.png" /> Worst locations'
            });
var format_Top100locations_16 = new ol.format.GeoJSON();
var features_Top100locations_16 = format_Top100locations_16.readFeatures(json_Top100locations_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Top100locations_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Top100locations_16.addFeatures(features_Top100locations_16);
var lyr_Top100locations_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Top100locations_16, 
                style: style_Top100locations_16,
                popuplayertitle: 'Top 100 locations',
                interactive: true,
                title: '<img src="styles/legend/Top100locations_16.png" /> Top 100 locations'
            });
var format_RUPTL_17 = new ol.format.GeoJSON();
var features_RUPTL_17 = format_RUPTL_17.readFeatures(json_RUPTL_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RUPTL_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUPTL_17.addFeatures(features_RUPTL_17);
var lyr_RUPTL_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUPTL_17, 
                style: style_RUPTL_17,
                popuplayertitle: 'RUPTL',
                interactive: true,
                title: '<img src="styles/legend/RUPTL_17.png" /> RUPTL'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Hydrography_1.setVisible(false);lyr_Residentialarea_2.setVisible(false);lyr_Slope_3.setVisible(false);lyr_Elevation_4.setVisible(false);lyr_Temperature_5.setVisible(false);lyr_Generationtosubstationratio_6.setVisible(false);lyr_Proximitytosubstation_7.setVisible(false);lyr_Proximitytogrid_8.setVisible(false);lyr_Proximitytoroad_9.setVisible(false);lyr_IAV_10.setVisible(false);lyr_GHI_11.setVisible(false);lyr_LCOE_12.setVisible(false);lyr_TOPSISscore_13.setVisible(true);lyr_Province_14.setVisible(true);lyr_Worstlocations_15.setVisible(true);lyr_Top100locations_16.setVisible(true);lyr_RUPTL_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Hydrography_1,lyr_Residentialarea_2,lyr_Slope_3,lyr_Elevation_4,lyr_Temperature_5,lyr_Generationtosubstationratio_6,lyr_Proximitytosubstation_7,lyr_Proximitytogrid_8,lyr_Proximitytoroad_9,lyr_IAV_10,lyr_GHI_11,lyr_LCOE_12,lyr_TOPSISscore_13,lyr_Province_14,lyr_Worstlocations_15,lyr_Top100locations_16,lyr_RUPTL_17];
lyr_Province_14.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Worstlocations_15.set('fieldAliases', {'fid': 'fid', 'Province': 'Province', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'Hydro': 'Hydro', 'TOPSIS val': 'TOPSIS val', 'Lat': 'Lat', 'Lon': 'Lon', 'LCOE': 'LCOE', });
lyr_Top100locations_16.set('fieldAliases', {'fid': 'fid', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'Province': 'Province', 'Rank': 'Rank', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'Hydro': 'Hydro', 'LCOE': 'LCOE', });
lyr_RUPTL_17.set('fieldAliases', {'Province': 'Province', 'Rank': 'Rank', 'Rank2': 'Rank2', 'Area': 'Area', 'Quota (MW)': 'Quota (MW)', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'Hydro': 'Hydro', 'LCOE': 'LCOE', 'Island': 'Island', });
lyr_Province_14.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Worstlocations_15.set('fieldImages', {'fid': 'TextEdit', 'Province': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'Hydro': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'LCOE': 'TextEdit', });
lyr_Top100locations_16.set('fieldImages', {'fid': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Province': 'TextEdit', 'Rank': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'Hydro': 'TextEdit', 'LCOE': 'TextEdit', });
lyr_RUPTL_17.set('fieldImages', {'Province': 'TextEdit', 'Rank': 'TextEdit', 'Rank2': 'TextEdit', 'Area': 'TextEdit', 'Quota (MW)': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'Hydro': 'TextEdit', 'LCOE': 'TextEdit', 'Island': 'TextEdit', });
lyr_Province_14.set('fieldLabels', {'fid': 'hidden field', 'KDPPUM': 'hidden field', 'WADMPR': 'hidden field', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', });
lyr_Worstlocations_15.set('fieldLabels', {'fid': 'hidden field', 'Province': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'Hydro': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'LCOE': 'inline label - always visible', });
lyr_Top100locations_16.set('fieldLabels', {'fid': 'hidden field', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Province': 'inline label - always visible', 'Rank': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'Hydro': 'inline label - always visible', 'LCOE': 'inline label - always visible', });
lyr_RUPTL_17.set('fieldLabels', {'Province': 'inline label - always visible', 'Rank': 'hidden field', 'Rank2': 'hidden field', 'Area': 'hidden field', 'Quota (MW)': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'Hydro': 'inline label - always visible', 'LCOE': 'inline label - always visible', 'Island': 'hidden field', });
lyr_RUPTL_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});