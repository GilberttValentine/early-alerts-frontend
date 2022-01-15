import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormModuleComponent } from './card-form-module.component';

describe('CardFormModuleComponent', () => {
  let component: CardFormModuleComponent;
  let fixture: ComponentFixture<CardFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFormModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
