import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-form-add-module',
  templateUrl: './modal-form-add-module.component.html',
  styleUrls: ['./modal-form-add-module.component.css']
})
export class ModalFormAddModuleComponent implements OnInit {

  moduleData: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.moduleData = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  createModule(): void {
    const name = this.moduleData.controls['name'];
    const description = this.moduleData.controls['description'];

    if (!this.moduleData.valid) {
      if (name.invalid) {
        name.markAsTouched();
      }

      if (description.invalid) {
        description.markAsTouched();
      }

      return;
    }

    const currentUrl = this.router.url;

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);

    //window.location.reload();
    //this.router.navigate([`/user/modules`]);
  }
}
