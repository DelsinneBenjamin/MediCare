import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdonnance } from './list-ordonnance';

describe('ListOrdonnance', () => {
  let component: ListOrdonnance;
  let fixture: ComponentFixture<ListOrdonnance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOrdonnance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdonnance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
