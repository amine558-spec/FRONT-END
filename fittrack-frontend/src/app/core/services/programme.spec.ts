import { TestBed } from '@angular/core/testing';
import { Programme } from './programme';

describe('Programme', () => {
  let service: Programme;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Programme);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
