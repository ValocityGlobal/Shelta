import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  drawerMode = 'side'; // side | push | over
  constructor() {}

  // [TODO] move the map search to a separate component
  applySearch(event$) {
    console.log(' search event:', event);
  }

  // move the map services choices/filters to a separate components
  onServiceSelected($event) {
    console.log(' map service has benn selected ', $event);
  }
}
