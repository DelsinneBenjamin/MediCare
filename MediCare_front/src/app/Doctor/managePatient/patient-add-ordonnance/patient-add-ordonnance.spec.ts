import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddOrdonnance } from './patient-add-ordonnance';

describe('PatientAddOrdonnance', () => {
  let component: PatientAddOrdonnance;
  let fixture: ComponentFixture<PatientAddOrdonnance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAddOrdonnance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAddOrdonnance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
