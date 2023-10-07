import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaComponentComponent } from './politica-component.component';

describe('PoliticaComponentComponent', () => {
  let component: PoliticaComponentComponent;
  let fixture: ComponentFixture<PoliticaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaComponentComponent]
    });
    fixture = TestBed.createComponent(PoliticaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
