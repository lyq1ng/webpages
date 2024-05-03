// 初始化地图
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'https://t6.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=22d8b67fcba918adc0a566e96d1587b3'
            })
        }),
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'http://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=b9031f80391e6b65bd1dd80dcde1b097'
            })
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([110.801228917, 32.6369943395]),
        zoom: 5
    })
});

// 准备热力图数据
var heatmapData = [];
for (var i = 0; i < 1000; i++) {
    // 随机生成坐标点数据，这里仅作示例
    heatmapData.push([
        Math.random() * 360 - 180,
        Math.random() * 180 - 90
    ]);
}

// 创建热力图图层
var heatmapLayer = new ol.layer.Heatmap({
    // 设置热力图数据
    source: new ol.source.Vector({
        features: heatmapData.map(function (point) {
            return new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat(point))
            });
        })
    }),
    // 设置热力图样式
    blur: 20,
    radius: 20,
    opacity: 0.8
});

// 将热力图图层添加到地图中
map.addLayer(heatmapLayer);