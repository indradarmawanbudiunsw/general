ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([103.582987, -8.622799, 129.746618, 4.102703]);
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
var lyr_Resarea1Nonresarea0_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Res area: 1; Non res area: 0<br />\
    <img src="styles/legend/Resarea1Nonresarea0_1_0.png" /> 0<br />\
    <img src="styles/legend/Resarea1Nonresarea0_1_1.png" /> 0<br />\
    <img src="styles/legend/Resarea1Nonresarea0_1_2.png" /> 1<br />\
    <img src="styles/legend/Resarea1Nonresarea0_1_3.png" /> 1<br />\
    <img src="styles/legend/Resarea1Nonresarea0_1_4.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Resarea1Nonresarea0_1.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Slopedeg_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Slope (deg)<br />\
    <img src="styles/legend/Slopedeg_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/Slopedeg_2_1.png" /> 17,5448<br />\
    <img src="styles/legend/Slopedeg_2_2.png" /> 35,0896<br />\
    <img src="styles/legend/Slopedeg_2_3.png" /> 52,6345<br />\
    <img src="styles/legend/Slopedeg_2_4.png" /> 70,1793<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Slopedeg_2.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_ElevationMASL_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Elevation (MASL)<br />\
    <img src="styles/legend/ElevationMASL_3_0.png" /> -135<br />\
    <img src="styles/legend/ElevationMASL_3_1.png" /> 953<br />\
    <img src="styles/legend/ElevationMASL_3_2.png" /> 2042<br />\
    <img src="styles/legend/ElevationMASL_3_3.png" /> 3130<br />\
    <img src="styles/legend/ElevationMASL_3_4.png" /> 4218<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ElevationMASL_3.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TemperatureC_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Temperature (C)<br />\
    <img src="styles/legend/TemperatureC_4_0.png" /> 9,3021<br />\
    <img src="styles/legend/TemperatureC_4_1.png" /> 14,1078<br />\
    <img src="styles/legend/TemperatureC_4_2.png" /> 18,9135<br />\
    <img src="styles/legend/TemperatureC_4_3.png" /> 23,7192<br />\
    <img src="styles/legend/TemperatureC_4_4.png" /> 28,5250<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TemperatureC_4.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Generationtosubstationratio_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Generation to substation ratio<br />\
    <img src="styles/legend/Generationtosubstationratio_5_0.png" /> 0,0000<br />\
    <img src="styles/legend/Generationtosubstationratio_5_1.png" /> 3,9138<br />\
    <img src="styles/legend/Generationtosubstationratio_5_2.png" /> 7,8277<br />\
    <img src="styles/legend/Generationtosubstationratio_5_3.png" /> 11,7415<br />\
    <img src="styles/legend/Generationtosubstationratio_5_4.png" /> 15,6553<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Generationtosubstationratio_5.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytosubstationm_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to substation (m)<br />\
    <img src="styles/legend/Proximitytosubstationm_6_0.png" /> 73,7800<br />\
    <img src="styles/legend/Proximitytosubstationm_6_1.png" /> 198387,5694<br />\
    <img src="styles/legend/Proximitytosubstationm_6_2.png" /> 396701,3587<br />\
    <img src="styles/legend/Proximitytosubstationm_6_3.png" /> 595015,1481<br />\
    <img src="styles/legend/Proximitytosubstationm_6_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytosubstationm_6.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_Proximitytogridm_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Proximity to grid (m)<br />\
    <img src="styles/legend/Proximitytogridm_7_0.png" /> 0,7390<br />\
    <img src="styles/legend/Proximitytogridm_7_1.png" /> 198332,7886<br />\
    <img src="styles/legend/Proximitytogridm_7_2.png" /> 396664,8382<br />\
    <img src="styles/legend/Proximitytogridm_7_3.png" /> 594996,8879<br />\
    <img src="styles/legend/Proximitytogridm_7_4.png" /> 793328,9375<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Proximitytogridm_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_IAV_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IAV (%)<br />\
    <img src="styles/legend/IAV_8_0.png" /> 1.6767<br />\
    <img src="styles/legend/IAV_8_1.png" /> 3.0862<br />\
    <img src="styles/legend/IAV_8_2.png" /> 4.4957<br />\
    <img src="styles/legend/IAV_8_3.png" /> 5.9052<br />\
    <img src="styles/legend/IAV_8_4.png" /> 7.3147<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IAV_8.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_GHIWm2_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'GHI (W/m2)<br />\
    <img src="styles/legend/GHIWm2_9_0.png" /> 305.8455<br />\
    <img src="styles/legend/GHIWm2_9_1.png" /> 358.6903<br />\
    <img src="styles/legend/GHIWm2_9_2.png" /> 411.5352<br />\
    <img src="styles/legend/GHIWm2_9_3.png" /> 464.3800<br />\
    <img src="styles/legend/GHIWm2_9_4.png" /> 517.2248<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GHIWm2_9.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_LCOEUSMWh_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LCOE (US$/MWh)<br />\
    <img src="styles/legend/LCOEUSMWh_10_0.png" /> 41.6173<br />\
    <img src="styles/legend/LCOEUSMWh_10_1.png" /> 81.8392<br />\
    <img src="styles/legend/LCOEUSMWh_10_2.png" /> 122.0611<br />\
    <img src="styles/legend/LCOEUSMWh_10_3.png" /> 162.2831<br />\
    <img src="styles/legend/LCOEUSMWh_10_4.png" /> 202.5050<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LCOEUSMWh_10.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var lyr_TOPSIS_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPSIS<br />\
    <img src="styles/legend/TOPSIS_11_0.png" /> 0.0000<br />\
    <img src="styles/legend/TOPSIS_11_1.png" /> 0.2500<br />\
    <img src="styles/legend/TOPSIS_11_2.png" /> 0.5000<br />\
    <img src="styles/legend/TOPSIS_11_3.png" /> 0.7500<br />\
    <img src="styles/legend/TOPSIS_11_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPSIS_11.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [93.097256, -11.002735, 142.932744, 7.922735]
        })
    });
