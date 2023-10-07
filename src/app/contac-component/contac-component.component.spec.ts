import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacComponentComponent } from './contac-component.component';

describe('ContacComponentComponent', () => {
  let component: ContacComponentComponent;
  let fixture: ComponentFixture<ContacComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacComponentComponent]
    });
    fixture = TestBed.createComponent(ContacComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
