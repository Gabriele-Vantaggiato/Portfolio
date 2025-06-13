import { TestBed } from '@angular/core/testing';

import { LocaleDetectorService } from './locale-detector.service';

describe('LocaleDetectorService', () => {
  let service: LocaleDetectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaleDetectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
