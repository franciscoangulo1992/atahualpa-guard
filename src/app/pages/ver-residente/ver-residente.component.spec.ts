import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerResidenteComponent } from './ver-residente.component';

describe('VerResidenteComponent', () => {
  let component: VerResidenteComponent;
  let fixture: ComponentFixture<VerResidenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerResidenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
