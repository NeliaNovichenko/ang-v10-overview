import { TestBed } from '@angular/core/testing';

import { FaceRectService } from './face-rect.service';

describe('FaceRectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceRectService = TestBed.get(FaceRectService);
    expect(service).toBeTruthy();
  });
});
