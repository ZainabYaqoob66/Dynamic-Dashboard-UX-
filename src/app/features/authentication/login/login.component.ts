import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { sharedConfig } from "../../../shared/shared.config";
import { featureConfig } from "../../feature.config";
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm : FormGroup;
constructor(public router: Router) {
  this.loginForm = new FormGroup({
    email  : new FormControl(''),
    password : new FormControl('')
  })
}

navigateToRegister() {
  this.router.navigate(['/register']);
  }
}
