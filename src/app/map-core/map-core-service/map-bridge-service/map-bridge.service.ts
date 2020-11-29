import { Injectable } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import {fromLonLat, toLonLat} from 'ol/proj';

let mapInstance: Map | null = null;
let mapView: View | null = null;

const DEFAULT_CONTAINER_ID = "map-view";

@Injectable({
  providedIn: 'root'
})
export class MapBridgeService {

  constructor() { }

  createMap() {
    if (mapInstance) return;
    mapView = new View({
        center: [0, 0],
        zoom: 1,
    })
    mapInstance = new Map({
        target: DEFAULT_CONTAINER_ID,
        layers: [
            new TileLayer({
                source: new OSM()
            })
        ],
        view: mapView
    });
};
// moveToCurrentLocation(successCall, errCall) {
//     service.api.getCurrentLocation(
//         (latitude, longitude) => {
//             mapView.setCenter(fromLonLat([longitude, latitude]));
//             successCall();
//         },
//         err => {
//             errCall(err);
//         },
//     );
// };
// getCurrentLocation(successCall: (number, number) => , errCall) {
//     window.navigator.geolocation.getCurrentPosition(
//         geolocation => {
//             successCall(geolocation.coords.latitude, geolocation.coords.longitude);
//         },
//         err => {
//             errCall(err);
//         }
//     )
// };
setZoomLevel(zoomLevel: number) {
    if (mapView == null) return;
    mapView.setZoom(zoomLevel);
}
}
