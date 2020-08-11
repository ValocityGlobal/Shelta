import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  properties: string = '/assets/data/propertyList.json';

  constructor(private http: HttpClient) { }

  addMarkersToMap(map: L.map): void {
    this.http.get(this.properties).subscribe((res: any) => {
      for (const c of res.features) {
        const lat = c.geometry.coordinates[0];
        const lon = c.geometry.coordinates[1];
        const marker = L.marker([lon, lat]).addTo(map);
      }
    });
  }
}
