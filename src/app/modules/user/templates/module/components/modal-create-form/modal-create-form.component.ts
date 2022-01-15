import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/modules/user/models/form.model';
import { Input } from 'src/app/modules/user/models/input.model';
import CodeGenerator from 'src/app/utils/code-generator';

@Component({
  selector: 'app-modal-create-form',
  templateUrl: './modal-create-form.component.html',
  styleUrls: ['./modal-create-form.component.css']
})
export class ModalCreateFormComponent {
  dinamicForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.dinamicForm = this.fb.group({
      'key': [CodeGenerator.generateCode()],
      'name': ['', Validators.required],
      'state': [null, Validators.required],
      'inputs': this.fb.array([])
    });
  }

  get inputs() {
    return this.dinamicForm.get('inputs') as FormArray;
  }

  addInput() {
    const key = CodeGenerator.generateCode();

    const input = this.fb.group({
      [`key`]: key,
      [`label`]: ['', Validators.required],
      [`type`]: ['', Validators.required],
      [`placeholder`]: '',
      [`required`]: false,
      'options': [{
        'key': '',
        'value': ''
      }]
    });

    this.inputs.push(input);

    console.log(this.inputs.controls);
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);

    console.log(this.inputs.controls);
  }

  refresh() {
    this.inputs.controls.splice(0, this.inputs.length);
  }

  createForm() {
    const dinamicForm = {
      ...this.dinamicForm.value
    }

    console.log(dinamicForm);
  }

  onClose() {
    /*
    this.dinamicForm = this.fb.group({
      'key': [CodeGenerator.generateCode()],
      'name': ['', Validators.required],
      'state': [null, Validators.required],
      'inputs': this.fb.array([])
    });
    */
  }
}
