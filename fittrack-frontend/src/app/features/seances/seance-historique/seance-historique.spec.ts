import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeanceHistorique } from './seance-historique';

describe('SeanceHistorique', () => {
  let component: SeanceHistorique;
  let fixture: ComponentFixture<SeanceHistorique>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeanceHistorique],
    }).compileComponents();

    fixture = TestBed.createComponent(SeanceHistorique);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
