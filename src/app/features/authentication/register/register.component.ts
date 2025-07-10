import { Component } from '@angular/core';
import { featureConfig } from '../../feature.config';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
}) export class RegisterComponent {
  registerForm: FormGroup;

  constructor(public router:Router) {
    this.registerForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
