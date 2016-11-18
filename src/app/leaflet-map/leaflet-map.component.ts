import { Component, OnInit } from '@angular/core';
import 'leaflet'

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map = L.map('map-canvas', {
      preferCanvas: true,
      zoomControl: false,
      center: L.latLng(39.756, -105.223),
      zoom: 13
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
