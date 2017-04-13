{
	"template":"Single Map (HTML Edition)",
	"version":"6.7.0_b1,525 (2013-06-28 1049)",
	"boundingBox":"-459236.94 7460887.81 -257293.83 7625128.91",
	"layers":[
	{
		"type":"base-layer",
		"id":"Roads_Edinburgh.shp1",
		"name":"Roads",
		"geometry":"line",
		"url":"Roads_Edinburgh.shp1.js",
		"visible":true,
		"symbolSize":15,
		"fillColor":"#ffffff",
		"fillOpacity":0.8,
		"borderColor":"#cccccc",
		"borderThickness":2,
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