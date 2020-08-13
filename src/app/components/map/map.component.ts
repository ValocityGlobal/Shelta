import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { DataService } from "../../services/data-service.service";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // DOM has been rendered and our div exists
    // Note that the map div needs to already exist on the DOM before we can reference it to create our map.
    this.initMap();
  }

  initMap() {

    var bed_icon = L.icon({
      iconUrl: 'assets/icons/map-pins/bed/bed_64x64.png',
      iconSize:     [64, 64], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    this.map = L.map('map', {
      center: [-36.848701, 174.763873],
      zoom: 14,
    });

    const OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 19,
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
  
    const EsriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 20, 
        attribution: '&copy; <a href="https://www.arcgis.com/home/item.html?id=974d45be315c4c87b2ac32be59af9a0b">Esri</a> contributors'
      }
    );


    OSM.addTo(this.map);

    // fetching geojson data
    this.dataService.getProperty().subscribe((data) => {

      var Beds = L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {return L.marker(latlng, {icon: bed_icon})},
        onEachFeature: function (feature, layer) {layer.bindPopup(
        '<b>' + 
        'Name:' + feature.properties.Name + 
        '</b><br>' + 
        'Adress: ' + feature.properties.Address.FullAddress);
        }
      }).addTo(this.map);

      const overlayMaps = {"Beds": Beds};
      const BaseMaps = {"Open Street Map": OSM,"Esri Imagery": EsriWorldImagery};
      L.control.layers(BaseMaps, overlayMaps).addTo(this.map);

      // //geolocation of the user
      // this.map.locate({setView: true, watch: false})
      // .on('locationfound', e => {
      //   console.log(e.latlng);
      //   L.marker(e.latlng);
      //   L.circle(e.latlng, e.accuracy/2);
      // });

    })
  }
}
