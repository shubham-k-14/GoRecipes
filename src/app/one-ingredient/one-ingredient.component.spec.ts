import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneIngredientComponent } from './one-ingredient.component';

describe('OneIngredientComponent', () => {
  let component: OneIngredientComponent;
  let fixture: ComponentFixture<OneIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
