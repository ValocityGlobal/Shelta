import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as L from 'leaflet';
import { DataService } from '../../services/data-service.service';
import { PopupComponent } from '../popup/popup.component';
import { WelcomePopupComponent } from '../WelcomePopup/welcomePopup.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
  private map;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.openWelcomePopup();
  }

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
      center: [-36.848701, 174.763873],
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

    //geolocation of the user
    // this.map.locate({setView: true, watch: false}).on('locationfound', e => {
    //   L.marker(e.latlng).addTo(this.map);
    //   L.circle(e.latlng, e.accuracy/10).addTo(this.map);
    // });

    OSM.addTo(this.map);

    // fetching geojson data
    var self = this;
    this.dataService.getShelters().subscribe((data) => {
      let propertyList = data['features'] as object[];
      var Shelters = L.geoJSON(propertyList, {
        pointToLayer: function (feature, latlng) {
          return L.marker(latlng, { icon: bed_icon });
        },
        onEachFeature: function (feature, layer) {
          layer.on({
            click: function (e) {
              // let operationHoursArr = e.target.feature.properties.Hours;
              // let operationHoursCombined = '';
              // operationHoursArr.forEach(x => {
              //   operationHoursCombined += x.Day + ' ' + x.Hours.Open + '-' + x.Hours.Close + '. ';
              // });

              self.dialog.open(PopupComponent, {
                width: '350px',
                data: {
                  name: e.target.feature.properties.Name,
                  fullAddress: e.target.feature.properties.Address.FullAddress,
                  phoneNumber: e.target.feature.properties.PhoneNumber,
                  operationHours: e.target.feature.properties.Hours,
                  description: e.target.feature.properties.Description,
                  URL: e.target.feature.properties.URL,
                },
                // position: {
                //   top: e.containerPoint.y.toString() + 'px',
                //   left: e.containerPoint.x.toString() + 'px'
                // }
              });
            },
          });
        },
      }).addTo(this.map);

      // const overlayMaps = {"Shelters": Shelters, "Food": Shelters};
      const overlayMaps = { Shelters: Shelters };
      const BaseMaps = {
        'Open Street Map': OSM,
        'Esri Imagery': EsriWorldImagery,
      };
      L.control.layers(BaseMaps, overlayMaps).addTo(this.map);
    });
  }

  openWelcomePopup() {
    this.dialog.open(WelcomePopupComponent, {
      width: '350px',
      data: {
        welcomeTitle: 'Welcome!',
        welcomeMessage:
          'Click on the map pins to view additional information on the location including contact details and hours.',
      },
    });
  }
}
