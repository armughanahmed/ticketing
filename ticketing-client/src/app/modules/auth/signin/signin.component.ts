import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;
  errors: any[] = [];
  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.signinForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  private resetForm() {
    this.signinForm.reset({
      email: '',
      password: '',
    });
  }

  onSigninFormSubmit() {
    this._authService.signin(this.signinForm.value).subscribe({
      next: (x) => {
        this.errors = [];
        console.log(x);
        this._router.navigate(['']);
      },
      error: (err) => {
        console.log(err.error.errors);
        this.errors = err.error.errors;
      },
    });
    this.resetForm();
  }
}
