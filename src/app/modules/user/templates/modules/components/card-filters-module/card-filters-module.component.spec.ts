import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFiltersModuleComponent } from './card-filters-module.component';

describe('CardFiltersModuleComponent', () => {
  let component: CardFiltersModuleComponent;
  let fixture: ComponentFixture<CardFiltersModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFiltersModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFiltersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
