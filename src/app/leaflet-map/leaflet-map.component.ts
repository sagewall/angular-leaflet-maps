import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const map = L.map('map-canvas', {
      preferCanvas: true,
      zoomControl: false,
      center: L.latLng(39.75621, -104.99404),
      zoom: 13
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const geojsonFeatures = {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'properties': {
          'name': 'Coors Field',
          'amenity': 'Baseball Stadium',
          'popupContent': 'This is where the Rockies play!'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-104.99404, 39.75621]
        }
      }, {
        'type': 'Feature',
        'properties': {
          'name': 'Coors Field Parking',
          'amenity': 'Parking Lot',
          'popupContent': 'This is where the Rockies park!'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-104.9936, 39.7578]
        }
      }]
    };

    const geojsonMarkerOptions = {
      radius: 8,
      fillColor: 'purple',
      color: '#000',
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };

    L.geoJSON(geojsonFeatures, {
      onEachFeature: (feature: any, layer)  => {
        if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
        }
      },
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, geojsonMarkerOptions);
      }
    }).addTo(map);
  }

}
