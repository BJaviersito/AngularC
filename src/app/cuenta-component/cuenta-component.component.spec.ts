import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaComponentComponent } from './cuenta-component.component';

describe('CuentaComponentComponent', () => {
  let component: CuentaComponentComponent;
  let fixture: ComponentFixture<CuentaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentaComponentComponent]
    });
    fixture = TestBed.createComponent(CuentaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
