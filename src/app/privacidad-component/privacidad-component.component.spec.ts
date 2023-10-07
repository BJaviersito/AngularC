import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacidadComponentComponent } from './privacidad-component.component';

describe('PrivacidadComponentComponent', () => {
  let component: PrivacidadComponentComponent;
  let fixture: ComponentFixture<PrivacidadComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacidadComponentComponent]
    });
    fixture = TestBed.createComponent(PrivacidadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
