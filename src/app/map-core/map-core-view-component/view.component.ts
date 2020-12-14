import { Component, AfterViewInit } from '@angular/core';
import { MapCoreServiceService } from '../map-core-service/map-core-service.service';

@Component({
  selector: 'map-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [MapCoreServiceService]
})
export class ViewComponent implements AfterViewInit {

  constructor(private mapCoreServiceService: MapCoreServiceService) { }

  ngAfterViewInit(): void {
    this.mapCoreServiceService.createMapView();
  }
}
