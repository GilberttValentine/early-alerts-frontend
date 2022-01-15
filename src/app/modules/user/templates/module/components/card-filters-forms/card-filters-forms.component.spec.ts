import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFiltersFormsComponent } from './card-filters-forms.component';

describe('CardFiltersFormsComponent', () => {
  let component: CardFiltersFormsComponent;
  let fixture: ComponentFixture<CardFiltersFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFiltersFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFiltersFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
