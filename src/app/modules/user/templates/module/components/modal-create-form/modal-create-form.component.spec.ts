import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFormComponent } from './modal-create-form.component';

describe('ModalCreateFormComponent', () => {
  let component: ModalCreateFormComponent;
  let fixture: ComponentFixture<ModalCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
