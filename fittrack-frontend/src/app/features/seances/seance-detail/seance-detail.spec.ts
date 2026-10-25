import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeanceDetail } from './seance-detail';

describe('SeanceDetail', () => {
  let component: SeanceDetail;
  let fixture: ComponentFixture<SeanceDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeanceDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(SeanceDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
