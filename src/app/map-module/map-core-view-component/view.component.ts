import { Component, AfterViewInit } from '@angular/core';
import { MapCoreService } from '@app/map-module/map-core-service/map-core.service';

@Component({
  selector: 'map-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  providers: [MapCoreService]
})
export class ViewComponent implements AfterViewInit {

  constructor(private mapCoreService: MapCoreService) { }

  ngAfterViewInit(): void {
    this.mapCoreService.createMapView();
  }
}
