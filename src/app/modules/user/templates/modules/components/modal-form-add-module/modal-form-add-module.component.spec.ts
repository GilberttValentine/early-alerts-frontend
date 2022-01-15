import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormAddModuleComponent } from './modal-form-add-module.component';

describe('ModalFormAddModuleComponent', () => {
  let component: ModalFormAddModuleComponent;
  let fixture: ComponentFixture<ModalFormAddModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFormAddModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFormAddModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
