import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartRm } from './chart-rm';

describe('ChartRm', () => {
  let component: ChartRm;
  let fixture: ComponentFixture<ChartRm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRm],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartRm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
