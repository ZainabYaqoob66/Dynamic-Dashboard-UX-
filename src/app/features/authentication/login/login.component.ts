import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { sharedConfig } from "../../../shared/shared.config";
import { featureConfig } from "../../feature.config";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...featureConfig],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm : FormGroup;
constructor(){
  this.loginForm = new FormGroup({
    email  : new FormControl(''),
    password : new FormControl('')
  })
}
}
