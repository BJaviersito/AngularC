import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopComponentComponent } from './shop-component.component';

describe('ShopComponentComponent', () => {
  let component: ShopComponentComponent;
  let fixture: ComponentFixture<ShopComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopComponentComponent]
    });
    fixture = TestBed.createComponent(ShopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
