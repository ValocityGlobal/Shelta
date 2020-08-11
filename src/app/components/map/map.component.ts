import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import { DataService } from '../../services/data-service.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // DOM has been rendered and our div exists
    // Note that the map div needs to already exist on the DOM before we can reference it to create our map.
    this.initMap();
  }

  initMap() {
    var bed_icon = L.icon({
      iconUrl: 'assets/icons/map-pins/bed/bed_64x64.png',
      iconSize: [64, 64], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    this.map = L.map('map', {
      // Auckland center: [-36.848701, 174.763873]
      center: [-41.1346502, 174.8383448],
      zoom: 14,
    });

    const OSM = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    const EsriWorldImagery = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 20,
        attribution:
          '&copy; <a href="https://www.arcgis.com/home/item.html?id=974d45be315c4c87b2ac32be59af9a0b">Esri</a> contributors',
      }
    );

    OSM.addTo(this.map);

    // fetching geojson data
    this.dataService.getProperty().subscribe((data) => {
      let propertyList = data['features'] as object[];
      console.log('DATA: ', propertyList);

      var Shelters = L.geoJSON(propertyList,
          {
            pointToLayer: function (feature, latlng) {
              return L.marker(latlng, { icon: bed_icon });
            }
          })
        .addTo(this.map)
        .on('click', (marker) => {
          this.openDialog(marker);
        });

      const overlayMaps = { Shelters: Shelters };
      const BaseMaps = {
        'Open Street Map': OSM,
        'Esri Imagery': EsriWorldImagery,
      };
      L.control.layers(BaseMaps, overlayMaps).addTo(this.map);
    });
  }

  openDialog(marker): void {
    this.dialog.open(PopupComponent, {
      width: '350px',
      data: {
        name: 'Auckland Night Shelter',
        fullAddress: '314 Taranaki St',
        phoneNumber: '04 385 3344',
        operationHours: '5:20 pm to 7:30 am',
        description: 'Crisis and transitional information for homeless men'
      },
      position: {
        top: marker.containerPoint.y.toString() + 'px',
        left: marker.containerPoint.x.toString() + 'px'
      }
    });
  }
}
