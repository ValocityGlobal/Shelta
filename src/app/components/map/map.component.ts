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
      center: [-36.851509, 174.765167],
      zoom: 14,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    // fetching json data
    this.dataService.getProperty().subscribe((data) => {
      console.log('DATA: ', data);
    })
  }
}
