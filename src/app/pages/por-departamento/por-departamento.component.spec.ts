import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorDepartamentoComponent } from './por-departamento.component';

describe('PorDepartamentoComponent', () => {
  let component: PorDepartamentoComponent;
  let fixture: ComponentFixture<PorDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
