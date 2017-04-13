{
	"template":"Single Map (HTML Edition)",
	"version":"6.7.1_b1,635 (2013-09-04 1449)",
	"boundingBox":"-149522.93 6943919.03 -74046.66 7076229.75",
	"layers":[
	{
		"type":"base-layer",
		"id":"_local_authorities.shp1",
		"name":"Local Authorities",
		"geometry":"polygon",
		"url":"_local_authorities.shp1.js",
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
		"name":"Towns",
		"geometry":"point",
		"url":"contextualLayer1.js",
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