import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalComponentComponent } from './legal-component.component';

describe('LegalComponentComponent', () => {
  let component: LegalComponentComponent;
  let fixture: ComponentFixture<LegalComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalComponentComponent]
    });
    fixture = TestBed.createComponent(LegalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
