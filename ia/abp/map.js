{
	"template":"Bubble Plot (HTML Edition)",
	"version":"6.7.1_b1,549 (2013-09-04 1449)",
	"boundingBox":"-149455.92 6944223.0 -73981.56 7076565.19",
	"layers":[
	{
		"type":"base-layer",
		"id":"Wards-nottinghamshire.shp1",
		"name":"Wards",
		"geometry":"polygon",
		"url":"Wards-nottinghamshire.shp1.js",
		"visible":true,
		"symbolSize":15,
		"fillColor":"#ffffff",
		"fillOpacity":0.8,
		"borderColor":"#cccccc",
		"borderThickness":1,
		"showLabels":false,
		"minLabelExtent":0,
		"maxLabelExtent":1000000,
		"iconPath":"",
		"showDataTips":true,
		"showInLayerList":true
	},
	{
		"type":"base-layer",
		"id":"Wards_centoids_nottinghamshire.shp2",
		"name":"Wards",
		"geometry":"point",
		"url":"Wards_centoids_nottinghamshire.shp2.js",
		"visible":true,
		"symbolSize":15,
		"fillColor":"#ffffff",
		"fillOpacity":0.8,
		"borderColor":"#cccccc",
		"borderThickness":1,
		"showLabels":false,
		"minLabelExtent":0,
		"maxLabelExtent":1000000,
		"iconPath":"",
		"showDataTips":true,
		"showInLayerList":true
	},
	{
		"type":"contextual-layer",
		"id":"contextualLayer1",
		"name":"Local Authorities",
		"geometry":"polygon",
		"url":"contextualLayer1.js",
		"visible":true,
		"symbolSize":10,
		"fillColor":"#FFA200",
		"fillOpacity":0,
		"borderColor":"#FFA200",
		"borderThickness":1.5,
		"showLabels":false,
		"minLabelExtent":0,
		"maxLabelExtent":1000000,
		"iconPath":"",
		"showDataTips":false,
		"showInLayerList":true
	},
	{
		"type":"contextual-layer",
		"id":"contextualLayer2",
		"name":"Towns",
		"geometry":"point",
		"url":"contextualLayer2.js",
		"visible":false,
		"symbolSize":10,
		"fillColor":"#ffff00",
		"fillOpacity":1,
		"borderColor":"#333333",
		"borderThickness":1,
		"showLabels":false,
		"minLabelExtent":0,
		"maxLabelExtent":1000000,
		"iconPath":"",
		"showDataTips":true,
		"showInLayerList":true
	},
	{
		"type":"ags-layer",
		"id":"wms-1996286122",
		"name":"World Physical Map",
		"geometry":"image",
		"visible":true,
		"url":"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/export?",
		"layers":"0",
		"srs":"102100",
		"params":"",
		"tile":true,
		"showInLayerList":true
	}
	]
}