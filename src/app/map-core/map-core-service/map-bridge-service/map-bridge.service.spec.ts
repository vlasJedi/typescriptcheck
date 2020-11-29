import { TestBed } from '@angular/core/testing';

import { MapBridgeService } from './map-bridge.service';

describe('MapBridgeService', () => {
  let service: MapBridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapBridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
