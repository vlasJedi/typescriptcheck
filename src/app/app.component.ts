import { Component, OnInit } from '@angular/core';
import { MapCoreServiceService } from './map-core/map-core-service/map-core-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'typescriptcheck';
  constructor(private mapCoreServiceService: MapCoreServiceService) {};
  ngOnInit() {
      this.mapCoreServiceService.createMapView();
  }
}