var format_Worstlocations_12 = new ol.format.GeoJSON();
var features_Worstlocations_12 = format_Worstlocations_12.readFeatures(json_Worstlocations_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Worstlocations_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Worstlocations_12.addFeatures(features_Worstlocations_12);
var lyr_Worstlocations_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Worstlocations_12, 
                style: style_Worstlocations_12,
                popuplayertitle: 'Worst locations',
                interactive: true,
                title: '<img src="styles/legend/Worstlocations_12.png" /> Worst locations'
            });
var format_Top100locations_13 = new ol.format.GeoJSON();
var features_Top100locations_13 = format_Top100locations_13.readFeatures(json_Top100locations_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Top100locations_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Top100locations_13.addFeatures(features_Top100locations_13);
var lyr_Top100locations_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Top100locations_13, 
                style: style_Top100locations_13,
                popuplayertitle: 'Top 100 locations',
                interactive: true,
                title: '<img src="styles/legend/Top100locations_13.png" /> Top 100 locations'
            });
var format_RUPTL_14 = new ol.format.GeoJSON();
var features_RUPTL_14 = format_RUPTL_14.readFeatures(json_RUPTL_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RUPTL_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUPTL_14.addFeatures(features_RUPTL_14);
var lyr_RUPTL_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUPTL_14, 
                style: style_RUPTL_14,
                popuplayertitle: 'RUPTL',
                interactive: true,
                title: '<img src="styles/legend/RUPTL_14.png" /> RUPTL'
            });
var format_Province_15 = new ol.format.GeoJSON();
var features_Province_15 = format_Province_15.readFeatures(json_Province_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Province_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Province_15.addFeatures(features_Province_15);
var lyr_Province_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Province_15, 
                style: style_Province_15,
                popuplayertitle: 'Province',
                interactive: false,
                title: '<img src="styles/legend/Province_15.png" /> Province'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Resarea1Nonresarea0_1.setVisible(false);lyr_Slopedeg_2.setVisible(false);lyr_ElevationMASL_3.setVisible(false);lyr_TemperatureC_4.setVisible(false);lyr_Generationtosubstationratio_5.setVisible(false);lyr_Proximitytosubstationm_6.setVisible(false);lyr_Proximitytogridm_7.setVisible(false);lyr_IAV_8.setVisible(false);lyr_GHIWm2_9.setVisible(false);lyr_LCOEUSMWh_10.setVisible(false);lyr_TOPSIS_11.setVisible(false);lyr_Worstlocations_12.setVisible(true);lyr_Top100locations_13.setVisible(true);lyr_RUPTL_14.setVisible(true);lyr_Province_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Resarea1Nonresarea0_1,lyr_Slopedeg_2,lyr_ElevationMASL_3,lyr_TemperatureC_4,lyr_Generationtosubstationratio_5,lyr_Proximitytosubstationm_6,lyr_Proximitytogridm_7,lyr_IAV_8,lyr_GHIWm2_9,lyr_LCOEUSMWh_10,lyr_TOPSIS_11,lyr_Worstlocations_12,lyr_Top100locations_13,lyr_RUPTL_14,lyr_Province_15];
