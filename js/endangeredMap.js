

var map = L.map('map').setView([37.8, -96], 3);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy;<a href="http://www.fws.gov/endangered/"> U.S. Fish & Wildlife Serivce </a>' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-20v6611k'

}).addTo(map);


// control that shows state info on hover
var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create('div', 'info');
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML = '<h6>Endangered Species by population</h6>' +  (props ?
    '<b>' + props.name + '</b><br />' + props.density + ' species per 1,000,000 people'
    : 'Hover over a state');
};

info.addTo(map);


// get color depending on population density value
function getColor(d) {
  return d > 30 ? '#3f007d' :
         d > 25  ? '#54278f' :
         d > 20 ? '#6a51a3' :
         d > 15  ? '#9e9ac8' :
         d > 10   ? '#807dba' :
         d > 5   ? '#9e9ac8' :
   d > 1   ? '#bcbddc' :
                   '#fcfbfd';
}

function style(feature) {
  return {
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.density)
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera) {
    layer.bringToFront();
  }

  info.update(layer.feature.properties);
}

var geojson;

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature

  });
}

geojson = L.geoJson(statesData, {
  style: style,
  onEachFeature: onEachFeature
}).addTo(map);


map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');

//legend

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

  var div = L.DomUtil.create('div', 'info legend'),
    grades = [1,5, 10, 15, 20,30],
    labels = [],
    from, to;

  for (var i = 0; i < grades.length; i++) {
    from = grades[i];
    to = grades[i + 1];

    labels.push(
      '<i style="background:' + getColor(from + 1) + '"></i> ' +
      from + (to ? '&ndash;' + to : '+'));
  }

  div.innerHTML = labels.join('<br>');
  return div;
};

legend.addTo(map);
