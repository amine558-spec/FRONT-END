import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgrammeList } from './programme-list';

describe('ProgrammeList', () => {
  let component: ProgrammeList;
  let fixture: ComponentFixture<ProgrammeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammeList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgrammeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
