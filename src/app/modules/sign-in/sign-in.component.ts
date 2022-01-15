import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userCredentials: FormGroup;
  submitted = false;

  codeError = "Por favor ingresa tu código de empleado";
  passwordError = "Por favor ingresa tu contraseña";

  constructor(private fb: FormBuilder, private router: Router) {
    this.userCredentials = this.fb.group({
      code: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  ngOnInit(): void {
  }

  signIn(): void {
    const code = this.userCredentials.controls['code'];
    const password = this.userCredentials.controls['password'];
    const remember = this.userCredentials.controls['remember'].value;

    if (!this.userCredentials.valid) {
      if (code.invalid) {
        this.codeError = "Por favor ingresa tu código de empleado";
        code.markAsTouched();
      }

      if (password.invalid) {
        this.passwordError = "Por favor ingresa tu contraseña";
        password.markAsTouched();
      }

      return;
    }

    console.log(code.value, password.value, remember)

    this.router.navigate([`/user`]);
  }
}