lyr_Worstlocations_12.set('fieldAliases', {'Province': 'Province', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'TOPSIS val': 'TOPSIS val', 'Lat': 'Lat', 'Lon': 'Lon', 'LCOE': 'LCOE', });
lyr_Top100locations_13.set('fieldAliases', {'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'Province': 'Province', 'Rank': 'Rank', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'LCOE': 'LCOE', });
lyr_RUPTL_14.set('fieldAliases', {'Province': 'Province', 'Rank': 'Rank', 'Rank2': 'Rank2', 'Area': 'Area', 'Quota (MW)': 'Quota (MW)', 'Lat': 'Lat', 'Lon': 'Lon', 'TOPSIS val': 'TOPSIS val', 'GHI': 'GHI', 'Elevation': 'Elevation', 'IAV': 'IAV', 'Prox road': 'Prox road', 'Prox grid': 'Prox grid', 'Prox ss': 'Prox ss', 'Temp': 'Temp', 'Slope': 'Slope', 'Resident': 'Resident', 'Rat PP/SS': 'Rat PP/SS', 'LCOE': 'LCOE', 'TOPSIS Sco': 'TOPSIS Sco', 'Island': 'Island', });
lyr_Province_15.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'WADMPR': 'WADMPR', 'METADATA': 'METADATA', 'UPDATED': 'UPDATED', });
lyr_Worstlocations_12.set('fieldImages', {'Province': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'LCOE': 'TextEdit', });
lyr_Top100locations_13.set('fieldImages', {'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'Province': 'TextEdit', 'Rank': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'LCOE': 'TextEdit', });
lyr_RUPTL_14.set('fieldImages', {'Province': 'TextEdit', 'Rank': 'TextEdit', 'Rank2': 'TextEdit', 'Area': 'TextEdit', 'Quota (MW)': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'TOPSIS val': 'TextEdit', 'GHI': 'TextEdit', 'Elevation': 'TextEdit', 'IAV': 'TextEdit', 'Prox road': 'TextEdit', 'Prox grid': 'TextEdit', 'Prox ss': 'TextEdit', 'Temp': 'TextEdit', 'Slope': 'TextEdit', 'Resident': 'TextEdit', 'Rat PP/SS': 'TextEdit', 'LCOE': 'TextEdit', 'TOPSIS Sco': '', 'Island': 'TextEdit', });
lyr_Province_15.set('fieldImages', {'fid': 'TextEdit', 'KDPPUM': 'TextEdit', 'WADMPR': 'TextEdit', 'METADATA': 'TextEdit', 'UPDATED': 'TextEdit', });
lyr_Worstlocations_12.set('fieldLabels', {'Province': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'LCOE': 'inline label - always visible', });
lyr_Top100locations_13.set('fieldLabels', {'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'Province': 'inline label - always visible', 'Rank': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'LCOE': 'inline label - always visible', });
lyr_RUPTL_14.set('fieldLabels', {'Province': 'inline label - always visible', 'Rank': 'hidden field', 'Rank2': 'hidden field', 'Area': 'hidden field', 'Quota (MW)': 'inline label - always visible', 'Lat': 'inline label - always visible', 'Lon': 'inline label - always visible', 'TOPSIS val': 'inline label - always visible', 'GHI': 'inline label - always visible', 'Elevation': 'inline label - always visible', 'IAV': 'inline label - always visible', 'Prox road': 'inline label - always visible', 'Prox grid': 'inline label - always visible', 'Prox ss': 'inline label - always visible', 'Temp': 'inline label - always visible', 'Slope': 'inline label - always visible', 'Resident': 'inline label - always visible', 'Rat PP/SS': 'inline label - always visible', 'LCOE': 'inline label - always visible', 'TOPSIS Sco': 'hidden field', 'Island': 'inline label - always visible', });
lyr_Province_15.set('fieldLabels', {'fid': 'hidden field', 'KDPPUM': 'hidden field', 'WADMPR': 'hidden field', 'METADATA': 'hidden field', 'UPDATED': 'hidden field', });
lyr_Province_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});