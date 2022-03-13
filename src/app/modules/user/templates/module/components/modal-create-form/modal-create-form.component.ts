import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import CodeGenerator from 'src/app/utils/code-generator';

@Component({
  selector: 'app-modal-create-form',
  templateUrl: './modal-create-form.component.html',
  styleUrls: ['./modal-create-form.component.css'],
})
export class ModalCreateFormComponent {
  dinamicForm: FormGroup;
  key: String = CodeGenerator.generateCode();

  constructor(private fb: FormBuilder, private router: Router) {
    const form = this.fb.group({
      key: this.key,
      name: ['', Validators.required],
      state: ['', Validators.required],
      inputs: this.fb.array([]),
    });

    this.dinamicForm = form;
  }

  get inputs() {
    return this.dinamicForm.get('inputs') as FormArray;
  }

  options(inputIndex: number) {
    return this.inputs.at(inputIndex).get('options') as FormArray;
  }

  optionsWithoutFirstElement(inputIndex: number) {
    return (
      this.inputs.at(inputIndex).get('options') as FormArray
    ).controls.shift();
  }

  addInput() {
    const input = this.fb.group({
      key: CodeGenerator.generateCode(),
      label: ['', Validators.required],
      type: ['', Validators.required],
      placeholder: '',
      required: false,
      options: this.fb.array([
        this.fb.group({
          key: CodeGenerator.generateCode(),
          value: ['', Validators.required],
        }),
      ]),
      error_message: ['Este campo es obligatorio', Validators.required],
      restrictions: this.fb.group({
        key: CodeGenerator.generateCode(),
        required: true,
        min: '',
        max: '',
      }),
    });

    this.inputs.push(input);
    console.log(this.inputs.controls);
  }

  onSelectTypeChange(inputIndex: number) {
    //const placeholder = this.inputs.at(inputIndex).get('placeholder');
    //placeholder?.setValue('');

    const restrictions = this.inputs.at(inputIndex).get('restrictions');

    const min  = restrictions?.get('min');
    min?.setValue('');

    const max  = restrictions?.get('max');
    max?.setValue('');

    const options = (this.inputs.at(inputIndex).get('options') as FormArray)
      .controls;
    options.splice(1, options.length);
  }

  addOption(inputIndex: number) {
    const option = this.fb.group({
      key: CodeGenerator.generateCode(),
      value: ['', Validators.required],
    });

    this.options(inputIndex).push(option);
  }

  removeInput(index: number) {
    this.inputs.removeAt(index);
  }

  removeOption(inputIndex: number, optionIndex: number) {
    this.options(inputIndex).removeAt(optionIndex);
  }

  createForm() {
    const dinamicForm = {
      ...this.dinamicForm.value,
    };

    console.log(dinamicForm);
  }

  onClose() {
    this.inputs.controls.splice(0, this.inputs.length);
  }
}
