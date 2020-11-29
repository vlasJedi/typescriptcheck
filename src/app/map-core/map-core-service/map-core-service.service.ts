import { Injectable } from '@angular/core';
import { IMapCoreService } from './i-map-core-service';
import { MapBridgeService } from './map-bridge-service/map-bridge.service';

@Injectable({
  providedIn: 'root'
})
export class MapCoreServiceService implements IMapCoreService{

  constructor(private mapBridgeService: MapBridgeService) { }

  createMapView() {
    this.mapBridgeService.createMap();
    console.log("Created map view");
  }
}
