import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoIngredientComponent } from './two-ingredient.component';

describe('TwoIngredientComponent', () => {
  let component: TwoIngredientComponent;
  let fixture: ComponentFixture<TwoIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
