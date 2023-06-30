import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedProductsComponent } from './suggested-products.component';

describe('SuggestedProductsComponent', () => {
  let component: SuggestedProductsComponent;
  let fixture: ComponentFixture<SuggestedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestedProductsComponent]
    });
    fixture = TestBed.createComponent(SuggestedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
