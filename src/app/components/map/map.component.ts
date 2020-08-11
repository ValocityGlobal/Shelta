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
    this.map = L.map('map', {
      center: [-41.1346502,174.8383448],
      zoom: 14,
    });

    const OSM = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
  
    //const EsriImageryClarity = L.esri.basemapLayer('ImageryClarity',{maxZoom:21});
    const EsriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 20, 
      attribution: '&copy; <a href="https://www.arcgis.com/home/item.html?id=974d45be315c4c87b2ac32be59af9a0b">Esri</a> contributors'});


    OSM.addTo(this.map);

    const BaseMaps = {
      "Open Street Map": OSM,
      "Esri Imagery": EsriWorldImagery
    };

    L.control.layers(BaseMaps).addTo(this.map);


    // fetching json data
    this.dataService.getProperty().subscribe((data) => {
      console.log('DATA: ', data.properties);
      L.geoJSON(data).addTo(this.map)
      .bindPopup(
        '<b>' + 
        'Name:' + data.properties.Name + 
        '</b><br>' + 
        'Cost: ' + data.properties.Cost.Amount)
    })
  }
}
