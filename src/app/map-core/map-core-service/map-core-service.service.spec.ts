import { TestBed } from '@angular/core/testing';

import { MapCoreServiceService } from './map-core-service.service';

describe('MapCoreServiceService', () => {
  let service: MapCoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
