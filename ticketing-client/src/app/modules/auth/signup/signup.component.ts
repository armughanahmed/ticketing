import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
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
    this.signupForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  private resetForm() {
    this.signupForm.reset({
      email: '',
      password: '',
    });
  }

  onSignupFormSubmit() {
    this._authService.signup(this.signupForm.value).subscribe({
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
